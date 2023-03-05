import Header from "../../components/Header";
import { FirstCard } from "../../components/Cards/FirstCard";
import { Container } from "./styles";
import mobile1 from "../../assets/mobile1.jpg";

export const Home = () => {
  return (
    <Container>
      <Header />
      <FirstCard />
      <img src={mobile1} alt="Banner um" className="banner-one" />
    </Container>
  );
};
