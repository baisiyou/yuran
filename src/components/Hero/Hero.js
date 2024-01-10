import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Heya! This is Yuran,
        <br />
        Welcome to my webpage!
      </SectionTitle>
      <SectionText>
        I am ...
        <li>currently a U3 CS+Statistics student at McGill's University.</li>
        <li>
          An algorithm enthusist and love tackling all kinds of challenging
          problems.{" "}
        </li>
        <li>An active member of competitive programming society.</li>
        Striving to get better ...
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
