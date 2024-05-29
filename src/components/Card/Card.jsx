import './Card.css'

export default function Card(props) {
  console.log(props)
  return (
    <div className='card'>
      <h2>{props.item.nome}</h2>
      {props.item.evoluiPara && <p><b>Evolui para:</b> {props.item.evoluiPara}</p>}
      <img src={props.item.imagem} width="200"/>
    </div>)
}
