import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./skillStyles";

const Skills = () => (
  <Section id="skills">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>Below is a list of technical skills I possess:</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>FrontEnd + BackEnd</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, React.js, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
