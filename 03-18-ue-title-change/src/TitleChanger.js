import React, { useState, useEffect } from 'react';

function TitleChanger() {
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = `Doc Name: ${name || 'Whatever!'}`;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
    </div>
  );
}

export default TitleChanger;
