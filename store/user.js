import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  isloaded: false,
  name: "",
};

let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loadData(state, action) {
      let { payload } = action;
      state.name = payload.user.name;
      state.isloaded = true;
    },
    logout(state, action) {
      state.isloaded = false;
      state.name = "";
    },
  },
});

export let userActions = userSlice.actions;
let userReducer = userSlice.reducer;

export default userReducer;
