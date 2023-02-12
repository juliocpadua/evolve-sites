import styled from "styled-components";

export const HeaderConteiner = styled.div`
  background-color: var(--primary-color);

  min-width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding-inline-start: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15%;

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

        :hover {
          border-bottom: 0.5px solid var(--light);
          transition: 0.8s;
          transform: translate(8px);
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
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100vw;
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
`;
