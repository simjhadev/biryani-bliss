export type MenuType = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type CategoryType = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type formValuesType = {
  file: File|null;
  title: string;
  desc: string;
  price: number;
  catSlug: string;
  isFeatured: boolean|string;
  option: OptionType;
};

export type OptionType = {
  title: string,
  additionalPrice: number,
};


export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: string;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string[];
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item:CartItemType) => void;
  removeFromCart: (item:CartItemType) => void;
  clearCart: () => void;
}
