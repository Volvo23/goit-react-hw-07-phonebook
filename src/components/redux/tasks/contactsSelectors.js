import { createSelector } from "@reduxjs/toolkit";

const getContact = (state) => state.contacts.contactList;
const getFilter = (state) => state.contacts.filter;
const getFilteredContacts = createSelector(
  [getFilter, getContact],
  (filter, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// const getFilteredContacts = (state) => {
//   const filter = getFilter(state).toLowerCase();
//   const contactList = getContact(state);

//   return contactList.filter((contact) =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };

export default {
  getContact,
  getFilter,
  getFilteredContacts,
};
