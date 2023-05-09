import { Title } from "../ListProducts/styles";
import { CardService } from "./CardService";
import { Container } from "./styles";

export const ListServices = () => {
  return (
    <Container id="c2">
      <Title>Participação em Projetos</Title>
      <CardService />
    </Container>
  );
};
