import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { LinkContainer } from "../../styles/GlobalComponents";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>YZ's Gallery</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#skills">
          <LinkContainer>
            <NavLink>Skills</NavLink>
          </LinkContainer>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <LinkContainer>
            <NavLink>Projects</NavLink>
          </LinkContainer>
        </Link>
      </li>
      <Link href="#experiences">
        <LinkContainer>
          <NavLink>Experiences</NavLink>
        </LinkContainer>
      </Link>
      <li>
        <Link href="#activities">
          <LinkContainer>
            <NavLink>Activities</NavLink>
          </LinkContainer>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
