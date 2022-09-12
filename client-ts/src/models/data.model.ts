export type Data = {
  data: {
    _id: string;
    user: string;
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    rating: number;
    numReviews: number;
    price: number;
    countInStock: number;
    reviews: any[];
    __v: number;
    createdAt: Date;
    updatedAt: Date;
  };
};

export default Data;
