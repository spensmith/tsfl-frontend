import React from 'react';
import nintendo from './nintendo.png';
import FileSelector from "./FileSelector";


function App() {
    return (
        <div className="App">
            <img src={nintendo} height={500} alt={'nintendo'}/>
            <h1> Name banana 5</h1>
            <FileSelector />
        </div>
    );
}

export default App;