import styled from "styled-components";

export const ContainerSecondCard = styled.div`
  width: 55%;
  height: 25%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: var(--darkest);
  color: var(--light);
  opacity: 0.8;
  border: 1px solid var(--darkest);
  border-radius: 15px;
  -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
  -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
  box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);

  padding: 40px;
  gap: 25px;
  margin-left: 230px;
  margin-bottom: 15px;
  margin-top: -40px;

  /* transition: 10s;
  transform: translate(100px); */

  @keyframes go-back3 {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: go-back3 4s;

  > h4,
  p {
    font-weight: bold;
    font-family: var(--font-main);
    color: var(--light);
    font-size: 20px;
    opacity: 1;
  }

  > p {
    font-weight: 500;
    opacity: 1;
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
