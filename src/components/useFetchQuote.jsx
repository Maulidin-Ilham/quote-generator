/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";

function useFetchQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      getQuotes();
    }, 800);
  };

  const randomNum = (number) => {
    const randomNum = Math.floor(Math.random() * number);
    return randomNum;
  };

  const getQuotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      let number = response.data.length;
      const quote = response.data[randomNum(number)];
      setQuote(quote);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return { quote, handleClick, loading };
}

export default useFetchQuote;
