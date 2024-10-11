import { useState } from 'react';  {/* isso é chamado de hooks*/}
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  

  function handleSelect(selectedButton){

    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
      <CoreConcepts/>

        <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton> {/*Component Composition*/} {/*Children Prop vs Attribute Props*/}
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>   
          {!selectedTopic ? <p>Please select a topic</p> : null} {/* se não tiver nada selecionado ele mostra a mensagem select a topic*/}
          {selectedTopic ? (
            <div id = 'tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
              </div>
            ) : null}
        
        </section>
      
      </main>
    </div>
  );
}

export default App;