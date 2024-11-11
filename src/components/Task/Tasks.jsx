import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Tasks = ({ taskList, setTaskList }) => {
  const reorder = (list, startIndex, endIndex) => {
    /**
     * list.splice(index, 1)
     * でlistのindex番目の要素を1つlistから抜きだして返却する。
     *
     * つまり、list=[1,2,3]のときに
     * const remove = list.splice(0, 1)
     * とすると、0番目の要素を1つ抜きだすので
     *   list => [2,3]
     *   remove => [1]
     * となる。
     */
    const remove = list.splice(startIndex, 1); // [1,2,3] => [2,3]

    /**
     * list.splice(index, 0, insert)
     * でlistのindex番目の要素の前にinsertを挿入する。
     * （2番目の引数は0なので、挿入の前に「index番目の要素を0個抜き出す=変化なし」という処理がある？）
     *
     * つまり、list=[1,2,3],,insertItem=10のときに
     * list.splice(1, 0, insertItem)
     * とすると、1番目の要素の前に挿入するので
     *   list => [1,10,2,3]
     * となる。
     */
    list.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result) => {
    // タスクの並び替え
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
