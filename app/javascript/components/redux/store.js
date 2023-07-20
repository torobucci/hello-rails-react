import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './messages/messagesSlice';

const store = configureStore({
  reducer: {
    message: messagesSlice,
  },

});

export default store;
