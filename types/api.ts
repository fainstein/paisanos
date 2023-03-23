export interface Auction {
  id: number;
  instantPrice: string;
  highestBid: string;
  author: string;
  authorAvatar: string;
  type: string;
  stock: number;
  likes: number;
  createdAt: string;
  endsAt: Date;
  media: {
    id: number;
    image: string;
    image2x: string;
  };
  attributes: {
    id: number;
    color: string;
    type: string;
  };
  bidUsers: [
    {
      id: number;
      name: string;
      avatar: string;
    }
  ];
}

export interface EthPriceApiResponse {
  eth: string;
  usd: string;
}

export type AuctionsApiResponse = Auction[];

export interface ApiResponse<T> {
  errorMessage?: string;
  data?: T;
}
