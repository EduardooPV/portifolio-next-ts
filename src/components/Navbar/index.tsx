import React, { useContext } from "react";

import { Container, Content, MenuHamburguer, NavLinks } from "./styles";
import { bubble as Menu } from "react-burger-menu";
import { NavbarProps } from "./interface";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Media } from "../MediaScreen";
import Link from "next/link";

export function Navbar({ toggleTheme, theme }: NavbarProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <a href="/">
          <img src="assets/logo.svg" alt="Logo" />
        </a>

        <div>
          <Media greaterThan="sm">
            <NavLinks>
              <Link href="/" passHref>
                <a>Início</a>
              </Link>
              <Link href="/projetos" passHref>
                <a>Projetos</a>
              </Link>
              <Link href="/contato" passHref>
                <a>Contato</a>
              </Link>
              <a
                href="/CV-Luiz-Eduardo-Front-End.pdf/"
                download="CV-Luiz-Eduardo-Front-End"
              >
                Curriculo
              </a>
              <Switch
                onChange={toggleTheme}
                checked={theme.title === "light"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.primary}
                onColor="#fff"
                onHandleColor={colors.primary}
              />
            </NavLinks>
          </Media>
          <Media at="sm">
            <MenuHamburguer>
              <Menu
                right
                noOverlay
                customBurgerIcon={<img src="/assets/menu.svg" />}
                customCrossIcon={<img src="/assets/close.svg" />}
              >
                <Link href="/" passHref>
                  <a className="menu-item">Início</a>
                </Link>
                <Link href="/projetos" passHref>
                  <a className="menu-item">Projetos</a>
                </Link>
                <Link href="/contato" passHref>
                  <a className="menu-item">Contato</a>
                </Link>
                <a
                  className="menu-item"
                  href="/CV-Luiz-Eduardo-Front-End.pdf/"
                  download="CV-Luiz-Eduardo-Front-End"
                >
                  Download CV
                </a>
              </Menu>
            </MenuHamburguer>
          </Media>
        </div>
      </Content>
    </Container>
  );
}
