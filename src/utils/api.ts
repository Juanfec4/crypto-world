import axios, { AxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  include_24hr_change?: boolean;
  price_change_percentage?: string;
  vs_currencies?: string;
  vs_currency?: string;
  ids?: string;
  locale?: string;
}

export const fetchTrendingCoins = (params: CustomAxiosRequestConfig) => {
  const requestUrl = `${import.meta.env.VITE_API_URL}/coins/markets`;
  return axios.get(requestUrl, { params });
};
