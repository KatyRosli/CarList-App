import { useState, useEffect } from "react";
import Car from "../src / components/car";

const Carlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [carlistData, setCarlistData] = useState({ carlist: [] });

  useEffect(() => {
    async function fetchCarlistData() {
      const response = fetch("http://localhost:3000/api/cars")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCarlistData(data);
          setIsLoading(false);
        });
    }
    fetchCarlistData();
  }, []);
  if (isLoading) {
    return <h2> Loading...</h2>;
  }
  return <div>{carlistData.carlist.map((item, index) => { 
      return (
          <Car key={index} item={item}/>
      )
   })}</div>;
};
export default Carlist;
