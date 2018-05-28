import {
  FETCH_CONTACTS, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE
} from '../actions/contacts';


const INITIAL_STATE = {
  contactsList: {contacts: [], error: null, loading: false}
};

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_CONTACTS:
      return {...state, contactsList: {contacts: [], error: null, loading: true}};
    case FETCH_CONTACTS_SUCCESS:
      return {...state, contactsList: {contacts: action.payload, error: null, loading: false}};
    case FETCH_CONTACTS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, contactsList: {contacts: [], error: error, loading: false}};
    default:
      return state;
  }
}