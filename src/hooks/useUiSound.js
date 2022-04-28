import React, { useContext, useEffect } from "react";
import useSound from "use-sound";
import { ThemeContext } from "../ThemeProvider";

const useUiSound = (soundFile, rate) => {
  const { isSoundEnabled } = useContext(ThemeContext);

  const [play, { stop, sound, pause }] = useSound(soundFile, {
    playbackRate: rate,
    soundEnabled: isSoundEnabled,
  });

  return {
    play,
    stop,
    sound,
    pause,
  };
};

export default useUiSound;
