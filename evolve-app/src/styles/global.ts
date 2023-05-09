import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body::-webkit-scrollbar {
  width: 4px;              
}

body::-webkit-scrollbar-track {
  background: #00011A;        
}

body::-webkit-scrollbar-thumb {
  background-color:  #6e2dff;    
  border-radius: 20px;       
  border: 3px solid #6e2dff;  
  border-radius: 10px;
}

html {
    scroll-behavior: smooth;
    background-color: #00011A;
}

:root{
    --darkest: #6e2dff;
    --light: #FFFFFF;
    --primary-color: #00011A;
    --gray: #555555;
    --font-main: 'Poppins', sans-serif;
}
`;
