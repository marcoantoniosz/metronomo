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
};

export const fetchByQuery = async (query) => {
  const response = await fetch(`${ENDPOINT}/search?q=${query}`);
  const data = await response.json();
  return data;
};

export const createData = async (data) => {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataCreated = await response.json();
  return dataCreated;
};

export const deleteData = async (id) => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE',
  });
  return response;
}

export const updateData = async (id, data) => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataUpdated = await response.json();
  return dataUpdated;
}