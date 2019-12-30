import React from 'react';
import Card from './Card';




function List(props) {
  console.log(props);
  return (
    <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {props.cards.map(item => (
            <Card key={props.allCards[item].id} title={props.allCards[item].title} content={props.allCards[item].content} />
        ))}
        </div>
      </section>
  )
}

export default List;