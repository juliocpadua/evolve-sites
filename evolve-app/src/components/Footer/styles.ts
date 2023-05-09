import styled from "styled-components";

export const ContainerFooter = styled.footer`
  min-height: 300px;
  background-color: var(--primary-color);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 20px;
  margin-top: 50px;

  > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      width: 290px;
      height: 200px;
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
    }
  }

  > a {
    text-decoration: none;
    margin-top: -40px;

    :hover {
      > p {
        transition: 1s;
        width: 55px;
        height: 55px;
        border-radius: 55px;

        > svg {
          transition: 1s;
          width: 50px;
          height: 50px;
        }
      }
    }

    > p {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: var(--darkest);

      display: flex;
      align-items: center;
      justify-content: center;

      > svg {
        color: var(--primary-color);
        width: 45px;
        height: 45px;
      }
    }
  }
`;
