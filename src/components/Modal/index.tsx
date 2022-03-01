/* eslint-disable react/jsx-key */
import { ModalContainer, ModalOverlay, ModalWrapper } from "./styles";

export default function Modal({ children, open, closeModal }: any) {
  if (!open) return null;
  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalWrapper>
        <ModalContainer>{children}</ModalContainer>
      </ModalWrapper>
    </>
  );
}
