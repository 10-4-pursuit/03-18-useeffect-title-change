import React, { useState, useEffect } from "react";

function TitleChanger() {
  const [name, setNewName] = useState("Catch 22");
  useEffect(() => {
    document.title = "My favorite book is ${name}";
  }, [name]);

  const nameChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={nameChange}
        placeholder="Enter new book title"
      />
    </div>
  );
}

export default TitleChanger;
