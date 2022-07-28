import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  const url = "http://localhost:8080/users";

  // Trying to get user from localstorage
  const user = JSON.parse(localStorage.getItem("user"));

  //   Avoiding memory leak
  const [cancelled, setCancelled] = useState(false);
  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const register = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const registeredUser = await axios.post(`${url}/register`, data);
      return registeredUser;
    } catch (err) {
      setError(err[0]);
    }
  };

  const login = () => {};
  const logout = () => {};

  return {register, login, logout, error, loading}
};
