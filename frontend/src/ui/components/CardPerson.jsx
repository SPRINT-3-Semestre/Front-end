import style from '../styles/CardPerson.module.css'
import defaultImage from '../images/personicon.png'

function CardPerson(props) {
  return (
    <div className={style.cardPerson}>
      <a><img src={props.personImage ? props.personImage : defaultImage} alt="personIcon" /></a>
      <p className={style.name}>{props.name ? props.name : ' Nome da pessoa'}</p>
      <p className={style.price}><b>R$</b>{props.price ? props.price : '0.00'}/hr</p>
      <p className={style.skills}><b>Habilidades</b></p>
      <ul>
        {
          props.skills ? props.skills.map((skill) => <li>{skill}</li>) : <li>Nenhuma</li>  
        }
      </ul>
      <button className={style.bttn}>Contratar</button>
    </div>
  )
}

export default CardPerson