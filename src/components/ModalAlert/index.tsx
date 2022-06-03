import Modal from 'react-modal';
import styles from "./ModalAlert.module.scss";
import button from "../../styles/components/Button.module.scss";

Modal.setAppElement('#__next');

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  modalText: string;
}

export default function ModalAlert({ isOpen, onRequestClose, modalText }: Props) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.reactModalOverlay}
      className={styles.reactModalContent}
    >
      <p className={styles.reactModalText}>{modalText}</p>
      <button onClick={onRequestClose} className={button.buttonContainer} type='submit'>Fechar</button>
    </Modal>
  );
}