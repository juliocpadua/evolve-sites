import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #00011a,
    #0b0e2c,
    #13153f,
    #201952,
    #321c64
  );

  .banner-one {
    width: 300px;
    border-radius: 5px;
    -webkit-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
    -moz-box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);
    box-shadow: 1px 2px 28px -2px rgba(110, 45, 255, 0.4);

    float: right;
    margin-right: 110px;
    margin-top: -180px;

    @keyframes go-back2 {
      0% {
        transform: translateY(-550px);
      }
      100% {
        transform: translateY(0);
      }
    }

    animation: go-back2 4s;

    @media (max-width: 1024px) {
      transition: 2s;
      float: right;
      margin-right: 10px;
      margin-top: 8px;
    }
  }
`;
