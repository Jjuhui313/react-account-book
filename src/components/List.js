import React, { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    cost,
    accountData,
    setAccountData,
    provided,
    snapshot,
    handleDelete,
    isEditing,
    setIsEditing,
    editedTitle,
    setEditedTitle,
    handleEdit,
  }) => {
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-200" : ""
        } flex items-center justify-between w-full px-4 py-1 my-2 border`}
      >
        <span className="w-1/3">{title}</span>
        <span className="w-1/5 text-right">{cost}</span>
        <div>
          <button onClick={() => setIsEditing(true)} className="mr-2">
            수정
          </button>
          <button onClick={() => handleDelete(id)}>삭제</button>
        </div>
      </div>
    );
  }
);

export default List;
