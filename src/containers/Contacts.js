import React from 'react';
import {fetchContacts} from '../actions/contacts';
import {connect} from 'react-redux';
import Contacts from '../components/Contacts';

const mapStateToProps = state => {
  return {
    contactsList: state.contacts.contactsList.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
