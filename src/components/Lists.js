import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

export const Lists = React.memo(
  ({
    accountData,
    setAccountData,
    handleDelete,
    handleEdit,
    isEditing,
    setIsEditing,
    editedTitle,
    setEditedTitle,
  }) => {
    const handleEnd = (result) => {
      if (!result.destination) return;
      const newAccountData = [...accountData];

      const [reorderedItem] = newAccountData.splice(result.source.index, 1);

      newAccountData.splice(result.destination.index, 0, reorderedItem);
      setAccountData(newAccountData);
    };

    return (
      <div>
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="account">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {accountData.map((data, index) => (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <List
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cost={data.cost}
                        accountData={accountData}
                        setAccountData={setAccountData}
                        provided={provided}
                        snapshot={snapshot}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        editedTitle={editedTitle}
                        setEditedTitle={setEditedTitle}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
);

export default Lists;
