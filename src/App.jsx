import minhaImagem from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

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
          <CoreConcept title = "Components" 
                      description = "The core UI building block"
                      img = {componentsImg}/>
          <CoreConcept/>
          <CoreConcept/>
          <CoreConcept/>
        </ul>
        </section>
    
      </main>
    </div>
  );
}

export default App;