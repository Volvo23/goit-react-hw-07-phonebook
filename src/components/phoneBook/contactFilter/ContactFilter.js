import React from "react";
import PropTypes from "prop-types";
import s from "./ContactFilter.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/tasks/contactsActions";
import contactsSelectors from "../../redux/tasks/contactsSelectors";

const ContactFilter = ({ value, onHandleFilter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onHandleFilter(e.target.value)}
      />
    </div>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string,
  onHandleFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onHandleFilter: contactsActions.onHandleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
