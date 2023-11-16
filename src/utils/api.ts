import axios from "axios";

interface RequestParams {
  include_24hr_change?: boolean;
  price_change_percentage?: string;
  vs_currencies?: string;
  vs_currency?: string;
  ids?: string;
  locale?: string;
  page?: number;
  per_page?: number;
}

export const fetchTrendingCoins = (params: RequestParams) => {
  const requestUrl = `${import.meta.env.VITE_API_URL}/coins/markets`;
  return axios.get(requestUrl, { params });
};

export const fetchPageCoins = (params: RequestParams) => {
  const requestUrl = `${import.meta.env.VITE_API_URL}/coins/markets`;
  return axios.get(requestUrl, { params });
};
