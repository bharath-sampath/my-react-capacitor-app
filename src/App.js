import React from 'react';
import { Share } from '@capacitor/share';
import './App.css';

function App() {
  const shareInfo = async () => {
    try {
      await Share.share({ title: "Example", text: "Hello World", url: window.location.href });
      console.log('Shared successfully');
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Testing Capacitor and React!!!</h2>
        <button onClick={shareInfo}>Share</button>
      </header>
    </div>
  );
}

export default App;
