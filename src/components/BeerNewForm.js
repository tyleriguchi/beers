import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class BeerNewForm extends Component {
  render() {
    const {fields: {name, brewery, type}, handleSubmit, createBeer } = this.props;

    return (
      <form onSubmit={ handleSubmit(createBeer) }>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Name" {...name}/>
        </div>
        <div>
          <label>Brewery</label>
          <input type="text" placeholder="Brewery" {...brewery}/>
        </div>
        <div>
          <label>Beer Type</label>
          <input type="text" placeholder="Beer Type" {...type}/>
        </div>
        <button onClick={ handleSubmit(createBeer) }>Submit</button>
      </form>
    );
  }
}

BeerNewForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'new-beer',                           // a unique name for this form
  fields: ['name', 'brewery', 'type'] // all the fields in your form
})(BeerNewForm);

export default BeerNewForm;
