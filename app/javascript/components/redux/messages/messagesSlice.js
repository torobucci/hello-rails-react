import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MESSAGES_URL = 'http://127.0.0.1:3000/api/random_greeting';

const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await axios.get(MESSAGES_URL);
  return response.data;
});

const initialState = {
  messages: {},
};
const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      const receivedData = action.payload;
      return { ...state, messages: receivedData };
    });
  },
});

export { fetchMessages };
export default messagesSlice.reducer;
