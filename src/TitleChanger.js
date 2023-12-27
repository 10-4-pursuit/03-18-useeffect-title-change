import React, {useState, useEffect, useLayoutEffect} from 'react'

function TitleChanger() {
    const [name, setName] = useState("YooHoo")
    useEffect(() => {
        document.title = `Document Title: ${name}`
    }, [name])
  return (
    <div>
        <label htmlFor='nameInput'>Type in Name:</label>
        <input 
        type="text"
        onChange= {(event) =>setName(event.target.value)}
        />
    </div>
  )
}

export default TitleChanger