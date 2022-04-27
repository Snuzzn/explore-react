import React from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import { IconButton } from "./styles/Styles";
import unmuteSfx from "../sounds/intuition.mp3";
import useSound from "use-sound";
import { ThemeContext } from "../ThemeProvider";

const MuteButton = () => {
  const { isSoundEnabled, setIsSoundEnabled } = React.useContext(ThemeContext);
  const [play, { stop }] = useSound(unmuteSfx);
  return (
    <IconButton
      onClick={() => {
        if (!isSoundEnabled) play();
        setIsSoundEnabled(!isSoundEnabled);
      }}
    >
      {isSoundEnabled ? <GoUnmute size="0.9em" /> : <GoMute size="0.9em" />}
    </IconButton>
  );
};

export default MuteButton;
