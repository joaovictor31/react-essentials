import minhaImagem from '../../assets/react-core-concepts.png';
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

 {/* aqui também posso colocar export default function Header() { */}
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

export default Header
