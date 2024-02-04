import React from "react";
import { DiReact, DiZend } from "react-icons/di";
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
    <br />
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>Below is a list of technical skills I possess:</SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            C++, Java, Python, C, HTML, CSS, Javascript, Ocaml, Bash
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>FrontEnd Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, React.js, Next.js, Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>AI/ML related Libraries</ListTitle>
          <ListParagraph>
            Familiarity with common Python ML libraries, including Pandas,
            Tensorflow, Pytorch, Scikit-Learn and Java Neuroph Library
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
