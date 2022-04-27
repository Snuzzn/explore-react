import React, { useEffect, useRef } from "react";
import DemoCont from "../components/DemoCont";
import useUiSound from "../hooks/useUiSound";
import orderSong from "../sounds/order.mp3";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import ReactHowler from "react-howler";

const progressBarLength = 400;

const MusicPlayer = () => {
  // const { play, stop, sound, pause } = useUiSound(orderSong, 1);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const player = useRef();
  const [pos, setPos] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setPos(player?.current?.seek()), 1);
    if (!isPlaying) return () => clearInterval(intervalId);
  }, [isPlaying]);

  const seek = (e) => {
    var bar = e.target.getBoundingClientRect();
    var x = e.clientX - bar.left;
    player.current.seek(
      parseInt((x / progressBarLength) * player?.current?.duration())
    );
  };

  return (
    <DemoCont>
      <ReactHowler src={orderSong} playing={isPlaying} ref={player} />
      <PlayerWrapper>
        <div
          style={{ position: "relative", width: "100%", cursor: "pointer" }}
          onClick={seek}
        >
          <ProgressBg />
          <ProgressBar
            progress={
              player.current ? (pos / player?.current?.duration()) * 100 : 0
            }
          />
        </div>

        <PlayBtn>
          {isPlaying ? (
            <BsPauseCircleFill
              onClick={() => {
                setIsPlaying(false);
              }}
              size="2em"
            />
          ) : (
            <BsPlayCircleFill
              onClick={() => {
                setIsPlaying(true);
              }}
              size="2em"
            />
          )}
        </PlayBtn>
      </PlayerWrapper>
    </DemoCont>
  );
};

export default MusicPlayer;

const PlayBtn = styled.button`
  border: none;
  background: none;
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
