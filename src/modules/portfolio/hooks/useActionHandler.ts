import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from 'modules/db/db';
import { RootState } from 'modules/redux/rootReducer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Holdings } from './useHoldings';

interface ActionHandler {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  what?: string;
  price?: number;
}

interface FunctionProps {
  holdings: Holdings[];
  amount: number;
  index: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useActionHandler = (isBuy?: boolean) => {
  const [amount, setAmount] = useState<number>();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { holdings } = useSelector((state: RootState) => state.holdings);
  const dispatch = useDispatch();

  const subtract = ({ holdings, amount, index, setIsOpen }: FunctionProps) => {
    updateDoc(doc(db, 'holdings', holdings[index].id), {
      amount: holdings[index].amount - amount,
    }).then(() => {
      setIsOpen(false);
      setAmount(0);
    });
  };

  const sum = ({ holdings, amount, index, setIsOpen }: FunctionProps) => {
    updateDoc(doc(db, 'holdings', holdings[index].id), {
      amount: holdings[index].amount + amount,
    }).then(() => {
      setIsOpen(false);
      setAmount(0);
    });
  };

  const newHolding = async ({ what, price, setIsOpen }: ActionHandler) => {
    await addDoc(collection(db, 'holdings'), {
      uid: auth.uid,
      amount,
      what,
      price,
    }).then(() => {
      setIsOpen(false);
      setAmount(0);
    });
  };

  const onConfirm = async ({ setIsOpen, what, price }: ActionHandler) => {
    if (!amount) return;

    if (holdings.some((holding) => holding.what === what)) {
      const index = holdings.findIndex((holding) => holding.what === what);
      if (!isBuy) {
        if (holdings[index].amount - amount === 0) {
          deleteDoc(doc(db, 'holdings', holdings[index].id));
          setIsOpen(false);
          setAmount(0);
          return;
        }
        subtract({ holdings, amount, index, setIsOpen });
        return;
      }

      sum({ holdings, amount, index, setIsOpen });
      return;
    }
    newHolding({ setIsOpen, what, price });
  };

  const onClose = ({ setIsOpen }: ActionHandler) => {
    setIsOpen(false);
  };

  return { onClose, onConfirm, setAmount };
};
