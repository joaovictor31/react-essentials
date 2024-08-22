 {/* aqui eu só posso ter um parâmetro que vai ser a minha prop*/}
 export default function CoreConcept(prop){
    return(
      <li>
        <img src={prop.img} alt={prop.title} />
        <h3>{prop.title}</h3>
        <p>{prop.description}</p>
      </li>
    );
  }