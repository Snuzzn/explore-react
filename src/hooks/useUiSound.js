import React, { useContext } from "react";
import useSound from "use-sound";
import { ThemeContext } from "../ThemeProvider";

const useUiSound = (soundFile, rate) => {
  const { isSoundEnabled } = useContext(ThemeContext);

  const [play, { stop }] = useSound(soundFile, {
    playbackRate: rate,
    soundEnabled: isSoundEnabled,
  });

  return {
    play,
    stop,
  };
};

export default useUiSound;
