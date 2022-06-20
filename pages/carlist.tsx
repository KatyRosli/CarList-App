import { useState, useEffect } from "react";

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
          <h4> {item.id} {item.modelName} </h4>
      )
   })}</div>;
};
export default Carlist;
