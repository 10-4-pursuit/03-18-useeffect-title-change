import { useState, useEffect } from "react";
// TitleChanger function component to change the title
const TitleChanger = () => {
  // useState hook to set the title
  const [title, setTitle] = useState("");
  // useEffect hook to set the title
  useEffect(() => {
    // Set the title
    document.title = title;
    // Return a cleanup function to reset the title
  }, [title]);

  // Return the title changer
  return (
    <div>
      <h1>Title Changer</h1>
      <p>Current Title: {title}</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default TitleChanger;
