import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  // CONTACT, SHARED, STARRED
  type: "CONTACT",
};

export const rightSideBarSlice = createSlice({
  name: "rightSideBar",
  initialState,
  reducers: {
    setUserIdProfile: (state, action) => {
      state.userId = action.payload.userId;
    },
    closeRightSideBar: (state) => {
      state.userId = null;
    },
    changeTypeRightSideBar: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

// Selectors
export const selectUserIdProfile = (state) => state.rightSideBar.userId;
export const selectRightSideBarType = (state) => state.rightSideBar.type;
// Actions
export const { setUserIdProfile, closeRightSideBar, changeTypeRightSideBar } =
  rightSideBarSlice.actions;
// Reducer
export default rightSideBarSlice.reducer;
