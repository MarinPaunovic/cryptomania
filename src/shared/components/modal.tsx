import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'modules/redux/rootReducer';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { useOutsideClick } from 'shared/hooks';

interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, onConfirm }) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className={`modal-overlay ${theme}`}>
      <div className={`modal-wrapper f ${theme}`} ref={ref}>
        <div className="modal-content fc">
          <button className="modal-close f">
            <FontAwesomeIcon icon={faX} />
          </button>
          {children}
          <div className="modal-actions fr">
            <button onClick={onClose} className="no">
              No
            </button>
            <button onClick={onConfirm} className="yes">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
};
