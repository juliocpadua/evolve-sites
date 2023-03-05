import styled from "styled-components";

export const ContainerFirstCard = styled.div`
  width: 70%;
  height: 25%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border: 1px solid var(--darkest);
  border-radius: 5px;
  -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
  -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
  box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);

  margin: 80px;
  padding: 40px;
  gap: 25px;

  /* transition: 10s;
  transform: translate(100px); */

  @keyframes go-back {
    0% {
      transform: translateY(300px);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: go-back 4s;

  > h4,
  p {
    font-weight: bold;
    font-family: var(--font-main);
    color: var(--light);
    font-size: 20px;
  }

  > p {
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    transition: 2s;
    > p,
    h4 {
      font-size: 14px;
      transition: 2s;
    }
    margin: 20px;
    margin-top: 40px;
    width: 87%;
  }
`;
