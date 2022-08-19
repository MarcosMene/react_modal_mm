import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <MdCheckCircleOutline />
              <p>Employee created!</p>
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
  background: rgba(27, 63, 23, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 50%;
  height: 35%;
  max-width: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.6);
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 20;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding: 10px;

  svg {
    color: green;
    font-size: 4rem;
  }

  p {
    border-top: 1px solid;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    padding-top: 10px;

    @media (max-width: 780px) {
      font-size: 2rem;
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
