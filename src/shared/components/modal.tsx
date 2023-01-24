import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'modules/redux/rootReducer';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { useOutsideClick } from 'shared/hooks';
import { ModalWrapper } from 'shared/types';

export const Modal: React.FC<ModalWrapper> = ({
  children,
  isOpen,
  buttonNegative,
  buttonPositive,
  onClose,
  onConfirm,
}) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className={`modal-overlay ${theme}`}>
      <div className={`modal-wrapper ${theme}`} ref={ref}>
        <div className={`modal-content fc`}>
          <button className={`modal-close f ${theme}`} onClick={onClose}>
            <FontAwesomeIcon icon={faX} />
          </button>
          {children}
          <div className="modal-actions fr">
            <button onClick={onClose} className={`no ${theme}`}>
              {buttonNegative}
            </button>
            <button onClick={onConfirm} className="yes">
              {buttonPositive}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
