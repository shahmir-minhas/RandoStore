import axios from "./../Api/apiConfig";
import { useEffect, useState } from "react";

const useApiHook = (config = {}, enable = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeRequest = async (config) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios(config);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    enable && makeRequest(config);
  }, []);

  return { data, error, loading, makeRequest };
};

export default useApiHook;
