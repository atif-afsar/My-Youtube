import { createSlice } from '@reduxjs/toolkit'
import { OFFSET_LIVE_CHAT } from './Constants';

const ChatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
      
      // Keep only the latest N messages (e.g., OFFSET_LIVE_CHAT = 50)
      if (state.messages.length > OFFSET_LIVE_CHAT) {
        state.messages.pop();
      }
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
