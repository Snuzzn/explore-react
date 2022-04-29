import React from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";
import Hair1 from "../images/character/Hair_C_masculine_A-base.png";
import Hair2 from "../images/character/Hair_B_masculine_A-base.png";
import Hair3 from "../images/character/Hair_A_masculine_A-base.png";
import Hair4 from "../images/character/Hair_A_Feminine_A-base.png";
import Hair5 from "../images/character/Hair5.png";
import Hair6 from "../images/character/Hair6.png";
import MaleBrownHair from "../images/character/Male-Brown-Hair.png";
import PirateHat from "../images/character/Pirate-Hat.png";
import Mask from "../images/character/Mask.png";
import FaceMask from "../images/character/Accessory2.png";
import Bandana from "../images/character/Bandana.png";
import Cap from "../images/character/Accessory5.png";
import Goggles from "../images/character/Glasses_B.png";
import HumanMale from "../images/character/Human1.png";
import HumanFemale from "../images/character/Feminine_A_default.png";
import Skeleton from "../images/character/Skeleton-Default.png";
import Minotaur from "../images/character/Minotaur-Default.png";
import Wolf from "../images/character/Wolf-Default.png";
import Bird from "../images/character/Bird-Default.png";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const hairs = [Hair1, Hair2, Hair4, MaleBrownHair, Hair6, Hair5];
const faces = [HumanMale, HumanFemale, Skeleton, Minotaur, Wolf, Bird];
const accessories = [PirateHat, Bandana, Cap, Mask, Goggles, FaceMask];

const ManagingObjectState = () => {
  const [character, setCharacter] = React.useState({
    hair: null,
    face: HumanFemale,
  });

  const selectItem = (category, item) => {
    let newItem = item;
    if (item === character.hair || item === character.accessory) {
      const clonedChar = { ...character };
      delete clonedChar[category];
      setCharacter(clonedChar);
      return;
    }
    if (category === "hair") {
      setCharacter({ ...character, hair: newItem });
    }
    if (category === "face") {
      setCharacter({ ...character, face: newItem });
    }
    if (category === "accessory")
      setCharacter({ ...character, accessory: newItem });
  };

  return (
    <DemoCont>
      <CharacterCustomiser>
        <InventoryWrapper>
          <Inventory>
            {faces.map((face) => (
              <Box
                onClick={() => selectItem("face", face)}
                isSelected={face === character.face}
              >
                <img src={face} alt="" height="80" />
              </Box>
            ))}
          </Inventory>
          <Inventory>
            {hairs.map((hair) => (
              <Box
                onClick={() => selectItem("hair", hair)}
                isSelected={hair === character.hair}
              >
                <img src={hair} alt="" />
              </Box>
            ))}
          </Inventory>
          <Inventory>
            {accessories.map((accessory) => (
              <Box
                onClick={() => selectItem("accessory", accessory)}
                isSelected={accessory === character.accessory}
              >
                <img src={accessory} alt="" />
              </Box>
            ))}
          </Inventory>
        </InventoryWrapper>

        <PortraitWrapper>
          <Asset src={character.face} {...animation} key={character.face} />
          <AnimatePresence>
            <Asset src={character.hair} {...animation} key={character.hair} />
          </AnimatePresence>
          <AnimatePresence>
            <Asset
              src={character.accessory}
              {...animation}
              key={character.accessory}
            />
          </AnimatePresence>
        </PortraitWrapper>
      </CharacterCustomiser>
    </DemoCont>
  );
};

export default ManagingObjectState;

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
const InventoryWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const PortraitWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #313944;
  border-radius: 20px;
`;

const Asset = styled(motion.img)`
  position: absolute;
  width: 150px;
  top: -45px;
`;

const Inventory = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
`;

const Box = styled.div`
  width: 90px;
  height: 90px;
  background-color: ${(p) => (p.isSelected ? "#33373b" : "#202326")};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CharacterCustomiser = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
