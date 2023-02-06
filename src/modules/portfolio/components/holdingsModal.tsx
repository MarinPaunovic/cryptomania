import { useForm } from 'react-hook-form';
import { Modal } from 'shared/components/modal';
import { useScrollToggle } from 'shared/hooks/useScrollToggle';
import { useState } from 'react';
import { BuyHoldings } from './buyHoldings';
import { useIsZero, useTags } from '../hooks';
import { useActionHandler } from '../hooks/useActionHandler';
import { SellHoldings } from './sellHoldings';
import { HoldingsProps } from '../types';
import { ModalProps } from 'shared/types';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';

interface HoldingsModalProps {
  what: string;
  price: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HoldingsModal: React.FC<HoldingsModalProps> = ({ isOpen, setIsOpen, what, price }) => {
  const [isBuy, setIsBuy] = useState(true);
  const { onClose, onConfirm, setAmount } = useActionHandler(isBuy);
  const { theme } = useSelector((state: RootState) => state.theme);
  const tag = useTags(what);
  const { isZero } = useIsZero({ what, tag });
  useScrollToggle(isOpen, 'portfolio');
  const form = useForm();
  const { handleSubmit } = form;

  const modalProps: ModalProps = {
    isOpen,
    onClose: () => onClose({ setIsOpen }),
    onConfirm: () => onConfirm({ setIsOpen, what, price }),
    buttonNegative: 'Cancel',
  };

  const holdingsProps: HoldingsProps = {
    tag: tag ? tag : '',
    name: what,
    price: price,
    setAmount: setAmount,
    handleSubmit: handleSubmit,
    onConfirm: () => onConfirm({ setIsOpen, what, price }),
  };

  if (!isOpen) return null;

  return (
    <Modal {...modalProps} buttonPositive={isBuy ? 'Add' : 'Sell'}>
      <>
        <div className="holdings__modal main-align fr asc">
          <button
            onClick={() => setIsBuy(true)}
            className={
              isBuy
                ? `holdings__modal-button holdings__modal-button--active theme ${theme}`
                : `holdings__modal-button ${theme}`
            }
          >
            Buy
          </button>
          <button
            onClick={() => setIsBuy(false)}
            disabled={isZero}
            className={
              !isBuy
                ? `holdings__modal-button holdings__modal-button--active ${theme}`
                : `holdings__modal-button ${theme}`
            }
          >
            Sell
          </button>
        </div>
        {isBuy ? <BuyHoldings {...holdingsProps} /> : <SellHoldings {...holdingsProps} />}
      </>
    </Modal>
  );
};
