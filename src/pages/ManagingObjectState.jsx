import React from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";
import BlHair1 from "../images/character/Hair_C_masculine_A-base.png";
import BlHair2 from "../images/character/Hair_B_masculine_A-base.png";
import BlHair3 from "../images/character/Hair_A_masculine_A-base.png";
import BrHair1 from "../images/character/Male-Brown-Hair.png";
import BrHair2 from "../images/character/Hair5.png";
import BrHair3 from "../images/character/Hair6.png";
import PirateHat from "../images/character/Pirate-Hat.png";
import Mask from "../images/character/Mask.png";
import FaceMask from "../images/character/Accessory2.png";
import Bandana from "../images/character/Bandana.png";
import Cap from "../images/character/Accessory5.png";
import Goggles from "../images/character/Glasses_B.png";
import HumanMale from "../images/character/Human1.png";
import HumanFemale from "../images/character/Human4.png";
import Skeleton from "../images/character/Skeleton-Default.png";
import Minotaur from "../images/character/Minotaur-Default.png";
import Wolf from "../images/character/Wolf-Default.png";
import Bird from "../images/character/Bird-Default.png";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import InfoCard from "../components/InfoCard";
import Codeblock from "../components/Codeblock";
import SwitchSfx from "../sounds/click3.ogg";
import useUiSound from "../hooks/useUiSound";

const hairs = [BlHair1, BlHair2, BlHair3, BrHair1, BrHair2, BrHair3];
const faces = [HumanMale, HumanFemale, Skeleton, Minotaur, Wolf, Bird];
const accessories = [PirateHat, Bandana, Cap, Mask, Goggles, FaceMask];

const types = {
  face: faces,
  hair: hairs,
  accessory: accessories,
};

const ManagingObjectState = () => {
  const [character, setCharacter] = React.useState({
    face: HumanMale,
  });

  const { play } = useUiSound(SwitchSfx);

  const selectItem = (type, item) => {
    let newItem = item;
    // remove item if it same as what already exists on character
    if (item === character.hair || item === character.accessory) {
      const clonedChar = { ...character };
      delete clonedChar[type];
      setCharacter(clonedChar);
      play();
      return;
    }
    if (type === "hair" || type === "face" || type === "accessory") {
      setCharacter({ ...character, [type]: newItem });
      play();
    }
  };

  return (
    <>
      <DemoCont>
        <CharacterCustomiser>
          <div>
            <CategoryTitle style={{ fontSize: "1.2em" }}>
              Character
            </CategoryTitle>
            <PortraitWrapper>
              <Asset src={character.face} {...animation} key={character.face} />
              <AnimatePresence>
                <Asset
                  src={character.hair}
                  {...animation}
                  key={character.hair}
                />
              </AnimatePresence>
              <AnimatePresence>
                <Asset
                  src={character.accessory}
                  {...animation}
                  key={character.accessory}
                />
              </AnimatePresence>
            </PortraitWrapper>
          </div>
          <InventoryWrapper>
            {Object.keys(types).map((type) => (
              <div>
                <CategoryTitle>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </CategoryTitle>
                <InventoryItems>
                  {types[type].map((item) => (
                    <Box
                      onClick={() => selectItem(type, item)}
                      isSelected={item === character[type]}
                    >
                      <img src={item} alt="" height="80" />
                    </Box>
                  ))}
                </InventoryItems>
              </div>
            ))}
          </InventoryWrapper>
        </CharacterCustomiser>
      </DemoCont>
      <InfoCard>
        State is immutable; it shouldn't be modified directly. When updating a
        object, make a shallow copy with the spread operator, and add the new
        key-value pair. Finally, set the state with this copy.
      </InfoCard>
      <Codeblock code={code} lang="JS" />
    </>
  );
};

export default ManagingObjectState;

const CharacterCustomiser = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InventoryWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const PortraitWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #313944;
  border-radius: 20px;
`;

const Asset = styled(motion.img)`
  position: absolute;
  width: 150px;
  top: -45px;
`;

const InventoryItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
`;

const Box = styled.div`
  width: 90px;
  height: 90px;
  transition: background-color 0.2s ease-out;
  background-color: ${(p) => (p.isSelected ? "#33373b" : "#202326")};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
const hairs = [BlHair1, BlHair2, BlHair3, BrHair1, BrHair2, BrHair3];
const faces = [HumanMale, HumanFemale, Skeleton, Minotaur, Wolf, Bird];
const accessories = [PirateHat, Bandana, Cap, Mask, Goggles, FaceMask];

const types = {
  face: faces,
  hair: hairs,
  accessory: accessories,
};

const ManagingObjectState = () => {
  const [character, setCharacter] = React.useState({
    face: HumanMale,
  });

  const selectItem = (type, item) => {
    let newItem = item;
    // remove item if it same as what already exists on character
    if (item === character.hair || item === character.accessory) {
      const clonedChar = { ...character };
      delete clonedChar[type];
      setCharacter(clonedChar);
      return;
    }
    if (type === "hair" || type === "face" || type === "accessory")
      setCharacter({ ...character, [type]: newItem });
  };

  return (
    <CharacterCustomiser>
      <div>
        <CategoryTitle>Character</CategoryTitle>
        <PortraitWrapper>
          <Asset src={character.face} />
          <Asset src={character.hair} />
          <Asset src={character.accessory} />
        </PortraitWrapper>
      </div>
      <InventoryWrapper>
        {Object.keys(types).map((type) => (
          <div>
            <CategoryTitle>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </CategoryTitle>
            <InventoryItems>
              {types[type].map((item) => (
                <Box
                  onClick={() => selectItem(type, item)}
                  isSelected={item === character[type]}
                >
                  <img src={item} alt="" height="80" />
                </Box>
              ))}
            </InventoryItems>
          </div>
        ))}
      </InventoryWrapper>

    </CharacterCustomiser>
  );
};  
`;
