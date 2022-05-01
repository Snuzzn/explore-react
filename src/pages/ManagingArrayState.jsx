import React, { useState } from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";
import { MdRefresh, MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import InfoCard from "../components/InfoCard";
import Codeblock from "../components/Codeblock";
import increaseSfx from "../sounds/increase.ogg";
import decreaseSfx from "../sounds/decrease.ogg";
import updateSfx from "../sounds/select_006.ogg";
import useUiSound from "../hooks/useUiSound";

const ManagingArrayState = () => {
  const [blocks, setBlocks] = useState(["#3B82F6", "#1D4ED8", "#6366F1"]);
  const { play: playUp } = useUiSound(increaseSfx);
  const { play: playDown } = useUiSound(decreaseSfx);
  const { play: playUpdate } = useUiSound(updateSfx);

  // find a colour that doesn't already exist in the array
  const getUnusedBlockColor = () => {
    return possibleColors.find((color) => !blocks.includes(color));
  };

  const addItem = (pos) => {
    if (blocks.length > 4) return; // limit number of blocks
    playUp();
    // copy array
    const newBlocks = [...blocks];
    // add new block to beginning
    if (pos === "start") newBlocks.unshift(getUnusedBlockColor());
    // add new block to end
    else if (pos === "end") newBlocks.push(getUnusedBlockColor());
    setBlocks(newBlocks);
  };

  const updateItem = (index) => {
    playUpdate();
    // copy array
    const newBlocks = [...blocks];
    // edit existing block
    newBlocks[index] = getUnusedBlockColor();
    setBlocks(newBlocks);
  };

  const deleteItem = (index) => {
    if (blocks.length === 1) return; // at least one block must exist
    playDown();
    // filter out the block with the selected index
    const newBlocks = blocks.filter((block, i) => i !== index);
    setBlocks(newBlocks);
  };

  return (
    <>
      <DemoCont>
        <BlocksWrapper>
          <AddBox layout>
            <MdAddCircleOutline size="1.5em" onClick={() => addItem("start")} />
          </AddBox>
          {/* <AnimatePresence> */}
          {blocks.map((bgColor, index) => (
            <Block
              key={bgColor}
              style={{ "--bgColor": `${bgColor}` }}
              layout
              {...animation}
            >
              <ControlBox>
                <MdRefresh
                  color="white"
                  size="1.5em"
                  onClick={() => updateItem(index)}
                />
                <MdDeleteOutline
                  color="white"
                  size="1.5em"
                  onClick={() => deleteItem(index)}
                />
              </ControlBox>
            </Block>
          ))}
          {/* </AnimatePresence> */}
          <AddBox layout>
            <MdAddCircleOutline size="1.5em" onClick={() => addItem("end")} />
          </AddBox>
        </BlocksWrapper>
      </DemoCont>
      <InfoCard>
        State is immutable; it shouldn't be modified directly. When updating an
        array, first make a shallow copy with the spread operator, then modify
        it. Finally, set the state with this copy.
      </InfoCard>
      <Codeblock code={code} lang="JS" />
    </>
  );
};

export default ManagingArrayState;

const possibleColors = [
  "#3B82F6",
  "#1D4ED8",
  "#6366F1",
  "#4338CA",
  "#8B5CF6",
  "#6D28D9",
  "#A855F7",
  "#7E22CE",
  "#D946EF",
  "#A21CAF",
  "#EC4899",
  "#BE185D",
];

const AddBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.1;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 550px;
  justify-content: center;
`;

const ControlBox = styled.div`
  position: absolute;
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;

const Block = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 70px;
  border-radius: 10px;
  background-color: var(--bgColor);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  &:hover {
    ${ControlBox} {
      opacity: 1;
    }
  }
`;

const animation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0 },
};

const code = `
const ManagingArrayState = () => {
  const [blocks, setBlocks] = useState(["#3B82F6", "#1D4ED8", "#6366F1"]);

  // find a colour that doesn't already exist in the array
  const getUnusedBlockColor = () => {
    return possibleColors.find((color) => !blocks.includes(color));
  };

  const addItem = (pos) => {
    if (blocks.length > 4) return; // limit number of blocks
    // copy array
    const newBlocks = [...blocks];
    // add new block to beginning
    if (pos === "start") newBlocks.unshift(getUnusedBlockColor());
    // add new block to end
    else if (pos === "end") newBlocks.push(getUnusedBlockColor());
    setBlocks(newBlocks);
  };

  const updateItem = (index) => {
    // copy array
    const newBlocks = [...blocks];
    // edit existing block
    newBlocks[index] = getUnusedBlockColor();
    setBlocks(newBlocks);
  };

  const deleteItem = (index) => {
    if (blocks.length === 1) return; // at least one block must exist
    // filter out the block with the selected index
    const newBlocks = blocks.filter((block, i) => i !== index);
    setBlocks(newBlocks);
  };

  return (
    <BlocksWrapper>
      <AddBtn onClick={() => addItem("start")} />
      {blocks.map((bgColor, index) => (
        <Block key={bgColor} style={{ "--bgColor": \`\${bgColor}\` }}>
          <ControlBox>
            <EditBtn onClick={() => updateItem(index)} />
            <DeleteBtn onClick={() => deleteItem(index)} />
          </ControlBox>
        </Block>
      ))}
      <AddBtn onClick={() => addItem("end")} />
    </BlocksWrapper>
  );
};
`;
