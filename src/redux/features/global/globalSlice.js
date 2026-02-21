import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  addBank: false,
  showLoginModal: false,
  showRegisterModal: false,
  showForgotPasswordModal: false,
  selectedCategory: "ALL",
  showLanguageModal: false,
  showNotification: false,
  showChip: false,
  stake: 100,
  deviseHeight: 0,
  deviceWidth: 0,
  showMenu: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setAddBank: (state, action) => {
      state.addBank = action.payload;
    },
    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
    },
    setShowRegisterModal: (state, action) => {
      state.showRegisterModal = action.payload;
    },
    setShowForgotPasswordModal: (state, action) => {
      state.showForgotPasswordModal = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setShowLanguageModal: (state, action) => {
      state.showLanguageModal = action.payload;
    },
    setShowNotification: (state, action) => {
      state.showNotification = action.payload;
    },
    setShowChip: (state, action) => {
      state.showChip = action.payload;
    },
    setStake: (state, action) => {
      state.stake = action.payload;
    },
    setDeviseHeight: (state, action) => {
      state.deviseHeight = action.payload;
    },
    setDeviceWidth: (state, action) => {
      state.deviceWidth = action.payload;
    },
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
  },
});

export const {
  setStake,
  setShowChip,
  setGroup,
  setAddBank,
  setShowLoginModal,
  setShowForgotPasswordModal,
  setShowRegisterModal,
  setSelectedCategory,
  setShowLanguageModal,
  setShowNotification,
  setDeviseHeight,
  setDeviceWidth,
  setShowMenu,
} = stateSlice.actions;

export default stateSlice.reducer;
