import React, { useRef, useState } from 'react';
import './index.css';
import Card from './Card';
import Round from './Round';
import music from '../../Assets/sound/home.mp3';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";





const Home = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCardUserClick = () => {
    console.log('Clicked!');
  };

  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        console.log('played');
        setIsMusicPlaying(true);
      } else {
        audioRef.current.pause();
        console.log('paused');
        setIsMusicPlaying(false);
      }
    }
    // const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    // audioElement.play();
    // setIsMusicPlaying(true);
  };

  // const handleMuteMusic = () => {
  //   if (audioRef.current) {
  //     audioRef.current.muted = !audioRef.current.muted;
  //     setIsMutePlaying(audioRef.current.muted);
  //     console.log(audioRef.current.muted ? 'muted' : 'unmuted');
  //   }
  // };

  return (
    <div className='my-home-container' >

      <audio ref={audioRef} loop autoPlay>
        <source src={music} type='audio/mp3' />
      </audio>
      <button onClick={handlePlayMusic}>
        {isMusicPlaying ? <FaVolumeUp /> : <FaVolumeMute />}      </button>{''}

      <div className='my-logo-class'>
        <img
          className='my-logo'
          src='https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png'
          alt=''
        />
      </div>
      <div className='my-info-score'>
        <div className='my-user'>
          <div className='my-name my-user-name'>
            <h3>User</h3>
          </div>
          <div className='my-score my-user-score'>
            <h4>100</h4>
          </div>
        </div>
        <div className='my-computer'>
          <div className='my-name my-computer-name'>
            <h3>Computer</h3>
          </div>
          <div className='my-score my-computer-score'>
            <h4>100</h4>
          </div>
        </div>
      </div>
      <Round title='Round' count='8' />
      <div className='my-card-container'>
        <Card type='user' onClick={handleCardUserClick} clickable={true} />
        <Card type='computer' clickable={false} />
      </div>
    </div>
  );
};

export default Home;