// Hooks
import { useState, useEffect, useContext } from "react";
// Contexts
import { UserContext } from "../contexts/UserContext";
import { requestConfig, usersUrl } from "../utils/config";
import axios from "axios";

export const useUserCrud = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState(null);
  const { user } = useContext(UserContext);

  //   Avoiding memory leak
  const [cancelled, setCancelled] = useState(false);
  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const getCurrentUser = async (data) => {
    checkIfIsCancelled();
    const config = requestConfig("get", data, data.token);

    try {
      const res = await axios(`${usersUrl}/profile`, config);
      const currentUser = res.data;
      return currentUser;
    } catch (err) {
      const response = await err.response;
      const errorData = await response.data;
      const firstError = await errorData.errors[0];
      console.log(firstError);
    }
  };

  const updateUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    const config = requestConfig("put", data, user.token, true);

    try {
      await axios(usersUrl, config);
      setLoading(false);
      setError(null);
      setMessage("Usuário atualizado!");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (err) {
      const response = await err.response;
      const errorData = await response.data;
      const firstError = await errorData.errors[0];

      setLoading(false);
      setError(firstError);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { getCurrentUser, updateUser, loading, error, message };
};
