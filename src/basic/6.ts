interface IUser {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

export const mango: IUser = {
  name: "Mango",
  age: 30,
  email: "mango@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

export const poly: IUser = {
  name: "Poly",
  age: 36,
  email: "poly@example.com",
};
