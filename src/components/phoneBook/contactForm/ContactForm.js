import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./ContactForm.module.css";
import contactsOperations from "../../redux/tasks/contactsOperations";
import { CSSTransition } from "react-transition-group";
import Insert from "../insert/Insert";
import Notification from "../notification/Notofication";
import contactActions from "../../redux/tasks/contactsActions";
import contactsSelectors from "../../redux/tasks/contactsSelectors";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    newContact: null,
    showAlert: false,
    showEmpty: false,
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");

  //   if (contacts) {
  //     this.props.localStorage(JSON.parse(contacts));
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   const { contacts } = this.props;

  //   if (prevProps.contacts !== contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(contacts));
  //   }
  // }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.contacts.some((contact) => contact.name === this.state.name)
    ) {
      this.setState({ newContact: this.state.name, showAlert: true });
      setTimeout(() => {
        this.setState({ showAlert: false });
      }, 2500);
    } else if (this.state.name === "" || this.state.contact === "") {
      this.setState({ showEmpty: true });
      setTimeout(() => {
        this.setState({ showEmpty: false });
      }, 2500);
    } else {
      this.props.addContact({
        name: this.state.name,
        number: this.state.number,
      });
    }
    this.setState({ name: "", number: "" });
  };

  render() {
    const { newContact, showAlert, showEmpty } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
        <CSSTransition
          in={showAlert}
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <Notification name={newContact} />
        </CSSTransition>
        <CSSTransition
          in={showEmpty}
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <Insert />
        </CSSTransition>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addContact: contactsOperations.addContact,
  // localStorage: contactActions.localStorage,
};

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContact(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
