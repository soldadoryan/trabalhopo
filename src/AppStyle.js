import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html { height: 100%; }
  body { height: 100%; margin: 0; box-sizing: border-box; padding: 0; background: url(https://s3.amazonaws.com/wp-sbc-blog/wp-content/uploads/2019/05/03213305/tristeza-quais-diferencas-depressao.jpg); background-size: cover; }
  #root { 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

`;