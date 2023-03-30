import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

export default useFetch;
