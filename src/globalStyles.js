import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

const GlobalStyle = createGlobalStyle`
  * {

  font-family: 'Source Sans Pro', sans-serif;
    ${tw` box-border m-0 p-0`}
 } 
`;

export const Container = styled.div`
  z-index: 1;

  max-width: 1300px;

  ${tw` w-full mr-auto ml-auto pr-12 pl-12`}

  @media screen and (max-width: 991px) {
    ${tw` pr-8 pl-8`}
  }
`;

export const Button = styled.button`
  background: ${({ primary }) => (primary ? "#ffffff" : "#0467FB")};

  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};

  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;

  ${tw` focus:outline-none rounded whitespace-no-wrap text-black cursor-pointer`}

  &:hover {
    transition: all 0.3s ease-out;

    background-color: ${({ primary }) => (primary ? "#e2e8f0" : "#4B59F7")};
    ${tw` focus:outline-none bg-white`}
  }

  @media screen and (max-width: 960px) {
    ${tw` w-full`}
  }
`;

export default GlobalStyle;
