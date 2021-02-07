import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
  return [...state, action.payload];
};
const removeContact = (state, action) => {
  return state.filter((contact) => contact.id.toString() !== action.payload);
};

const contactList = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactsSuccess]: removeContact,
  // [contactsActions.localStorage]: (_, action) => action.payload,
});

const filter = createReducer("", {
  [contactsActions.onHandleFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contactList,
  filter,
});

//  state = {
//     contacts: [],
//     filter: "",
//     newContact: null,
//     showAlert: false,
//     showEmpty: false,
//   };

//   componentDidMount() {
//     const persistedContacts = localStorage.getItem("contacts");
//     if (persistedContacts) {
//       this.setState({
//         contacts: JSON.parse(persistedContacts),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     if (contacts.find((el) => el.name.toLowerCase() === name.toLowerCase())) {
//       this.setState({ newContact: contact.name, showAlert: true });
//       setTimeout(
//         () => this.setState({ newContact: null, showAlert: false }),
//         2500
//       );
//       return;
//     }
//     if (!name.length || !number.length) {
//       this.setState({ showInsert: true });
//       setTimeout(() => this.setState({ showInsert: false }), 2500);
//       return;
//     }
//     this.setState((prevState) => {
//       return {
//         contacts: [...prevState.contacts, contact],
//       };
//     });
//   };

//   deleteContact = (e) => {
//     const id = e.target.dataset.id;
//     this.setState({
//       contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
//     });
//   };

//   onHandleFilter = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   getFiltredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
