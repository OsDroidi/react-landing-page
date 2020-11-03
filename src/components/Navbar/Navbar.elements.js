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
  ${tw` hidden`}

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
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ffffff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
