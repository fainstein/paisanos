import { getTimeRemaining } from "@/helpers/auctions";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const auctionCountdownInitialState = { hours: 0, minutes: 0, seconds: 0 };

const contdownSlice = createSlice({
  name: "auctionCountdown",
  initialState: auctionCountdownInitialState,
  reducers: {
    // setInitialValue(state, action: PayloadAction<Date>) {
    //   const initialCountdownStartingValue = getTimeRemaining(action.payload);
    //   state = { ...initialCountdownStartingValue };
    // },
  },
});
const store = configureStore({
  reducer: contdownSlice.reducer,
});
export const countdownActions = contdownSlice.actions;

export default store;
