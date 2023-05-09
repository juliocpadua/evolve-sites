import { ProductCard } from "../Cards/ProductCard";
import { IProductsProps, Products } from "../Cards/ProductCard/products";
import { ContainerOfProducts, Title } from "./styles";

export const ListProducts = () => {
  return (
    <>
      <Title id="c1">Sites Completos</Title>
      <ContainerOfProducts>
        {Products.map((e: IProductsProps) => {
          return (
            <ProductCard
              title={e.title}
              description={e.description}
              key={e.id}
            />
          );
        })}
      </ContainerOfProducts>
    </>
  );
};
