import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import s from "./ContactList.module.css";
import contactsActions from "../../redux/tasks/contactsActions";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ContactList = ({ contacts, deleteContact }) => {
  const onHandleDelete = (e) => {
    const id = e.target.dataset.id;
    deleteContact(id);
  };
  return (
    <div>
      <h2>Contacts</h2>
      <TransitionGroup component="ul" className={s.list}>
        {contacts.map((contact) => {
          return (
            <CSSTransition key={contact.id} timeout={250} classNames={s}>
              <li key={contact.id} className={s.listItem}>
                <span className={s.name}>{contact.name}</span>:{" "}
                <span>{contact.number}</span>
                <button
                  className={s.button}
                  type="button"
                  data-id={contact.id}
                  onClick={onHandleDelete}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
const mapStateToProps = (state) => {
  const { contactList, filter } = state.contacts;
  const normalizeFilter = filter.toLowerCase();

  const filtredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return {
    contacts: filtredContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => {
      dispatch(contactsActions.deleteContact(id));
    },

    // getFiltredContacts: ({ contacts, filter }) => {
    //     dispatch(contactsActions.getFiltredContacts())
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
