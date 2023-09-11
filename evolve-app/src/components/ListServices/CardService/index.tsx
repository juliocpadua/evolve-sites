import { ContainerCardService } from "./styles";
import pictureOne from "../../../assets/pictureOne.jpg";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

export const CardService = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContainerCardService>
      <img src={pictureOne} />

      <div>
        <h3>Júlio César Oliveira Melo Pádua</h3>
        <span>Desenvolvedor Web Full-stack</span>
        <p>
          - Com atuação em diversos projetos de múltiplos segmentos, possuo
          disponibilidade e experiência para integrar equipes de desenvolvimento
          ágil em projetos já em andamento ou em fase de planejamento. <br />{" "}
          <br />
          Saiba mais em um dos botões abaixo.{" "}
        </p>
        <div className="buttons-area">
          <a target="blank" href="https://www.linkedin.com/in/juliocpadua1/">
            <button>
              <AiFillLinkedin />
            </button>
          </a>
          <a target="blank" href="https://github.com/juliocpadua">
            <button>
              <GoMarkGithub />
            </button>
          </a>
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=+55+5516993393928&text=Olá%2C%20venho%20por%20meio%20do%20seu%20portfólio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20serviços"
          >
            <button>
              <FaWhatsappSquare />
            </button>
          </a>
        </div>
      </div>

      <div className="separator" />

      <section className="freelancer-area">
        <h4>Freelancer</h4>
        <p>- Orçamento específico para cada desenvolvimento a ser executado.</p>
        <p>- Entre em contato para agendarmos uma reunião.</p>

        <p>Valor médio da hora trabalhada</p>
        <div>
          <p>R$</p>
          {isOpen ? <span>50,00</span> : <span>-----</span>}

          <BsEyeSlashFill onClick={() => setIsOpen(!isOpen)} />
        </div>
      </section>
    </ContainerCardService>
  );
};
