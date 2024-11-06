import React from "react";

export const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    // filter関数でtaskListの中身を順番に見てtaskとして取り出して
    // task.idが引数のidを一致していないものだけを最終的に取り出す。
    // つまり、一致しているものは削除する。
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
