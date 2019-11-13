import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html { height: 100%; }
  body { height: 100%; margin: 0; box-sizing: border-box; padding: 0; }
  #root { 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

`;