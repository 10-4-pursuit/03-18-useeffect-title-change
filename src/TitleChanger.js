// Import the necessary dependencies from the React library
import React from "react";

// Define a functional component called TitleChanger
function TitleChanger() {
    // State variables to store the title and name
    const [title, setTitle] = React.useState("Director");
    const [name, setName] = React.useState("Alice");

    // useEffect hook to update the document title when either title or name changes
    React.useEffect(() => {
        document.title = `Hello; ${title} ${name}`;
    }, [title, name]);

    // return JSX code for the component
    return (
        <div>
            {/* Display a heading */}
            <h1>Title Changer</h1>
            {/* Display a greeting with dynamically updated title and name */}
            <h2>Hello, {title} {name}!</h2>
            {/* Input for changing the title */}
            {/*Function to handle a change event (e.g., input value change) onChangeHandler(event): Access the changed value from the event object changedValue = (event)e.target.value*/}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            {/* Input for changing the name */}
            {/*Function to handle a change event (e.g., input value change) onChangeHandler(event): Access the changed value from the event object changedValue = (event)e.target.value*/}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default TitleChanger;