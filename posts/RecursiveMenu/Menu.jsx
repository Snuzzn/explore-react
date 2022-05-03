import React from "react";
import styled from "styled-components";

function Menu({ items }) {
  const [isSubMenuVisible, setIsSubMenuVisible] = React.useState(
    new Array(items.length).fill(false)
  );

  const showMenu = (index) => {
    const clone = [...isSubMenuVisible];
    console.log(clone);
    clone[index] = !clone[index];
    setIsSubMenuVisible(clone);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <ListItem onClick={() => showMenu(index)}>{item.title}</ListItem>
          {item.subMenu && isSubMenuVisible[index] && (
            <Menu items={item.subMenu} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Menu;

const ListItem = styled.li`
  padding: 10px;
  &:hover {
    color: #5773ff;
    cursor: pointer;
  }
`;
