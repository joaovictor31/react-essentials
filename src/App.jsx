import minhaImagem from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';  {/* coloco entre chave pq não é um default padrão e tem o nome da constante*/}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={minhaImagem} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {description} Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
 {/* aqui eu só posso ter um parâmetro que vai ser a minha prop*/}
function CoreConcept(prop){
  return(
    <li>
      <img src={prop.img} alt={prop.title} />
      <h3>{prop.title}</h3>
      <p>{prop.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>   {/* title, description e img vão ser as minhas props*/}
          <CoreConcept title = {CORE_CONCEPTS[0].title}
                      description = {CORE_CONCEPTS[0].description}
                      img = {CORE_CONCEPTS[0].image}/>

            {/* outra forma de fazer*/}
            {/* <CoreConcept {...CORE_CONCEPTS[1]}/> */}
          <CoreConcept title = {CORE_CONCEPTS[1].title}
                      description = {CORE_CONCEPTS[1].description}
                      img = {CORE_CONCEPTS[1].image}/> 

          <CoreConcept title = {CORE_CONCEPTS[2].title}
                      description = {CORE_CONCEPTS[2].description}
                      img = {CORE_CONCEPTS[2].image}/>

          <CoreConcept title = {CORE_CONCEPTS[3].title}
                      description = {CORE_CONCEPTS[3].description}
                      img = {CORE_CONCEPTS[3].image}/>
        </ul>
        </section>
    
      </main>
    </div>
  );
}

export default App;