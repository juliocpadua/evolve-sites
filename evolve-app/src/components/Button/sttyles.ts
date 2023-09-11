import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: var(--light);

  font-weight: 550;
  font-family: var(--font-main);
  color: var(--light);
  font-size: 14px;
  letter-spacing: 1px;

  /* background-color: var(--primary-color); */
  background-color: transparent;
  border: 0.3px solid var(--light);
  outline: none;

  width: 100%;

  box-sizing: border-box;
  padding: 10px;
  border-radius: 3px;

  cursor: pointer;

  &&:hover {
    transition: 1s;
    background-color: rgba(0.7, 0.7, 0.7, 0.4);
    border: 0.3px solid var(--light);
    letter-spacing: 2px;
    // rgba(0.7, 0.7, 0.7, 0.4)
  }

  &&:focus {
    transition: 400ms;
    background-color: rgba(0.7, 0.7, 0.7, 0.4);
    border: 0.3px solid var(--light);
    letter-spacing: 2px;
  }
`;
