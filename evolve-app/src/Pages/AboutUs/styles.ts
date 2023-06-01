import styled from "styled-components";

export const ContainerAboutUs = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;

  background-image: linear-gradient(
    to bottom,
    #00011a,
    #0b0e2c,
    #13153f,
    #201952,
    #321c64
  );

  box-sizing: border-box;
  padding: 100px;
  gap: 40px;
  margin-top: 25px;

  > p {
    font-weight: 400;
    font-family: var(--font-main);
    color: var(--light);
    max-width: 75vw;
    font-size: 18px;
  }

  > h4 {
    font-weight: 400;
    font-family: var(--font-main);
    color: var(--light);
    max-width: 70vw;
    font-size: 20px;
    display: flex;
    gap: 10px;

    > span {
      font-weight: bold;
    }

    @media (max-width: 824px) {
      flex-direction: column;
      max-width: 95vw;
      font-size: 18px;
    }
  }

  @media (max-width: 824px) {
    padding: 20px;
    > p {
      max-width: 95vw;
      font-size: 16px;
    }
  }
`;
