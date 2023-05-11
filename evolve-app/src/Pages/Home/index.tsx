import Header from "../../components/Header";
import { FirstCard } from "../../components/Cards/FirstCard";
import { Container } from "./styles";
import mobile1 from "../../assets/mobile1.jpg";
import { SecondCard } from "../../components/Cards/SecondCard";
import { ListProducts } from "../../components/ListProducts";
import { ListServices } from "../../components/ListServices";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <Container>
      <Header home={true} />

      <FirstCard />
      <img src={mobile1} alt="Banner um" className="banner-one" />
      <SecondCard />

      <ListProducts />
      <ListServices />
      <Footer />
    </Container>
  );
};
