import React from "react";
import { styled } from "styled-components";

const StatusModal = ({ isOpen, children, closeModal }) => {
  // 외부 영역 클릭했을 때 모달창 닫힘
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <ModalOverlay
      style={{ display: isOpen ? "block" : "none" }}
      onClick={handleOverlayClick}
    >
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>
  );
};

export default StatusModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: absolute;
  box-shadow: 0 2px 4px rgba(109, 109, 109, 0.3);
  /* border: 1px #cacaca solid; */
  padding: 14px;
  border-radius: 5px;
  top: 10%;
  right: -50px;
  transform: translate(-50%, -50%);
  width: 200px;
  max-width: 100%;
  max-height: 90%;
  overflow-y: auto;
  background: white;
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;
