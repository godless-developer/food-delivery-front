export type FoodType = {
  foodName: string;
  category: string;
  price: number;
  ingredients: string;
  _id: any;
  categoryId: any;
  value: string;
  foodImg: string;
};

export type FoodOrderType = {
  foodName: string;
  category: string;
  price: number;
  ingredients: string;
  _id: any;
  categoryId: any;
  value: string;
  foodImg: string;
  status: "pending" | "delivered" | "cancelled";
};
