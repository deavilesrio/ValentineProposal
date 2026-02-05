import { useState, useRef, useEffect } from 'react'
import video from './assets/Video Project 1.mp4'
import video2 from './assets/Video Project 2.mp4'
import music from './assets/valentines.mp3'
import './App.css'
import {sendLove} from './Heart';
function App() {
  const [noButtonPosition, setNoButtonPosition] = useState<{ top: number; left: number } | null>(null);
  const [videoSource, setVideoSource] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    audioRef.current?.play();
  }, []);
  
  function handleYesClick() {
    sendLove();
    setNoButtonPosition(null);
    setVideoSource(true);
    setYesButtonSize(1); // Reset size
  }

  function moveNoButton() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    setNoButtonPosition({ top: randomY, left: randomX });
    setYesButtonSize(prev => prev + 0.2); // Increase size by 20%
  }
  
  return (
    <>
    <div className="App">
      <div className="hero">
        <video
          src={videoSource ? video2 : video}
          autoPlay
          loop
          muted
          playsInline
        />
        <audio ref={audioRef} src={music} loop />
        <h1>{videoSource ? "Yay Love u ❤️" : "Would you be my Valentine?"}</h1>
         <div className="card">
            {!videoSource && (
              <>
                <button 
                onClick={handleYesClick}
                style={{
                  transform: `scale(${yesButtonSize})`,
                  animation: yesButtonSize > 1 ? 'pulse 0.5s ease' : 'none',
                  transition: 'transform 0.3s ease'
                }}
              >
                Yes
              </button>
              <button 
                onClick={moveNoButton} 
                onMouseEnter={moveNoButton}
                className='NoButton'
                style={noButtonPosition ? {
                  position: 'fixed',
                  top: `${noButtonPosition.top}px`,
                  left: `${noButtonPosition.left}px`,
                } : undefined}
              >
                No
              </button>
            </>
            )}
          </div>
        </div>
    </div>
    </>
  )
}

export default App
