import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const removeContactsRequest = createAction("contacts/removeRequest");
const removeContactsSuccess = createAction("contacts/removeSuccess");
const removeContactsError = createAction("contacts/removeError");

// const addContact = createAction("contacts/add.ADD", ({ name, number }) => ({
//   payload: {
//     contact: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   },
// }));

//  const deleteContact = createAction("contacts/remove");

const onHandleFilter = createAction("contacts/handleFilter");
// const localStorage = createAction("contacts/localStorage");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  // deleteContact,
  onHandleFilter,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  // localStorage,
};
