import React from 'react';
import Card from './Card';
import cardData from '../../files/jobs.json';

<div className="App">
<Route exact path="/" render={() => (
  <div>
    {cardData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        description={card.description}
        image={card.image}
      />
    ))}
  </div>
)} />
<Route path="/detalle/:id" component={CardDetail} />
</div>
export default App;
