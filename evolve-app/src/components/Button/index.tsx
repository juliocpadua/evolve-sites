import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "./sttyles";

interface IPropsButton {
  title: string;
  type: string;
}

export const Button = ({ title, type }: IPropsButton) => {
  const navigate = useNavigate();
  return (
    <ButtonStyle onClick={() => navigate(`/orçamento/${type}`)}>
      {title}
    </ButtonStyle>
  );
};
