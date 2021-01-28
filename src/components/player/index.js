import React, { useState, useContext, createContext } from "react";
import ReactDom from "react-dom";
import { Container, Overlay, Close, Button, Inner } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Inner = function PlayerInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return showPlayer
    ? ReactDom.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <video id="netflix-player" controls>
            <source src="/videos/bunny.mp4" type="video/mp4" />
          </video>
          <Close />
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
};
