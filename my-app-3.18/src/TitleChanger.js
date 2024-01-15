import React, { useState, useEffect } from "react";

function TitleChanger() {
  const [name, setName] = useState("Hingle McCringleBerry");
  const [inputName, setInputName] = useState('')

  useEffect(() => {
    document.title = "Hello" + name;
  }, [name]);

  const changeInput = (event) => {
    setInputName(event.target.value);
  };

  const updateName = () => {
    setName(inputName);
  }

  return <div>
    <h1>{`Hello ${name}`}</h1>
    <input type='text' value={inputName} onChange={changeInput} />
    <button onClick={updateName}>Update Name</button>
    </div>;
}
export default TitleChanger;
