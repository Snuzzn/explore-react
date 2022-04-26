import React from "react";
import styled from "styled-components";
import CategoryCont from "../components/CategoryCont";
import DemoCont from "../components/DemoCont";
import Feature from "../components/Feature";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
function Home() {
  const [currSection, setCurrSection] = React.useState("Fundamentals");

  const linkData = [
    {
      title: "Fundamentals",
      features: [
        "useState",
        "useEffect",
        "Passing State",
        "useInput",
        "Styled Components",
      ],
    },
    {
      title: "Common features",
      features: [
        "Fetch with Skeleton",
        "Recursive Menu",
        "Search Debounce",
        "Search Filter",
      ],
    },
    {
      title: "Mini Projects",
      features: ["Typescript IMDB", "Todo List", "Pokemon Redux"],
    },
  ];

  const toKebabCase = (str) =>
    str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();

  return (
    <HomeWrapper
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
      id="home"
    >
      <ContentsWrapper>
        <Title>Explore React</Title>
        {linkData.map((category) => (
          <CategoryCont
            borderText={category.title}
            id={toKebabCase(category.title)}
          >
            <FlexContainer>
              {category.features.map((feature) => (
                <Feature title={feature} route={toKebabCase(feature)} />
              ))}
            </FlexContainer>
          </CategoryCont>
        ))}
      </ContentsWrapper>

      <TableOfContents>
        <TocTitle>Overview</TocTitle>
        <TocItem
          to="fundamentals"
          smooth
          offset={-30}
          onClick={() => setCurrSection("Fundamentals")}
          isSelected={"Fundamentals" === currSection}
        >
          Fundamentals
        </TocItem>
        <TocItem
          to="common-features"
          smooth
          offset={-30}
          onClick={() => setCurrSection("Common features")}
          isSelected={"Common features" === currSection}
        >
          Common features
        </TocItem>
        <TocItem
          to="mini-projects"
          smooth
          offset={-30}
          onClick={() => setCurrSection("Mini projects")}
          isSelected={"Mini projects" === currSection}
        >
          Mini projects
        </TocItem>
      </TableOfContents>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled(motion.div)`
  display: flex;
  gap: 90px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TableOfContents = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 150px;
  height: 100%;
`;

const TocTitle = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
`;

const TocItem = styled(Link)`
  cursor: pointer;
  color: ${(p) => (p.isSelected ? "#5773FE" : "white")};
  transition: all 200ms ease;
  font-size: 1.2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 26pt;
  align-self: flex-start;
  margin-bottom: 0;
`;
