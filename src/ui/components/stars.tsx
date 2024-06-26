import { useState } from 'react';
import star0 from '../../ui/images/star.png';
import star1 from '../../ui/images/star(2).png';
import styled from 'styled-components';

function Avaliacao() {
    
    
    const [avaliacao, setAvaliacao] = useState(0);
    const [stars, setStars] = useState([
        { id: "s1", src: star0 },
        { id: "s2", src: star0 },
        { id: "s3", src: star0 },
        { id: "s4", src: star0 },
        { id: "s5", src: star0 }
    ]);
    
    const handleStarClick = (starIndex: number) => {
        const newStars = stars.map((star, index) => ({
            ...star,
            src: index <= starIndex ? star1 : star0
        }));
        setStars(newStars);
        
        const rating = starIndex + 1;
        setAvaliacao(rating);
    };
    
    const StyledSpan = styled.span`
        color: #000;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
        padding: 5px;
    `;
    return (
        <div>
            {stars.map((star, index) => (
                <img
                    key={star.id}
                    id={star.id}
                    src={star.src}
                    alt="star"
                    onClick={() => handleStarClick(index)}
                    width="20px"
                />
            ))}
            <StyledSpan>{avaliacao} avaliações</StyledSpan> 
        </div>
    );
}

export default Avaliacao;
