import { ProductType } from "../components/Productboard";

import testImage from "../assets/headphone-banner.png";
import laptopImage from "../assets/laptop.png";
import noImage from "../assets/no-image.png";
import Product from "../pages/Product";

function returnProduct(id?: string): Promise<ProductType> {
  const producto1: ProductType = {
    id: 2,
    title: "Pan tostado",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facere in, ducimus perferendis dolorum, repudiandae cum, alias neque blanditiis autem incidunt eaque aspernatur doloribus. Est labore eos adipisci cum nemo.Vitae deleniti ut vel temporibus est nihil error, optio iure dolore consequatur cupiditate excepturi tempora unde mollitia sunt recusandae, eveniet quisquam numquam explicabo sequi exercitationem deserunt doloremque. Natus, veniam tempore!A dignissimos, necessitatibus ullam in minus adipisci provident eaque debitis consequatur cumque rem consequuntur quis laboriosam dicta voluptas officia tenetur quaerat beatae? Nisi animi alias dolores, omnis quasi corporis eos! Quam nemo laborum laboriosam pariatur officiis vero quasi explicabo at, sunt doloremque eos delectus saepe unde optio ratione id molestiae rem accusamus voluptatem dolores sint. Est accusamus molestiae labore voluptate.",
    price: 300,
    images: [noImage, laptopImage, testImage, testImage, testImage, testImage],
  };

  const producto2: ProductType = {
    id: 2,
    title: "lenguado de vaca vieja y zorra",
    description: "la descripcion mas corta desde tu gaber",
    price: 700000,
    images: [noImage, laptopImage, testImage, testImage, testImage, testImage],
  };

  return new Promise((res, __) => {
    setTimeout(() => {
      if (id === "1") {
        res(producto1);
      }
      res(producto2);
    }, 300);
  });
}

export default returnProduct;
