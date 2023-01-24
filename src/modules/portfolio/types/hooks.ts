export interface useCoinRatioProps {
  amount: number;
  price: number;
}
export type UseTotalBalanceProps = useCoinRatioProps;

export interface UseIsZeroProps {
  what: string;
  tag: string;
}
