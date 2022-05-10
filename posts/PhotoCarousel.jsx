import DemoCont from "components/DemoCont";
import React, { useState } from "react";
import styled from "styled-components";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import Codeblock from "components/Codeblock";
import useUiSound from "hooks/useUiSound";
import { bubbleClick } from "helper/sounds";
const images = ["corgi", "husky", "samoyed", "pom", "retriever"];

const PhotoCarousel = () => {
  const [slide, setSlide] = useState(2);
  const [direction, setDirection] = useState(1);

  const { play } = useUiSound(bubbleClick);

  const navigateGallery = (diff) => {
    if (slide + diff >= 0 && slide + diff < images.length) {
      setDirection(diff > 0 ? 1 : -1);
      setSlide((slide) => slide + diff);
      play();
    }
  };

  return (
    <>
      <DemoCont>
        <GalleryWrapper>
          <NavBtn
            onClick={() => navigateGallery(-1)}
            isDisabled={slide === 0}
            whileTap={slide !== 0 && { scale: 0.7 }}
          >
            <MdNavigateBefore size="2.5em" />
          </NavBtn>
          <ImgWrapper>
            <AnimatePresence initial={false} custom={direction}>
              <Img
                id={slide}
                key={slide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                src={`/images/gallery/${images[slide]}.jpg`}
              />
            </AnimatePresence>
          </ImgWrapper>
          <NavBtn
            onClick={() => navigateGallery(1)}
            isDisabled={slide === images.length - 1}
            whileTap={slide !== images.length - 1 && { scale: 0.7 }}
          >
            <MdNavigateNext size="2.5em" />
          </NavBtn>
        </GalleryWrapper>
      </DemoCont>
      <Codeblock codeFiles={codeSnippet} />
    </>
  );
};

export default PhotoCarousel;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    zIndex: -1,
  }),
};

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 400px;
  width: 600px;
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const NavBtn = styled(motion.button)`
  color: ${(p) => (p.isDisabled ? "grey" : "white")};
  cursor: ${(p) => (p.isDisabled ? "auto" : "pointer")};
  background: none;
  border: none;
`;

const codeSnippet = [
  {
    name: "PhotoCarousel",
    lang: "jsx",
    code: ` // Inspired by https://www.framer.com/docs/examples/#exit-animations
import { AnimatePresence, motion } from "framer-motion";

const images = ["corgi", "husky", "samoyed", "pom", "retriever"];

const PhotoCarousel = () => {
  const [slide, setSlide] = useState(1);
  const [direction, setDirection] = useState(1);

  const navigateGallery = (diff) => {
    if (slide + diff >= 0 && slide + diff < images.length) {
      setDirection(diff > 0 ? 1 : -1);
      setSlide((slide) => slide + diff);
    }
  };

  return (
    <>
      <DemoCont>
        <GalleryWrapper>
          <NavBtn
            onClick={() => navigateGallery(-1)}
            isDisabled={slide === 0}
            whileTap={slide !== 0 && { scale: 0.7 }}
          >
            <MdNavigateBefore size="2.5em" />
          </NavBtn>
          <ImgWrapper>
            <AnimatePresence initial={false} custom={direction}>
              <Img
                id={slide}
                key={slide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                src={\`/images/gallery/\${images[slide]}.jpg\`}
              />
            </AnimatePresence>
          </ImgWrapper>
          <NavBtn
            onClick={() => navigateGallery(1)}
            isDisabled={slide === images.length - 1}
            whileTap={slide !== images.length - 1 && { scale: 0.7 }}
          >
            <MdNavigateNext size="2.5em" />
          </NavBtn>
        </GalleryWrapper>
      </DemoCont>
    </>
  );
};

export default PhotoCarousel;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    zIndex: -1,
  }),
};

const GalleryWrapper = styled.div\`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 400px;
  width: 600px;
\`;

const Img = styled(motion.img)\`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
\`;

const ImgWrapper = styled.div\`
  height: 100%;
  width: 100%;
  position: relative;
\`;

const NavBtn = styled(motion.button)\`
  color: \${(p) => (p.isDisabled ? "grey" : "white")};
  cursor: \${(p) => (p.isDisabled ? "auto" : "pointer")};
  background: none;
  border: none;
\`;
`,
  },
];
