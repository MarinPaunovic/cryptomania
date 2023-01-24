import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

export interface HoldingsProps {
  price: number;
  tag: string;
  name: string;
  setAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onConfirm: () => Promise<void>;
}
