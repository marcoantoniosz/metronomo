const ENDPOINT = 'https://metronomo-backend.herokuapp.com/lps';

export const fetchAllData = async () => {
  const response = await fetch(`${ENDPOINT}`);
  const data = await response.json();
  return data;
};

export const fetchById = async (id) => {
  const response = await fetch(`${ENDPOINT}/${id}`);
  const data = await response.json();
  return data;
}