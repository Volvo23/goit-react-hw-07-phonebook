import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/add.ADD", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("contacts/remove");

const onHandleFilter = createAction("contacts/handleFilter");
const localStorage = createAction("contacts/localStorage");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContact,
  deleteContact,
  onHandleFilter,
  localStorage,
};

// const addContact = ({ name, number }) => ({
//     type: actionTypes.ADD,
//     payload: {
//         contact: {
//             id: uuidv4(),
//             name,
//             number,
//         }
//     }
// })

// const deleteContact = (id) => ({
//     type: actionTypes.REMOVE,
//     payload: {
//         id,
//     }
// })

// const onHandleFilter = (filter) => ({
//     type: actionTypes.VALUE,
//     payload: {
//         filter,
//     }
// })
