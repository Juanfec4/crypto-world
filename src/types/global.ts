export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: number;
  roi: null; // Change this to the actual type if needed
  total_supply: number;
  total_volume: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}
