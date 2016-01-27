import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import * as BeerActions from '../redux/actions/Beers';

class BeerForm extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (this.props.editBeer) {
      this.props.initializeForm(this.props.editBeer);
    }
  }

  render() {
    const { handleBeerForm, fields: {name, brewery, style, abv, ibu}, handleSubmit } = this.props;

    const buttonLabel = this.props.editBeer ? 'Update Beer' : 'Create Beer';

    return (
      <form onSubmit={ handleSubmit(handleBeerForm) }>
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
            {...style}
            />
        </div>

        <div>
          <TextField
            hintText="ABV"
            {...abv}
            />
        </div>

        <div>
          <TextField
            hintText="IBU"
            {...ibu}
            />
        </div>

        <RaisedButton onClick={ handleSubmit(handleBeerForm)} label={buttonLabel} primary={true} />
      </form>
    );
  }
}

BeerForm = reduxForm({
  form: 'new-beer',
  fields: ['name', 'brewery', 'style', 'abv', 'ibu']
})(BeerForm);

export default BeerForm;
