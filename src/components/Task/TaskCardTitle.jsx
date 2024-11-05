import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  // マウスポインターがinput範囲外を外れた時に発火する関数
  const handleBlur = (e) => {
    setIsClick(false);
  };

  return (
    <div className="taskCardTitleInputArea" onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInputArea"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="10"
          ></input>
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
