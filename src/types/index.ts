
export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};


export type ProductPackageType = ProductType & {
  quantity: number;
};