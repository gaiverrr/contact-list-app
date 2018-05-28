import React, {PureComponent} from 'react';
import Card from '../components/ContactCard';
import Grid from '@material-ui/core/es/Grid/Grid';
import Search from '../components/Search';
import CreateContact from '../components/CreateContact';

class Contacts extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    };
  }

  search(searchText) {
    this.setState({
      searchText,
      searchResult: this.props.contactsList.filter(contact => searchContact(contact.name, contact.email, contact.dob, contact.phone, searchText.toLowerCase()))
    });
  }

  componentWillMount() {
    this.props.fetchContacts();
  }

  get contacts() {
    return this.state.searchText ? this.state.searchResult : this.props.contactsList;
  }

  createContact(contact) {
    this.setState(prevState => ({contactList: [...prevState.contactList, contact]}));
  }

  deleteContact(contact) {
    let contactList = [...this.state.contactList];
    contactList.splice(this.state.contactList.indexOf(contact), 1);
    this.setState({contactList: contactList});
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <CreateContact showForm={this.props.showForm} onSubmit={contact => this.createContact(contact)}/>
          <Search onSearch={searchText => this.search(searchText)}/>
          {this.contacts.map(contact => <Card key={contact.email} contact={contact}
                                              onDelete={contact => this.deleteContact(contact)}/>)}
        </Grid>
      </Grid>
    );
  }
}

const searchContact = (name = '', email = '', phone = '', dob = '', searchText) =>
  (
    name.first.toLowerCase().includes(searchText) ||
    name.last.toLowerCase().includes(searchText) ||
    name.title.toLowerCase().includes(searchText) ||
    dob.toLowerCase().includes(searchText) ||
    phone.toString().includes(searchText) ||
    email.toString().includes(searchText)
  );

export default Contacts;