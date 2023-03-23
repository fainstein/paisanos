import { Auction } from "@/types/api";
import {
  AllAuctionsState,
  CategoryType,
  ChronologicalType,
  ColorType,
  filters,
  LikesType,
  TypeType,
} from "@/types/store";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const allAuctionsInitialState: AllAuctionsState = {
  allAuctions: [],
  displayAuctions: [],
  filtersApplied: {
    category: CategoryType.All,
    priceRange: 6,
    likes: LikesType.MostLiked,
    colors: ColorType.All,
    types: TypeType.All,
    chronological: ChronologicalType.Newest,
  },
};

const applyFilters = (allAuctions: Auction[], filters: filters) => {
  const displayAuctions = [...allAuctions]
    .filter((auction) => {
      const isSearchMatch =
        !filters.search ||
        auction.author.includes(filters.search) ||
        auction.attributes.type.includes(filters.search);
      const isCategoryMatch =
        filters.category === CategoryType.All ||
        auction.type.toLowerCase() === filters.category;
      const isPriceRangeMatch =
        parseFloat(auction.instantPrice) <= filters.priceRange;
      const isColorMatch =
        filters.colors === ColorType.All ||
        filters.colors === auction.attributes.color;
      const isTypeMatch =
        filters.types === TypeType.All ||
        filters.types === auction.attributes.type;
      return (
        isCategoryMatch &&
        isPriceRangeMatch &&
        isSearchMatch &&
        isColorMatch &&
        isTypeMatch
      );
    })
    .sort((a, b) => {
      // Chronological Sort
      if (filters.chronological === ChronologicalType.Newest) {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
    })
    .sort((a, b) => {
      // Likes Sort
      if (filters.likes === LikesType.MostLiked) {
        return b.likes - a.likes;
      } else {
        return a.likes - b.likes;
      }
    });
  return displayAuctions;
};

const allAuctionsSlice = createSlice({
  name: "allAuctions",
  initialState: allAuctionsInitialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.filtersApplied.search = action.payload;
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
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
    chronologicSort(state, action: PayloadAction<ChronologicalType>) {
      state.filtersApplied.chronological = action.payload;
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
    likesSort(state, action: PayloadAction<LikesType>) {
      state.filtersApplied.likes = action.payload;
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
    type(state, action: PayloadAction<TypeType>) {
      state.filtersApplied.types = action.payload;
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
    clearFilters(state) {
      state.filtersApplied = { ...allAuctionsInitialState.filtersApplied };
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
    setAllAuctions(state, action: PayloadAction<Auction[]>) {
      state.allAuctions = [...action.payload];
      state.displayAuctions = applyFilters(
        state.allAuctions,
        state.filtersApplied
      );
    },
  },
});

const store = configureStore({
  reducer: allAuctionsSlice.reducer,
});
export const allAuctionsActions = allAuctionsSlice.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
