import React, { useState } from 'react'; 

function App() {
    const [name, setName] = useState("Sofia");
    const [newName, setNewName] = useState("");

    const changeName = (e) => {
        e.preventDefault();
        if (newName.trim() !== '') {
            setName(newName); 
            setNewName(""); 
        }
    };

    return (
        <div>
            <h2>Teacher Name: {name}</h2>
            <form onSubmit={changeName}>
                <input
                    type="text"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                    placeholder="add a name"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                <li onClick={() => setName('Data')}>Data</li>
                <li onClick={() => setName('Reyes')}>Reyes</li>
                <li onClick={() => setName('Yolanda')}>Yolanda</li>
            </ul>
        </div>
    );
}

export default App;
