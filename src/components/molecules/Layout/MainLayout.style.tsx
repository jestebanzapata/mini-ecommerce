import styled, { css } from "styled-components";

interface LayoutProp {
  reserve: boolean
}

export const StyledMainLayout = styled.section<LayoutProp>(({reserve}) => css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-weight: bold;
  font-family: sans-serif;

  font-weight: bold;
  font-family: sans-serif;

  .mainContent {
    height: 90vh;
  }

  .topMenu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    width: 100%;

    
    background-color: ${!reserve ? `white`: `black`};

    ul{
      display: flex;
      list-style: none;

      li {
        margin-left: 25px;
      }

      li:last-child { 
        margin-right: 20px;
      }
      
      a { 
        text-decoration: none; 
        color: ${!reserve ? `black`: `white`};
      }

      

    }
  }
`);