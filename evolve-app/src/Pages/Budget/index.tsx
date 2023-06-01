import api from "../../services/api";
import { useForm } from "react-hook-form";
import { ContainerBudget } from "./styles";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BudgetPage = ({}) => {
  const { register, handleSubmit } = useForm();
  const { type } = useParams();

  const sendEmail = (data: any) => {
    toast.success("Solicitação enviada com sucesso!");
    api.get(`/send/${data.name}/${data.email}/${data.phone}/${type}`);
  };
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ContainerBudget>
        <form onSubmit={handleSubmit(sendEmail)}>
          <h2>Orçamento</h2>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome..."
              {...register("name")}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              placeholder="Digite aqui seu email..."
              {...register("email")}
            />
          </div>

          <div>
            <label>Telefone:</label>
            <input
              type="text"
              placeholder="Digite aqui seu telefone..."
              {...register("phone")}
            />
          </div>

          <div>
            <label>Tipo do site:</label>
            <p>- {type}</p>
          </div>
          <button type="submit">SOLICITAR ORÇAMENTO</button>
        </form>
        <section className="separator">
          <div />
          <p>OU</p>
          <div />
        </section>
        <section className="contact">
          <h2>Entre em contato conosco</h2>~
          <div className="icons">
            <a
              target="blank"
              href="https://instagram.com/evolve.sites?igshid=MzRlODBiNWFlZA=="
            >
              <AiOutlineInstagram />
            </a>

            <a target="blank" href="https://contate.me/evolvesites">
              <AiOutlineWhatsApp />
            </a>

            <a
              target="blank"
              href="mailto:sites.evolve@gmail.com?subject=CONTATO EVOLVE SITES&body="
            >
              <MdOutlineMarkEmailRead />
            </a>
          </div>
        </section>
      </ContainerBudget>
    </>
  );
};
