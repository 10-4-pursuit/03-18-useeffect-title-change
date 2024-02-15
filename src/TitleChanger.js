import { useState, useEffect } from "react";

function TitleChanger() {
    const [title, setTitle] = useState("Title");

    useEffect(() => {
        document.title = title;
    }, [title]);
  
    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <p>{title}</p>
            
        </div>
    )
    }

export default TitleChanger;
