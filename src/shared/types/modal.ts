export interface ModalProps {
  isOpen: boolean;
  buttonNegative?: string;
  buttonPositive?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export interface ModalWrapper extends ModalProps {
  children: JSX.Element;
}
