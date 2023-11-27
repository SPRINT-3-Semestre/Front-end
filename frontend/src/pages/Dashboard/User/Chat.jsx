import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const WebSocketComponent = () => {
  const [socketStatus, setSocketStatus] = useState('');
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/websocket');
    const client = Stomp.over(socket);

    client.connect({}, (frame) => {
      setSocketStatus(frame.command);
      console.log('Connected');

      client.subscribe('/topic/message', (greeting) => {
        showMessage(greeting.body);
      });

      setStompClient(client);
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, [stompClient]);

  const showMessage = (message) => {
    console.log('Received:', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    const messageContent = { content: messageInput };
    // Adiciona a mensagem ao estado local antes mesmo de ser enviada
    setMessages((prevMessages) => [...prevMessages, JSON.stringify(messageContent)]);

    // Envia a mensagem para o servidor WebSocket
    stompClient.send('/app/sendMessage', {}, JSON.stringify(messageContent));

    // Limpa o campo de entrada
    setMessageInput('');
  };

  return (
    <div>
      <div id="status" className={socketStatus === 'CONNECTED' ? 'open' : ''}>
        {socketStatus}
      </div>
      <ul id="messages">
        {messages.map((message, index) => (
          <li key={index} className="received">
            <span>Received: </span>
            {message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default WebSocketComponent;
