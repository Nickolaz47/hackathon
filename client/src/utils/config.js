export const usersUrl = "http://localhost:8080/api/users";
export const uploads = "http://localhost:8080/uploads/users";

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  if (image) {
    config = {
      method: method,
      data: data,
      headers: {},
    };
  } else if (method === "delete" || data === null) {
    config = {
      method: method,
      headers: {},
    };
  } else {
    config = {
      method: method,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
