import styled from "styled-components";

export const ContainerCardService = styled.div`
  width: 70%;
  height: 300px;

  background-color: var(--primary-color);
  border-radius: 15px;

  margin-top: 50px;
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 824px) {
    width: 95%;
    height: auto;
    flex-direction: column;
  }

  > img {
    width: 190px;
    height: 250px;
    border-radius: 10px;
  }

  > div {
    height: 100%;
    > h3 {
      font-weight: bold;
      font-family: var(--font-main);
      color: var(--light);
      font-size: 22px;
      @media (max-width: 824px) {
        margin-left: 20px;
      }
    }

    > span {
      text-align: center;

      font-weight: 400;
      font-family: var(--font-main);
      color: var(--light);
      font-size: 12px;
      opacity: 0.8;
      @media (max-width: 824px) {
        margin-left: 20px;
      }
    }

    > p {
      font-weight: 300;
      font-family: var(--font-main);
      color: var(--light);
      font-size: 14px;
      opacity: 0.7;

      max-width: 500px;

      margin-top: 25px;
      margin-left: 40px;
      @media (max-width: 824px) {
        margin-left: 20px;
      }
    }
  }

  .buttons-area {
    display: flex;
    flex-direction: row;
    gap: 10px;

    margin-left: 30px;
    @media (max-width: 824px) {
      margin-left: 10px;
    }
    > a {
      > button {
        width: 50px;
        height: 40px;
        box-sizing: border-box;
        padding: 2px;
        background-color: transparent;
        border: none;
        outline: none;

        > svg {
          width: 40px;
          height: 30px;
          color: var(--light);
          cursor: pointer;
        }
      }
    }
  }

  .freelancer-area {
    > h4 {
      font-weight: bold;
      font-family: var(--font-main);
      color: var(--light);
      font-size: 16px;
      margin-left: 40px;
      @media (max-width: 824px) {
        margin-left: 20px;
      }
    }

    > p {
      font-weight: 300;
      font-family: var(--font-main);
      color: var(--light);
      font-size: 14px;
      opacity: 0.7;

      max-width: 500px;

      margin-top: 25px;
      margin-left: 40px;

      @media (max-width: 824px) {
        margin-left: 20px;
      }
    }

    > div {
      display: flex;
      align-items: center;
      margin-left: 40px;
      gap: 5px;

      @media (max-width: 824px) {
        margin-left: 20px;
      }

      > span {
        text-align: center;

        font-weight: 400;
        font-family: var(--font-main);
        color: var(--light);
        font-size: 12px;
        opacity: 1;
      }

      > p {
        font-weight: 300;
        font-family: var(--font-main);
        color: var(--light);
        font-size: 14px;
        opacity: 0.7;

        max-width: 500px;
      }

      > svg {
        cursor: pointer;
        color: var(--light);
      }
    }
  }

  .separator {
    min-width: 2px;
    height: 50px;
    border: 1px solid var(--primary-color);
    background-color: var(--light);
    -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
    -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
    box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);

    @media (max-width: 824px) {
      min-width: 100px;
      height: 2px;
      margin: 15px;
    }
  }
`;
