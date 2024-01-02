import React from 'react';

function TitleChanger() {
    const [name, setName] = React.useState('Eliott');
    React.useEffect (() => {
        document.title = 'Page by ' + name;
    }, [name]);
    return (
     <div>  
        <form>
            <input type="text" name="name" onChange={e => setName(e.target.value)} />
        </form>
        <p>
            Page by {name}
        </p>
    </div>
    );
}
export default TitleChanger;