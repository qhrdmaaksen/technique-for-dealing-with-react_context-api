import { createContext, useState } from "react";

/** 컴포넌트에서 ColorContext.Provider 를 렌더링하고있음
 * Provider 의 value 에는 상태 state 로 업데이트 함수는 actions 로 묶어서 전달하고있음
 * Context 에서 값을 동적으로 사용할때 반드시 묶어줄 필요는 없지만 state 와 actions 객체를
 * --따로따로 분리해주면 나중에 다른 컴포넌트에서 Context 의 값을 사용할때 편함
 * createContext 의 기본값은 실제 Provider 의 value 에 넣는 객체의 형태와 일치시켜주는것이좋음
 * --Context 코드를 볼때 내부 값이 어떻게 구성되어있는지 파악하기도쉽고
 * --실수로 Provider 를 사용하지 않았을때 리액트 앱에서 에러가 발생하지 않음*/

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer 와 같은 의미
const {Consumer: ColorConsumer} = ColorContext

// ColorProvider 와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer}

export default ColorContext;
