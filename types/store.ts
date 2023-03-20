import { Auction } from "./api";

export interface AllAuctionsState {
  allAuctions: Auction[];
  displayAuctions: Auction[];
  filtersApplied: filters;
}

export interface filters {
  search?: string;
  category: CategoryType;
  priceRange: number;
  likes: LikesType;
  colors: ColorType;
}

export enum CategoryType {
  All = "all",
  Art = "art",
  Photography = "photography",
}

export enum LikesType {
  MostLiked = "most-liked",
  LessLiked = "less-liked",
}

export enum TimeTypes {
  Newest = "newest",
  Oldest = "oldest",
}

export enum ColorType {
  All = "all",
  Black = "black",
  Green = "green",
  Pink = "pink",
  Purple = "purple",
}
