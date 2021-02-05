import contactsReducers from "./tasks/contactsReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
});

export default store;
