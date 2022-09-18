import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventState {
  hasClickedMessenger: boolean;
  hasClickedNotification: boolean;
  hasClickedActionInNotification: boolean;
  hasClickedAvatar: boolean;
}

const initialState = {
  hasClickedMessenger: false,
  hasClickedNotification: false,
  hasClickedActionInNotification: false,
  hasClickedAvatar: false,
} as EventState;

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setHasClickedMessenger(state, action: PayloadAction<boolean>) {
      state.hasClickedMessenger = action.payload;
    },
    setHidePopupAll(state) {
      state.hasClickedMessenger = false;
      state.hasClickedNotification = false;
      state.hasClickedActionInNotification = false;
      state.hasClickedAvatar = false;
    },
    setHasClickedNotification(state, action: PayloadAction<boolean>) {
      state.hasClickedNotification = action.payload;
    },
    setHasClickedActionInNotification(state, action: PayloadAction<boolean>) {
      state.hasClickedActionInNotification = action.payload;
    },
    setHasClickedAvatar(state, action: PayloadAction<boolean>) {
      state.hasClickedAvatar = action.payload;
    },
  },
});

export const {
  setHasClickedMessenger,
  setHidePopupAll,
  setHasClickedNotification,
  setHasClickedActionInNotification,
  setHasClickedAvatar,
} = eventSlice.actions;
export default eventSlice.reducer;
