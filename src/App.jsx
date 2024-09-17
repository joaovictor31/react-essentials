import { useState } from 'react';  {/* isso é chamado de hooks*/}

import {CORE_CONCEPTS} from './data.js';  {/* coloco entre chave pq não é um default padrão e tem o nome da constante*/}
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

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

        <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton> {/*Component Composition*/} {/*Children Prop vs Attribute Props*/}
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
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