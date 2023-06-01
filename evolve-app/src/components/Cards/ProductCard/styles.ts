import styled from "styled-components";

export const ContainerProduct = styled.div`
  width: 310px;
  min-height: 360px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 15px;
  padding: 10px;

  border: 1px solid var(--darkest);
  border-radius: 5px;
  -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
  -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
  box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);

  color: var(--light);

  font-weight: bold;
  font-family: var(--font-main);
  color: var(--light);
  font-size: 12px;

  > p {
    font-weight: 500;
    letter-spacing: 1px;
  }

  @media (max-width: 824px) {
    min-width: 300px;
  }
`;
