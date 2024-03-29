import styled from "styled-components";

export const HeaderConteiner = styled.header`
  background-color: var(--primary-color);
  -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 1);
  -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 1);
  box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 1);

  max-width: 93%;
  height: 95px;
  box-sizing: border-box;
  padding-inline-start: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50%;

  margin-top: 25px;
  border-radius: 0px 10px 10px 0px;

  @media (max-width: 824px) {
    border-radius: 0px 10px 0px 0px;
    gap: 20%;
  }

  .desk__meunu {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  > div,
  section {
    display: flex;
    gap: 20px;

    .submenu-service {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 25px;

      background-color: var(--primary-color);
      box-sizing: border-box;
      padding: 10px;
      border-radius: 5px;

      > span {
        color: var(--light);
        display: flex;
        align-items: center;

        font-family: var(--font-main);
        font-weight: 500;
        cursor: pointer;

        > a {
          text-decoration: none;
          color: var(--light);
        }

        :hover {
          font-weight: bold;
          /* border-bottom: 0.5px solid var(--light);
          transition: 0.8s;
          transform: translateY(1px); */
        }
      }
    }

    > p {
      color: var(--light);
      display: flex;
      align-items: center;

      font-family: var(--font-main);
      font-weight: 500;
      cursor: pointer;

      :hover {
        font-weight: 600;
      }

      > svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
      }
    }
  }

  > section {
    display: flex;
    flex-direction: column;

    .submenu-service {
      display: flex;
      flex-direction: column;

      > span {
        color: var(--light);
        display: flex;
        align-items: center;

        font-family: var(--font-main);
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  .menuArea {
    @media (min-width: 1024px) {
      display: none;
    }
    width: 25px;
    height: 25px;
    cursor: pointer;

    > svg {
      width: 25px;
      height: 25px;
    }
  }

  > img {
    max-width: 55%;

    @media (min-width: 1024px) {
      max-width: 20%;
    }
  }

  > p {
    color: var(--light);
  }
`;

export const MenuMobile = styled.div`
  @keyframes open {
    0% {
      transform: translateX(-200px);
    }
    100% {
      transform: translatex(0);
    }
  }
  animation: open 2s;
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 93%;
  position: absolute;

  background-color: var(--primary-color);
  border-top: 0.5px solid var(--light);

  box-sizing: border-box;
  padding: 25px;
  gap: 40px;

  > p {
    color: var(--light);
    display: flex;
    align-items: center;

    font-family: var(--font-main);
    font-weight: 500;
    cursor: pointer;

    > svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  > span {
    margin-left: 15px;
    > a {
      text-decoration: none;
      color: var(--light);
      font-family: var(--font-main);
      font-weight: 500;
    }
  }
`;
