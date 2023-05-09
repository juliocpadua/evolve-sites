import { Button } from "../../Button";
import { ContainerProduct } from "./styles";

interface IPropsCardProduct {
  title: string;
  description: string;
}

export const ProductCard = (props: IPropsCardProduct) => {
  return (
    <ContainerProduct>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Button title="SAIBA MAIS" type={props.title}/>
    </ContainerProduct>
  );
};
