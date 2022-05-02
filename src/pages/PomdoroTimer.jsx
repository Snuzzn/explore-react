import React, { useEffect, useRef, useState } from "react";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";
import useUiSound from "../hooks/useUiSound";
import { PlayBtn } from "./MusicPlayer";
import startSfx from "../sounds/confirmation_001.ogg";
import pauseSfx from "../sounds/bong_001.ogg";
import endSfx from "../sounds/confirmation_002.ogg";
import useKeyPress from "../hooks/useKeyPress";
import Codeblock from "../components/Codeblock";

const CountdownTimer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [totalTime, setTotalTime] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const hours = Math.floor(timeRemaining / 3600);
  const formattedTime = new Date(timeRemaining * 1000)
    .toISOString()
    .substring(hours > 0 ? 11 : 14, 19);

  const { play: playStart } = useUiSound(startSfx);
  const { play: playPause } = useUiSound(pauseSfx);
  const { play: playEnd } = useUiSound(endSfx);

  const timer = useRef();
  useEffect(() => {
    if (isPlaying) {
      timer.current = setInterval(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
      return () => {
        clearInterval(timer.current);
      };
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isEditing) return;
    if (isPlaying && timeRemaining === totalTime) playStart();
    else if (!isPlaying && timeRemaining > 0 && timeRemaining !== totalTime)
      playPause();
    else if (timeRemaining === 0) {
      setIsPlaying(false);
      setTimeout(() => setTimeRemaining(totalTime), 1000);
      playEnd();
    }
  }, [
    isPlaying,
    playStart,
    playEnd,
    playPause,
    timeRemaining,
    totalTime,
    isEditing,
  ]);

  useEffect(() => {
    setTimeRemaining(totalTime);
  }, [totalTime]);

  const spacebarPress = useKeyPress(" ");
  useEffect(() => {
    if (spacebarPress) {
      setIsPlaying(!isPlaying);
      setIsEditing(false);
    }
  }, [spacebarPress]);

  return (
    <>
      <DemoCont>
        <div style={{ position: "relative" }}>
          <CircleCont viewBox="2 -2 28 36" xmlns="http://www.w3.org/2000/svg">
            <CircleBg r="16" cx="16" cy="16"></CircleBg>
            <CircleProgress
              r="16"
              cx="16"
              cy="16"
              style={{
                "stroke-dashoffset": `${
                  100 - (timeRemaining / totalTime) * 100
                }`,
              }}
            ></CircleProgress>
            <GlowingProgress
              r="16"
              cx="16"
              cy="16"
              style={{
                "stroke-dashoffset": `${
                  100 - (timeRemaining / totalTime) * 100
                }`,
              }}
            ></GlowingProgress>
          </CircleCont>
        </div>
        <CenterCont>
          {!isEditing ? (
            <Time
              onClick={() => {
                setIsEditing(true);
                setIsPlaying(false);
              }}
            >
              {formattedTime}
            </Time>
          ) : (
            <EditTimeForm
              onSubmit={(e) => {
                e.preventDefault();
                setIsPlaying(true);
                setIsEditing(false);
              }}
            >
              <EditTimeInput
                type="number"
                onChange={(e) => {
                  let val = e.target.value;
                  if (val === "") setTotalTime("");
                  if (isNaN(val)) return;
                  setTotalTime(val * 60);
                }}
              />
              minutes
            </EditTimeForm>
          )}

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
                  setIsEditing(false);
                }}
                size="2em"
                color="white"
              />
            )}
          </PlayBtn>
        </CenterCont>
      </DemoCont>
      <Codeblock
        codeFiles={[{ code: code, name: "CountdownTimer", lang: "jsx" }]}
      />
    </>
  );
};

export default CountdownTimer;

const EditTimeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const EditTimeInput = styled.input`
  border: none;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  &:focus {
    border: 2px solid deeppink;
  }
`;

const CircleCont = styled.svg`
  width: 380px;
  height: 380px;
  transform: rotate(-90deg);
  padding: 10px;
  box-shadow: rgba(50, 48, 48, 0.35) 0px 5px 15px;
  border-radius: 50%;
`;

const CircleBg = styled.circle`
  fill: none;
  stroke: #1e232c;
  stroke-width: 1.5px;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke-linecap: round;
  stroke: deeppink;
  stroke-dasharray: 100 100;
  stroke-linecap: round;
  stroke-width: 1.5px;
  transition: stroke-dashoffset 1s ease-out;
  will-change: transform;
`;

const GlowingProgress = styled(CircleProgress)`
  position: absolute;
  filter: blur(1px);
`;

const Time = styled.h2`
  line-height: 0;
  font-size: 3.4rem;
  cursor: pointer;
`;

const CenterCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const code = `const Timer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [totalTime, setTotalTime] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const hours = Math.floor(timeRemaining / 3600);
  const formattedTime = new Date(timeRemaining * 1000)
    .toISOString()
    .substring(hours > 0 ? 11 : 14, 19);

  const timer = useRef();
  useEffect(() => {
    if (isPlaying) {
      timer.current = setInterval(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
      return () => {
        clearInterval(timer.current);
      };
    }
  }, [isPlaying]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsPlaying(false);
      setTimeout(() => setTimeRemaining(totalTime), 1000);
    }
  }, [timeRemaining]);

  useEffect(() => {
    setTimeRemaining(totalTime);
  }, [totalTime]);

  return (
    <>
      <CircleProgress progress={timeRemaining/totalTime * 100}/>
      {!isEditing ? (
        <Time
          onClick={() => {
            setIsEditing(true);
            setIsPlaying(false);
          }}
        >
          {formattedTime}
        </Time>
      ) : (
        <EditTimeForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsPlaying(true);
            setIsEditing(false);
          }}
        >
          <EditTimeInput
            type="number"
            onChange={(e) => {
              let val = e.target.value;
              if (val === "") setTotalTime("");
              if (isNaN(val)) return;
              setTotalTime(val * 60);
            }}
          />
          minutes
        </EditTimeForm>
      )}
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
              setIsEditing(false);
            }}
            size="2em"
            color="white"
          />
        )}
      </PlayBtn>
    </>
  );
}; 
`;
