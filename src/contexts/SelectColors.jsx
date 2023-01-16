import { ColorConsumer } from "./Color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => {
              return (
                <div
                  key={color}
                  style={{
                    background: color,
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                  }}
                  onClick={() => actions.setColor(color)} // actions 객체에 있는 setColor 함수를 호출
                  onContextMenu={(e) => {   // 마우스 오른쪽 버튼 클릭시
                    e.preventDefault(); // 마우스 오른쪽 버튼 클릭시 메뉴가 뜨는것을 무시
                    actions.setSubcolor(color); // actions 객체에 있는 setSubcolor 함수를 호출
                  }}
                />
              );
            })}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};
export default SelectColors;
