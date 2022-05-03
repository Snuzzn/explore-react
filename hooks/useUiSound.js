import React, { useContext, useEffect } from "react";
import useSound from "use-sound";
import { ThemeContext } from "../context/ThemeProvider";

const useUiSound = (soundFile, options) => {
  const { isSoundEnabled } = useContext(ThemeContext) || {};

  const { rate, volume } = options || {};

  const [play, { stop, sound, pause }] = useSound(soundFile, {
    playbackRate: rate,
    soundEnabled: isSoundEnabled,
    volume: volume,
  });

  return {
    play,
    stop,
    sound,
    pause,
  };
};

export default useUiSound;
