import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  // form内でenterが押されたときに発火
  const handleSubmit = (e) => {
    e.preventDefault();

    const taskId = uuid();

    // 未記入およびスペースのみの場合はタスク追加しない
    const regSpace = /^\s+?$/;
    if (inputText === "" || regSpace.test(inputText)) {
      return;
    }

    // カードを追加
    // ...でスプレッド構文として元の配列の中身を展開して格納する
    // つまり、今までの内容を追加しつつ、今回新しく入力された内容も追加する、ということ。
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);

    // taskList更新後はinput内の文字を消す
    setInputText("");
  };

  // input内の文字が変更されるたびに発火
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        ></input>
      </form>
    </div>
  );
};
