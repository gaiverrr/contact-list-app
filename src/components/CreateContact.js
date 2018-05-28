import React, {PureComponent} from 'react';
import CreateContactForm from './CreateContactForm';
import Button from '@material-ui/core/es/Button/Button';
import AddIcon from '@material-ui/icons/Add';
import Link from 'react-router-dom/es/Link';

export default class CreateContact extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showForm: props.showForm,
      contact: {
        first: '',
        last: '',
        email: '',
        address: '',
        phone: ''
      }
    };
  }

  inputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(prevState => ({contact: {...prevState.contact, [name]: value}}));
  }

  submit(e) {
    e.preventDefault();
    const contact = this.state.contact;
    contact.picture = {
      thumbnail: 'http://via.placeholder.com/64x64',
      large: 'http://via.placeholder.com/128x128'
    };
    contact.name = {
      first: this.state.contact.first,
      last: this.state.contact.last,
      title: ''
    };
    this.setState({
      showForm: false,
      contact: contact
    });

    this.props.onSubmit(this.state.contact);
  }

  renderForm() {
    return (
      <div>
        <CreateContactForm onFormSubmit={event => this.submit(event)} onInputChange={event => this.inputChange(event)}/>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          this.state.showForm ? this.renderForm() :
            <Button component={Link}
                    to="/create"
                    variant="fab"
                    color="primary"
                    aria-label="Create Contact">
              <AddIcon/>
            </Button>
        }
      </div>
    );
  }
}