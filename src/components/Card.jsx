import React, { useState } from "react";
import styled from "styled-components";
import Progress from "./Progress";
import Modal from "react-awesome-modal";
import Tomate from "./Tomate";
import tomateGif from "../misc/img/tomatogif.gif";

function Card({ nombre, ciudad, id }) {
  const [modal, setModal] = useState(false);
  const [gif, setGif] = useState("");

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function lanzarTomate() {
    setGif(tomateGif + "?a=" + Math.random());
    setTimeout(() => {
      setGif(false);
    }, 1800);
  }

  return (
    <>
      <CardWrapper>
        <CardImage src="https://randomuser.me/api/portraits/men/36.jpg" />

        <CardContent>
          <CardTitle>{nombre}</CardTitle>
          <CardSubtitle>{ciudad} </CardSubtitle>
        </CardContent>

        <CardButton onClick={() => openModal()}>Votar</CardButton>

        <EmojiWrapper>
          <Emoji>
            <span role="img" aria-label="emoji">
              😞
            </span>
          </Emoji>
          <Emoji>
            <span role="img" aria-label="emoji">
              😁
            </span>
          </Emoji>
        </EmojiWrapper>
        <Progress scroll="49" />
        <Modal
          visible={modal}
          width="300"
          effect="fadeInUp"
          onClickAway={() => closeModal()}
        >
          <CardWrapperModal>
            <CardImage src="https://randomuser.me/api/portraits/men/36.jpg" />
            {gif ? (
              <TomateContainer>
                <Tomate gif={gif} />
              </TomateContainer>
            ) : null}

            <CardContent>
              <CardTitle>{nombre}</CardTitle>
              <CardSubtitle>{ciudad} </CardSubtitle>
              <ul>
                <li>
                  Gestion 1
                  <button onClick={() => lanzarTomate()}>tomate</button>{" "}
                  <button>aplauso</button>
                </li>
                <li>
                  Gestion 1<button>tomate</button> <button>aplauso</button>
                </li>
                <li>
                  Gestion 1<button>tomate</button> <button>aplauso</button>
                </li>
              </ul>
            </CardContent>
          </CardWrapperModal>
        </Modal>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  width: 160px;
  border: 1px solid lightgray;
  border-radius: 8px;
  display: inline-block;
  margin: 5px;
  overflow: hidden;
  @media (max-width: 480px) {
    display: block;
    width: 80%;
    margin: 10px auto;
  }
`;

const CardWrapperModal = styled.div`
  width: 160px;
  border: 1px solid lightgray;
  border-radius: 8px;
  display: block;
  margin: 20px auto;
  @media (max-width: 480px) {
    display: block;
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 0 auto;
  width: 120px;
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: block;
  margin-top: 15px;
  border-radius: 8px;
`;

const CardTitle = styled.p`
  display: inline-block;
  width: 120px;
  font-weight: 900;
  font-size: 14px;
  margin: 0 auto;
  margin-top: 10px;
  white-space: nowrap;
  overflow: scroll;
`;

const CardSubtitle = styled.p`
  display: inline-block;
  width: 120px;
  font-weight: 300;
  font-size: 12px;
  margin-top: -15px;
`;

const EmojiWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Emoji = styled.span`
  margin-top: 10px;
`;

const CardButton = styled.button`
  border: 1px solid lightgray;
  width: 90%;
  border-radius: 3px;
  margin: 0 auto;
  display: block;
  &:hover {
    background: gray;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const TomateContainer = styled.div`
  width: 120px;
  margin: 0 auto;
  margin-top: -165px;
`;

export default Card;
