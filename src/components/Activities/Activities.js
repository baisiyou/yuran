import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../Projects/ProjectsStyles"; //styled components
import {
  Section,
  SectionDivider,
  SectionTitle,
  LinkContainer,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./ActivitiesStyles";
import { activities } from "../../constants/constants";

const Activities = () => (
  <Section nopadding id="activities">
    <SectionTitle>Activities</SectionTitle>
    <Boxes>
      <GridContainer>
        {activities.map(({ title, image, description }) => (
          <BlogCard>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
            </TitleContent>
            <Img src={image} />
            <CardInfo>
              <ul>
                {description.split("\n").map((line, idx) => (
                  <li>⭐{line}</li>
                ))}
              </ul>
            </CardInfo>
          </BlogCard>
        ))}
      </GridContainer>
    </Boxes>
  </Section>
);

export default Activities;
