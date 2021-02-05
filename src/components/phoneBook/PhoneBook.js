import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./contactList/ContactList";
import ContactFilter from "./contactFilter/ContactFilter";
import { CSSTransition } from "react-transition-group";
import s from "./PhoneBook.module.css";
// import Notification from "./notification/Notofication";
// import Insert from "./insert/Insert";

class PhoneBook extends Component {
  render() {
    // const { newContact, showAlert, showInsert } = this.state;
    return (
      <div>
        <CSSTransition in={true} appear={true} timeout={500} classNames={s}>
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />

        {this.props.contacts.length > 1 && <ContactFilter />}

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contactList,
  };
};

export default connect(mapStateToProps)(PhoneBook);
