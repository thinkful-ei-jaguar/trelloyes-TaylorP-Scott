import React from 'react';
import List from './List';
import Card from './Card'

function App(props) {
  return (
    <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
      <div className="App-list">
      {console.log(props.store.lists[0].id)}
        {props.store.lists.map(item => (
            <List key={[item].id} header={item.header} cards={item.cardIds} allCards={props.store.allCards} />
        ))}
      </div>
    </main>
  );
}

export default App;