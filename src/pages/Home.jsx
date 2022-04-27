import { OverviewItem } from "./../components/OverviewItem";
import React from "react";
import styled from "styled-components";
import CategoryCont from "../components/CategoryCont";
import DemoCont from "../components/DemoCont";
import Feature from "../components/Feature";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { toKebabCase } from "../helper/general";
import { Link } from "react-scroll";
import { GoMute, GoUnmute } from "react-icons/go";
import { ThemeContext } from "../ThemeProvider";
import { IconButton } from "../components/styles/Styles";
import unmuteSfx from "../sounds/intuition.mp3";
import useSound from "use-sound";

const linkData = [
  {
    title: "Fundamentals",
    features: [
      "useState",
      "useEffect",
      "Passing State",
      "Conditional Rendering",
      "List Rendering",
      "Styled Components",
    ],
  },
  {
    title: "Common features",
    features: [
      "Fetch with Skeleton",
      "useInput",
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

function Home() {
  const [activeCategory, setActiveCategory] = React.useState("");

  const { isSoundEnabled, setIsSoundEnabled } = React.useContext(ThemeContext);
  const [play, { stop }] = useSound(unmuteSfx);

  return (
    <HomeWrapper
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
      id="home"
    >
      <ContentsWrapper>
        <HeaderBar>
          <Title>Explore React</Title>
          <IconButton
            onClick={() => {
              if (!isSoundEnabled) play();
              setIsSoundEnabled(!isSoundEnabled);
            }}
          >
            {isSoundEnabled ? (
              <GoUnmute size="0.9em" />
            ) : (
              <GoMute size="0.9em" />
            )}
          </IconButton>
        </HeaderBar>
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
        <TocTitle to="home" smooth>
          Overview
        </TocTitle>
        {linkData.map((category) => (
          <OverviewItem
            category={category}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        ))}
        <TocDivider />
      </TableOfContents>
    </HomeWrapper>
  );
}

export default Home;
const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  width: 200px;
`;

const TocTitle = styled(Link)`
  font-size: 1.35rem;
  font-weight: bold;
  cursor: pointer;
`;

const TocDivider = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  background-color: #323944;
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
