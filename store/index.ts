import { Auction } from "@/types/api";
import {
  AllAuctionsState,
  CategoryType,
  ColorType,
  filters,
  LikesType,
} from "@/types/store";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const allAuctionsInitialState: AllAuctionsState = {
  allAuctions: [],
  displayAuctions: [],
  filtersApplied: {
    category: CategoryType.All,
    priceRange: 5,
    likes: LikesType.MostLiked,
    colors: ColorType.All,
  },
};

const applyFilters = (allAuctions: Auction[], filters: filters) => {
  return allAuctions.filter((auction) => {
    const isCategoryMatch =
      filters.category === CategoryType.All ||
      auction.type === filters.category;
    const isPriceRangeMatch =
      parseFloat(auction.instantPrice) <= filters.priceRange;
    const isSearchMatch =
      !filters.search ||
      auction.author.includes(filters.search) ||
      auction.attributes.type.includes(filters.search);
    const isColorMatch =
      filters.colors === ColorType.All ||
      filters.colors === auction.attributes.color;
    return (
      isCategoryMatch && isPriceRangeMatch && isSearchMatch && isColorMatch
    );
  });
};

const allAuctionsSlice = createSlice({
  name: "allAuctions",
  initialState: allAuctionsInitialState,
  reducers: {
    priceRange(state, action: PayloadAction<number>) {
      state.filtersApplied.priceRange = action.payload;
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
    category(state, action: PayloadAction<CategoryType>) {
      state.filtersApplied.category = action.payload;
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
    search(state, action: PayloadAction<string>) {
      state.filtersApplied.search = action.payload;
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
    color(state, action: PayloadAction<ColorType>) {
      state.filtersApplied.colors = action.payload;
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
    clearFilters(state) {
      state.filtersApplied = { ...allAuctionsInitialState.filtersApplied };
    },
    setAllAuctions(state, action: PayloadAction<Auction[]>) {
      state.allAuctions = [...action.payload];
      state.displayAuctions = [...action.payload];
      console.log("REDUX", state.allAuctions)
    },
  },
});
const store = configureStore({
  reducer: allAuctionsSlice.reducer,
});
export const allAuctionsActions = allAuctionsSlice.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
