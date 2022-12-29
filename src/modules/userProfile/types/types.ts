export interface SavedAdress {
  name?: string;
  address?: string;
}

export interface SnapData extends SavedAdress {
  id: string;
}

export interface SavedAddressProps {
  isForm?: boolean;
  setIsForm?: React.Dispatch<React.SetStateAction<boolean>>;
}
