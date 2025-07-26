import React, { useEffect, useState } from "react";
import './App.css'; 
const clips = [
    {
      key: "Q",
      id: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      id: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      id: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      id: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      id: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      id: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      id: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      id: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      id: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  
  const DrumPad = ({ clip, playSound }) => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === clip.key) {
        playSound(clip.key, clip.id);
      }
    };
  
    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    }, []);
  
    return (
      <div
        className="drum-pad"
        id={clip.id}
        onClick={() => playSound(clip.key, clip.id)}
      >
        {clip.key}
        <audio className="clip" id={clip.key} src={clip.src}></audio>
      </div>
    );
  };
  
  const DrumMachine = () => {
    const [display, setDisplay] = useState("");
  
    const playSound = (key, id) => {
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        setDisplay(id);
      }
    };
  
    return (
      <div id="drum-machine">
        <div id="display">{display || "Press a key"}</div>
        <div className="pads-container">
          {clips.map((clip) => (
            <DrumPad key={clip.key} clip={clip} playSound={playSound} />
          ))}
        </div>
      </div>
    );
  };
  
  export default DrumMachine;