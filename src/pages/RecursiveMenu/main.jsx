import React from "react";
import Codeblock from "../../components/Codeblock";
import DemoCont from "../../components/DemoCont";
import Menu from "./Menu";

function RecursiveMenu() {
  return (
    <>
      <DemoCont>
        <Menu items={entries} />
      </DemoCont>
      <Codeblock codeFiles={[{ code: codeblock, name: "useEffectDemo" }]} />
    </>
  );
}

export default RecursiveMenu;

const entries = [
  {
    title: "Coding",
    subMenu: [
      { title: "React", subMenu: [{ title: "Redux" }] },
      { title: "Python", subMenu: [{ title: "Flask" }] },
    ],
  },
  {
    title: "Music",
    subMenu: [
      {
        title: "Strings",
        subMenu: [{ title: "Guitar" }, { title: "Mandolin" }],
      },
      {
        title: "Woodwinds",
        subMenu: [{ title: "Saxophone" }, { title: "Clarinet" }],
      },
    ],
  },
  {
    title: "Art",
    subMenu: [{ title: "Landscape", subMenu: [{ title: "Perspective" }] }],
  },
];

const codeblock = `function Menu({ items }) {
  const [isSubMenuVisible, setIsSubMenuVisible] 
    = React.useState(new Array(items.length).fill(false));

  const showMenu = (index) => {
    const clone = [...isSubMenuVisible];
    clone[index] = !clone[index];
    setIsSubMenuVisible(clone);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <li onClick={() => showMenu(index)}>
            {item.title}
          </li>
          {item.subMenu && isSubMenuVisible[index] && (
            <Menu items={item.subMenu} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Menu;

// pass in entries as initial props into Menu
const entries = [
  {
    title: "Coding",
    subMenu: [
      { title: "React", subMenu: [{ title: "Redux" }] },
      { title: "Python", subMenu: [{ title: "Flask" }] },
    ],
  },
  {
    title: "Music",
    subMenu: [
      {
        title: "Strings",
        subMenu: [{ title: "Guitar" }, { title: "Mandolin" }],
      },
      {
        title: "Woodwinds",
        subMenu: [{ title: "Saxophone" }, { title: "Clarinet" }],
      },
    ],
  },
  {
    title: "Art",
    subMenu: [{ title: "Landscape", subMenu: [{ title: "Perspective" }] }],
  },
];`;
