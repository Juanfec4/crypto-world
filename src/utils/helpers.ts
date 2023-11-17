export const addToWatchList = (coinId: string): void => {
  return localStorage.setItem(coinId, "crypto-world");
};

export const isOnWatchList = (coinId: string): boolean => {
  return localStorage.getItem(coinId) !== null;
};

export const removeFromWatchList = (coinId: string): void => {
  if (isOnWatchList(coinId)) {
    localStorage.removeItem(coinId);
  }
};

export const getAllWatchListed = (): string[] => {
  const localStorageKeys = Object.keys(localStorage);

  const cryptoWorldKeys = localStorageKeys.filter(
    (key) => localStorage.getItem(key) === "crypto-world"
  );
  return cryptoWorldKeys;
};
