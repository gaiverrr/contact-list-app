//Contact list
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

const URL = 'https://randomuser.me/api/?results=50';

export function fetchContacts() {
  const request = fetch(URL)
    .then(response => response.json())
    .then(data => data.results);

  return {
    type: FETCH_CONTACTS,
    promise: request
  };
}