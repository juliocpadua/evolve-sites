import styled from "styled-components";

export const ContainerBudget = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  min-height: 85vh;

  > form {
    -webkit-box-shadow: 0px 0px 13px -9px rgba(85, 85, 85, 1);
    -moz-box-shadow: 0px 0px 13px -9px rgba(85, 85, 85, 1);
    box-shadow: 0px 0px 13px -9px rgba(85, 85, 85, 1);

    width: 400px;
    min-height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 20px;

    > h2 {
      color: var(--light);
      font-size: 18px;
      font-weight: bold;
      font-family: var(--font-main);
    }

    > div {
      display: flex;
      flex-direction: column;

      > label {
        color: var(--light);
        font-size: 14px;
        font-weight: bold;
        font-family: var(--font-main);
      }

      > p {
        color: var(--light);
        font-size: 18px;
        font-weight: bold;
        font-family: var(--font-main);
        width: 250px;
      }

      > input {
        width: 250px;
        height: 40px;
        border-radius: 5px;
        border: 0.5px solid var(--light);

        background-color: transparent;
        color: var(--light);

        box-sizing: border-box;
        padding-inline: 10px;

        font-size: 14px;
        font-weight: bold;
        font-family: var(--font-main);
      }
    }

    > button {
      width: 250px;
      cursor: pointer;
      height: 40px;
      background-color: transparent;
      border: none;
      outline: 0;

      color: var(--light);
      font-size: 12px;
      font-weight: bold;
      font-family: var(--font-main);

      border-radius: 5px;
      -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
      -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
      box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);

      :hover {
        transition: 1s;
        letter-spacing: 1px;
        -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.8);
        -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.8);
        box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.8);
      }
    }
  }

  .separator {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > p {
      color: var(--light);
      font-size: 18px;
      font-weight: bold;
      font-family: var(--font-main);
    }

    > div {
      width: 1px;
      height: 50px;

      display: flex;

      background-color: var(--light);
      color: var(--light);

      opacity: 0.3;
    }
  }

  .contact {
    width: 400px;
    min-height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;

    -webkit-box-shadow: 0px 0px 13px -9px rgba(85, 85, 85, 1);
    -moz-box-shadow: 0px 0px 13px -9px rgba(85, 85, 85, 1);
    box-shadow: 0px 0px 13px -9px rgba(85, 85, 85, 1);

    > h2 {
      color: var(--light);
      font-size: 18px;
      font-weight: bold;
      font-family: var(--font-main);
    }

    .icons {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;

      border-radius: 5px;
      -webkit-box-shadow: 1px 2px 28px -8px rgba(110, 45, 255, 0.4);
      -moz-box-shadow: 1px 2px 28px -8px rgba(110, 45, 255, 0.4);
      box-shadow: 1px 2px 28px -8px rgba(110, 45, 255, 0.4);

      > a {
        text-decoration: none;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
          color: var(--light);
          width: 30px;
          height: 30px;

          :hover {
            transition: 0.5s;
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
`;
