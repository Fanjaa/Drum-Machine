// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Main.css'
import DrumPad from '../Drumpad/Drumpad';
import { assets } from '../../assets/assets';

const audioClips = [
    { id: 'Q', src: `${assets.heater1}`, label: 'Heater 1' },
    { id: 'W', src: `${assets.heater2}`, label: 'Heater 2' },
    { id: 'E', src: `${assets.heater3}`, label: 'Heater 3' },
    { id: 'A', src: `${assets.heater4}`, label: 'Heater 4' },
    { id: 'S', src: `${assets.clap}`, label: 'Clap' },
    { id: 'D', src: `${assets.openHH}`, label: 'Open-HH' },
    { id: 'Z', src: `${assets.kickHat}`, label: 'Kick-n-Hat' },
    { id: 'X', src: `${assets.kick}`, label: 'Kick' },
    { id: 'C', src: `${assets.closedHH}`, label: 'Closed-HH' },
  ];

const Main = () => {
    const [display, setDisplay] = useState('');
    const [volume, setVolume] = useState(1);

    const playSound = (clipLabel) => {
      setDisplay(clipLabel);
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
      };    

  return (
    <div className="container">
        <div id="drum-machine">
            <div id="display">{display}</div>
            <div className="drum-pads">
                {audioClips.map((clip) => (
                    <DrumPad key={clip.id} clip={clip} playSound={playSound} volume={volume}/>
                ))}
            </div>
            <div id="volume-control" className='volume-control'>
                <label htmlFor="volume-range">Volume</label>
                <input
                    type="range"
                    id="volume-range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
                </div>
        </div>
    </div>
  )
}

export default Main
