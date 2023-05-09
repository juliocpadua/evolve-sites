import { ContainerFooter } from "./styles";
import { MdKeyboardArrowUp } from "react-icons/md";
import logoHeader from "../../assets/logoHeader.png";
import { CgCopyright } from "react-icons/cg";

export const Footer = () => {
  return (
    <ContainerFooter>
      <section>
        <img src={logoHeader} />
        <p>
          Todos os direitos reservados - Evolve Sites 2023 <CgCopyright />
        </p>
      </section>
      
      <a href="#header">
        <p>
          <MdKeyboardArrowUp />
        </p>
      </a>
    </ContainerFooter>
  );
};
