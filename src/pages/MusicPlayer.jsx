import React, { useEffect, useState } from "react";
import DemoCont from "../components/DemoCont";
import useUiSound from "../hooks/useUiSound";
import orderSong from "../sounds/order.mp3";
import adSong from "../sounds/abstractDesign.mp3";
import lucidSong from "../sounds/lucid.mp3";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import orderCoverArt from "../images/orderCoverArt.jpg";
import adCoverArt from "../images/adCoverArt.jpg";
import lucidCoverArt from "../images/lucidCoverArt.jpg";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import useKeyPress from "../hooks/useKeyPress";
import { motion } from "framer-motion/dist/framer-motion";
import Codeblock from "../components/Codeblock";

const progressBarLength = 300; //px

const tracks = [
  {
    title: "Order",
    artist: "ComaStudio",
    imgSrc: orderCoverArt,
    soundSrc: orderSong,
  },
  {
    title: "Abstract Design",
    artist: "ComaStudio",
    imgSrc: adCoverArt,
    soundSrc: adSong,
  },
  {
    title: "Lucid",
    artist: "Nomyn",
    imgSrc: lucidCoverArt,
    soundSrc: lucidSong,
  },
];

const MusicPlayer = () => {
  const [currTrack, setCurrTrack] = useState(0);
  const { play, stop, sound, pause } = useUiSound(tracks[currTrack].soundSrc, {
    volume: 0.3,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [pos, setPos] = useState(0);

  // regularly update the progress bar
  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        if (sound?.seek() >= sound?.duration() - 0.5) {
          sound?.seek(0);
        } else setPos(sound?.seek());
      }, 1);
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, sound]);

  // seek a position on thre track based on click
  const seek = (newVal) => {
    sound?.seek((newVal / 100) * sound?.duration());
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const [isNextTrack, setIsNextTrack] = React.useState(true);
  const changeTrack = (diff) => {
    // no more tracks to go to
    if (currTrack + diff < 0 || currTrack + diff >= tracks.length) {
      // restart the current track
      sound?.seek(0);
      return;
    }
    setCurrTrack(currTrack + diff);
    // determine if the image should animate from left or right
    if (diff > 0) setIsNextTrack(true);
    else setIsNextTrack(false);
  };

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [play, pause, isPlaying]);

  // keyboard shortcuts
  const spacebarPress = useKeyPress(" ");
  const rightArrPress = useKeyPress("ArrowRight");
  const leftArrPress = useKeyPress("ArrowLeft");
  useEffect(() => {
    if (spacebarPress) setIsPlaying(!isPlaying);
    if (rightArrPress) seek(pos + 5);
    if (leftArrPress) seek(pos - 5);
  }, [spacebarPress, rightArrPress, leftArrPress, pause]);

  // stop sound when leaving the page
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return (
    <>
      <DemoCont>
        {/* <ReactHowler src={orderSong} playing={isPlaying} ref={player} /> */}
        <PlayerWrapper>
          <div style={{ position: "relative" }}>
            <CoverArt
              src={tracks[currTrack].imgSrc}
              initial={{ opacity: 0, x: `${isNextTrack ? -150 : 150}` }}
              animate={{ opacity: 1, x: 0 }}
              key={tracks[currTrack].imgSrc}
            />
            <GlowingCoverArt src={tracks[currTrack].imgSrc} />
          </div>
          <SongTitle>{tracks[currTrack].title}</SongTitle>
          <SongArtist>{tracks[currTrack].artist}</SongArtist>

          <ProgressSlider value={(pos / sound?.duration()) * 100} seek={seek} />
          <TrackControls>
            <TrackControlBtn onClick={() => changeTrack(-1)}>
              <IoPlaySkipBack color="white" />
            </TrackControlBtn>
            <PlayBtn>
              {isPlaying ? (
                <BsPauseCircleFill
                  onClick={() => {
                    setIsPlaying(false);
                  }}
                  size="2em"
                  color="white"
                />
              ) : (
                <BsPlayCircleFill
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                  size="2em"
                  color="white"
                />
              )}
            </PlayBtn>
            <TrackControlBtn onClick={() => changeTrack(1)}>
              <IoPlaySkipForward color="white" />
            </TrackControlBtn>
          </TrackControls>
        </PlayerWrapper>
      </DemoCont>
      <Codeblock
        codeFiles={[{ code: code, name: "MusicPlayer", lang: "jsx" }]}
      />
    </>
  );
};

export default MusicPlayer;

export const PlayBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: ${(props) => `${props.progress}%`};
  height: 10px;
  border-radius: 10px;
  background-color: deeppink;
`;

const ProgressBg = styled(ProgressBar)`
  position: absolute;
  background-color: #080a0c;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: ${progressBarLength}px;
`;

const CoverArt = styled(motion.img)`
  width: 300px;
  height: 300px;
`;

const GlowingCoverArt = styled(CoverArt)`
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(40px);
  z-index: -1;
`;

const SongTitle = styled.h2`
  font-size: 1.6rem;
  line-height: 0.5;
  margin-bottom: 0px;
  margin-top: 10px;
`;

const SongArtist = styled.h3`
  font-size: 1.1rem;
  color: grey;
  font-weight: 500;
  margin-top: 0px;
`;

const TrackControls = styled.div`
  display: flex;
  gap: 10px;
`;

const TrackControlBtn = styled.button`
  background: none;
  border: none;
`;

const ProgressSlider = ({ value, seek }) => {
  return (
    <StyledSlider
      value={[value]}
      onValueChange={([newVal]) => seek(newVal)}
      max={100}
      step={1}
      aria-label="Volume"
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
};

const StyledSlider = styled(SliderPrimitive.Root)`
  height: 15px;
  width: 300px;
  position: relative;
  display: flex;
  align-items: center;
`;
const StyledTrack = styled(SliderPrimitive.Track)`
  height: 6px;
  background-color: #080a0c;
  flex-grow: 1;
  position: relative;
  border-radius: 10px;
`;
const StyledRange = styled(SliderPrimitive.Range)`
  position: absolute;
  height: 100%;
  background-color: deeppink;
  border-radius: 10px;
`;
const StyledThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  width: 14px;
  height: 14px;
  background-color: #181819;
  border-radius: 50%;
  display: block;
  border: 4px solid deeppink;
  /* &:focus {
    box-shadow: 0 0 0 4px #f861b166;
  } */
`;

const code = `const tracks = [
  {
    title: "Order",
    artist: "ComaStudio",
    imgSrc: orderCoverArt,
    soundSrc: orderSong,
  },
  {
    title: "Abstract Design",
    artist: "ComaStudio",
    imgSrc: adCoverArt,
    soundSrc: adSong,
  },
  {
    title: "Lucid",
    artist: "Nomyn",
    imgSrc: lucidCoverArt,
    soundSrc: lucidSong,
  },
];

const MusicPlayer = () => {
  const [currTrack, setCurrTrack] = useState(0);
  const { play, stop, sound, pause } = useSound(
    tracks[currTrack].soundSrc);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pos, setPos] = useState(0);

  // regularly update the progress bar
  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        if (sound?.seek() >= sound?.duration() - 0.5) {
          sound?.seek(0);
        } else setPos(sound?.seek());
      }, 1);
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, sound]);

  // seek a position on thre track based on click
  const seek = (newVal) => {
    sound?.seek((newVal / 100) * sound?.duration());
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const changeTrack = (diff) => {
    // no more tracks to go to
    if (currTrack + diff < 0 || currTrack + diff >= tracks.length) {
      // restart the current track
      sound?.seek(0);
      return;
    }
    setCurrTrack(currTrack + diff);
  };

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [play, pause, isPlaying]);

  // stop sound when leaving the page
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return (
    <PlayerWrapper>
      <CoverArt src={tracks[currTrack].imgSrc} />
      <SongTitle>{tracks[currTrack].title}</SongTitle>
      <SongArtist>{tracks[currTrack].artist}</SongArtist>
      <ProgressSlider 
        value={(pos / sound?.duration()) * 100} 
        seek={seek} />
      <TrackControls>
        <PrevTrackBtn onClick={() => changeTrack(-1)}/>
        <PlayBtn>
          {isPlaying ? (
            <BsPauseCircleFill onClick={() => {setIsPlaying(false);}}/>
          ) : (
            <BsPlayCircleFill onClick={() => {setIsPlaying(true);}}/>
          )}
        </PlayBtn>
        <NextTrackBtn onClick={() => changeTrack(1)}/>
      </TrackControls>
    </PlayerWrapper>
  );
};
`;
