import React from "react";
import ColorContext from "./Color";

const ColorBox = () => {
  return (
			/*Consumer 사이에 중괄호를 열어 그안에 함수를 넣어주는 패턴
			* -Function as a child 또는 Render props 라고함
			* 컴포넌트의 children 이 있어야할 자리에 일반 jsx or 문자열이 아닌 함수를 전달하는것*/
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};
export default ColorBox;
