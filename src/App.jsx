import { useState } from 'react'

import './App.css';

function App() {
  const [color, setColor] = useState(''); // State to store the input color
  const [bgColor, setBgColor] = useState('#ffffff'); // Initial background color

  
  const handleColorChange = () => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Background Color Changer</h1>
        <input
          type="text"
          placeholder="Enter color (e.g., red, #ff0000)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', width: '200px' }}
        />
        <button onClick={handleColorChange} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;
