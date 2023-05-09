export interface IProductsProps {
  id: string;
  title: string;
  description: string;
}

export const Products: IProductsProps[] = [
  {
    id: "1",
    title: "Landing Page",
    description:
      "Representa uma página web que fica responsável por fazer a captura de usuários, potenciais clientes e consumidores, através de dados pessoais como nome completo, e-mail, whatsapp. Com esse tipo de informação torna-se possível entrar em contato para uma oferta personalizada.",
  },
  {
    id: "2",
    title: "E-commerce",
    description:
      "Representa um site completo de vendas, com página inicial personalizada, exibição de coleções em destaque, página geral de produtos, página especial do produto selecionado, carrinho, checkout e muito mais. Além disso contém um Dashboard completo para você analisar suas vendas e manipular seus produtos e os dados de seus clientes.",
  },
  {
    id: "3",
    title: "Business Page",
    description:
      "Representa uma página web que vai levar seu negócio até os resultados de busca dos usuários na Internet. Consiste em uma única página, onde você pode apresentar o seu negócio e deixar opções de contato para os interessados em seus serviços. Nesse caso as vendas e fechamentos de contrato ocorrem fora da plataforma, bem como a comunicação entre as partes.",
  },
];
