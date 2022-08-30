import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";

const Modal = ({
  showModal,
  setShowModal,
  content,
  backgroundColor,
  colorModal,
  contentcolor,
  iconModal,
  shadowModal,
  borderModal,
  fontSizeModal,
}) => {
  return (
    <>
      {showModal ? (
        <Background style={{ background: backgroundColor }}>
          <ModalWrapper
            showModal={showModal}
            style={{
              background: colorModal,
              boxShadow: shadowModal,
              borderRadius: borderModal,
            }}
          >
            <ModalContent>
              {iconModal === "success" && (
                <MdCheckCircleOutline style={{ color: "green" }} />
              )}
              {iconModal === "error" && (
                <RiCloseCircleLine style={{ color: "red" }} />
              )}

              <p style={{ color: contentcolor, fontSize: fontSizeModal }}>
                {content}
              </p>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  /* background: rgba(189, 189, 189, 0.7); */
  position: fixed;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 20px;
  box-sizing: border-box;
`;

const ModalWrapper = styled.div`
  min-width: 250px;
  max-width: 900px;
  /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.6); */
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 20;
  /* border-radius: 10px; */
  padding: 10px 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding: 10px 0;

  svg {
    margin: 20px;
    color: green;
    font-size: 4rem;
    @media (max-width: 680px) {
      font-size: 3rem;
    }
    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  p {
    margin: 0;
    padding: 0;
    border-top: 1px solid;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    padding-top: 10px;
    color: #000;

    @media (max-width: 680px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 30;

  :hover {
    color: red;
  }
`;

export default Modal;
