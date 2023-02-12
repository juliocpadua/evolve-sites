import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
html {
    scroll-behavior: smooth;
}

:root{
    --darkest: #6e2dff;
    --light: #FFFFFF;
    --primary-color: #00011A;
    --gray: #555555;
    --font-main: 'Poppins', sans-serif;
}
`;
