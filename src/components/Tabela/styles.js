import styled from 'styled-components';

export const Table = styled.table`
  width: 60%;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
`;

export const Button = styled.button`
  background-color: violet;
  border:0;
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    font-size: 30px;

  }
    &.hide-li {
      display: none;
    }
`;