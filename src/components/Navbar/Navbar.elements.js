import styled from "styled-components";
import { IoLogoBuffer } from "react-icons/io";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import tw from "twin.macro";

export const Nav = styled.nav`
  background-color: #002c51;
  ${tw` h-20 flex justify-center items-center text-xl sticky top-0 z-50`};
`;

export const NavbarContainer = styled(Container)`
  ${tw` flex justify-between h-20`}

  ${Container}
`;

export const NavLogo = styled(Link)`
  ${tw` text-white cursor-pointer no-underline text-3xl flex items-center justify-self-start`}
`;

export const NavIcon = styled(IoLogoBuffer)`
  ${tw` mr-2`}
`;

export const MobileIcon = styled.div`
  ${tw` hidden mt-2`}

  @media screen and (max-width: 960px) {
    transform: translate(-100%, 60%);

    ${tw` block absolute top-0 right-0 text-3xl cursor-pointer`}
  }
`;

export const NavMenu = styled.ul`
  ${tw` flex items-center text-center list-none`}

  @media screen and (max-width: 960px) {
    left: ${({ click }) => (click ? 0 : "-100%")};

    transition: all 0.5s ease;
    background-color: #002c51;

    height: 90vh;

    top: 80px;

    transition: all 0.5s ease;

    ${tw` flex flex-col w-full absolute opacity-100`}
  }
`;

export const NavItem = styled.li`
  height: 80px;

  ${tw` h-20`}

  &:hover {
    border-bottom: 2px solid #ffffff;
  }

  @media screen and (max-width: 960px) {
    ${tw` w-full`}

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    ${tw` flex justify-center items-center w-full h-32 `}
  }
`;

export const NavLinks = styled(Link)`
  padding: 2.5rem 1rem;

  ${tw` text-white flex items-center no-underline h-full `}

  @media screen and (max-width: 960px) {
    ${tw` text-center p-8 w-full table`}

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  padding: 8px 16px;

  border: none;
  outline: none;

  ${tw`flex justify-center items-center no-underline h-full w-full `}
`;
