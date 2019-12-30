import React from 'react';
import STORE from './store';
import List from './List';

function App(props) {
  //console.log(props);
  return (
    <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
      <div className="App-list">
        {props.store.lists.map(item => (
          <List key={item.id} header={item.header} />
        ))}
      </div>
    </main>
  );
}

export default App;