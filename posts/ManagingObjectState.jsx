import React from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";
import { motion, AnimatePresence } from "framer-motion";
import InfoCard from "../components/InfoCard";
import Codeblock from "../components/Codeblock";
import useUiSound from "../hooks/useUiSound";
import { SwitchSfx } from "../helper/sounds";

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
              <div key={type}>
                <CategoryTitle>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </CategoryTitle>
                <InventoryItems>
                  {types[type].map((item) => (
                    <Box
                      key={item}
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
        When updating a object, make a shallow copy with the spread operator,
        and add the new key-value pair. Finally, set the state with this copy.
      </InfoCard>
      <Codeblock
        codeFiles={[{ code: code, name: "CharacterCustomiser", lang: "jsx" }]}
      />
    </>
  );
};

export default ManagingObjectState;

const CharacterCustomiser = styled.div`
  display: flex;
  gap: 55px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -15px;
`;

const InventoryWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  margin-top: -20px;
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

const code = `const hairs = [BlHair1, BlHair2, BlHair3, BrHair1, BrHair2, BrHair3];
const faces = [HumanMale, HumanFemale, Skeleton, Minotaur, Wolf, Bird];
const accessories = [PirateHat, Bandana, Cap, Mask, Goggles, FaceMask];

const types = {
  face: faces,
  hair: hairs,
  accessory: accessories,
};

const CharacterCustomiser = () => {
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

const BlHair1 = "/images/character/Hair_C_masculine_A-base.png";
const BlHair2 = "/images/character/Hair_B_masculine_A-base.png";
const BlHair3 = "/images/character/Hair_A_masculine_A-base.png";
const BrHair1 = "/images/character/Male-Brown-Hair.png";
const BrHair2 = "/images/character/Hair5.png";
const BrHair3 = "/images/character/Hair6.png";
const PirateHat = "/images/character/Pirate-Hat.png";
const Mask = "/images/character/Mask.png";
const FaceMask = "/images/character/Accessory2.png";
const Bandana = "/images/character/Bandana.png";
const Cap = "../images/character/Accessory5.png";
const Goggles = "../images/character/Glasses_B.png";
const HumanMale = "../images/character/Human1.png";
const HumanFemale = "../images/character/Human4.png";
const Skeleton = "../images/character/Skeleton-Default.png";
const Minotaur = "../images/character/Minotaur-Default.png";
const Wolf = "../images/character/Wolf-Default.png";
const Bird = "../images/character/Bird-Default.png";

const hairs = [BlHair1, BlHair2, BlHair3, BrHair1, BrHair2, BrHair3];
const faces = [HumanMale, HumanFemale, Skeleton, Minotaur, Wolf, Bird];
const accessories = [PirateHat, Bandana, Cap, Mask, Goggles, FaceMask];

const types = {
  face: faces,
  hair: hairs,
  accessory: accessories,
};
