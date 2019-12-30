import React from 'react';
import Card from './Card'

function List(props) {
  return (
    <section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
          {Card}
        </div>
      </section>
  )
}

export default List;