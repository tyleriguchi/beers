import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class BeerNewForm extends Component {
  render() {
    const {fields: {name, brewery, type}, handleSubmit, createBeer } = this.props;

    return (
      <form onSubmit={ handleSubmit(createBeer) }>
        <div>
          <TextField
            hintText="Beer Name"
            {...name}
            />
        </div>

        <div>
          <TextField
            hintText="Brewery"
            {...brewery}
            />
        </div>

        <div>
          <TextField
            hintText="Beer Type"
            {...type}
            />
        </div>

        <RaisedButton onClick={ handleSubmit(createBeer)} label="Add Beer" primary={true} />
      </form>
    );
  }
}

BeerNewForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'new-beer',                           // a unique name for this form
  fields: ['name', 'brewery', 'type'] // all the fields in your form
})(BeerNewForm);

export default BeerNewForm;
