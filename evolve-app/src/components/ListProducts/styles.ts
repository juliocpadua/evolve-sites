import styled from "styled-components";

export const ContainerOfProducts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  width: 100vw;

  gap: 100px;
  padding: 50px;
  margin-bottom: 40px;

  @media (max-width: 824px) {
    max-width: min-content;
    overflow-y: scroll;
    padding-inline: 15px;
    justify-content: flex-start;
    gap: 40px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;

  font-weight: bold;
  font-family: var(--font-main);
  color: var(--light);
  font-size: 26px;

  margin-bottom: -20px;
  margin-top: 60px;
`;
