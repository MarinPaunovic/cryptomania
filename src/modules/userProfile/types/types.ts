export interface SavedAddressesForm {
  search: string;
  name: string;
  address: string;
}

export interface SavedAddressesFormData {
  name: string;
  address: string;
}

export interface SavedAddressActionsData {
  address: string;
  id: string;
}

export interface SavedAddressesData {
  name: string;
  address: string;
  id: string;
}

export interface SavedAddressesSearchDtata {
  search: string;
  list: Array<SavedAddressesData>;
}
