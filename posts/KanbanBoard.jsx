import DemoCont from "components/DemoCont";
import React from "react";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const kanbanData = [
  {
    title: "In progress",
    cards: [
      { description: "sadfds fads fsadf asddsfa sdfsda f", id: 1 },
      { description: "da fsadf ads fads fasdf adsf dsaf ", id: 2 },
    ],
  },
  {
    title: "Done",
    cards: [
      { description: "Do task 5", id: 3 },
      { description: "Doneso", id: 4 },
    ],
  },
];

const handleOnDragEnd = (result) => {
  // console.log(result);
};

const KanbanBoard = () => {
  return (
    <>
      <DemoCont>
        <KanbanWrapper>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {/* {kanbanData.map((board) => ( */}
            <Droppable droppableId={"In progress"}>
              {(provided) => (
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                  {kanbanData[0].cards.map((card, index) => (
                    <Draggable
                      key={card.id}
                      draggableId={card.id}
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                        >
                          {card.description}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Board>
              )}
            </Droppable>
            {/* ))} */}
          </DragDropContext>
        </KanbanWrapper>
      </DemoCont>
    </>
  );
};

export default KanbanBoard;

const Board = styled.div`
  background-color: #2a2e33;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  border-radius: 20px;
  width: 300px;
`;

const KanbanWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #202326;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.2rem;
`;
