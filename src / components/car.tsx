import { useEffect, useState } from "react";

const Car =({key, item}: any) => {
    return (
        <div className="carCard">
            <p>{item.bodyType}</p>
            <p>{item.modelName}</p>
            <p>{item.modelType}</p>
            <img src={item.imageUrl}/>
        </div>
    )
};
export default Car;