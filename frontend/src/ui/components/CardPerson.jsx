import style from '../styles/CardPerson.module.css'
import defaultImage from '../images/personicon.png'

function CardPerson({ name, price, personImage, skills }) {
  return (
    <div className={style.cardPerson}>
      <a><img src={personImage ? personImage : defaultImage} alt="personIcon" /></a>
      <p className={style.name}>{name ? name : ' Nome da pessoa'}</p>
      <p className={style.price}><b>R$</b>{price ? price : '0.00'}/hr</p>
      <p className={style.skills}><b>Habilidades</b></p>
      <ul>
        {
          skills ? skills.map((skill) => <li>{skill}</li>) : <li>Nenhuma</li>  
        }
      </ul>
      <button className={style.bttn}>Contratar</button>
    </div>
  )
}

export default CardPerson