import React from "react";
import ColorfulMessage from "./component/message/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1>Hello world!</h1>
      <p>お元気ですか？</p>
      <ColorfulMessage color="blue">元気かよ？</ColorfulMessage>
      <button onClick={() => onClickButton()}>ボタン</button>
    </>
  );
};

export default App;
