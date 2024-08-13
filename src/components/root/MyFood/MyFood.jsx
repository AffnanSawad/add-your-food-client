import { useLoaderData } from "react-router-dom";
import FoodCart from "./FoodCart";
import { useState } from "react";


const MyFood = () => {

  const loadedMyFoods = useLoaderData();

  const [remainingFoods , setRemainingFoods] = useState(loadedMyFoods);





    return (
        <div>
            <h1 className="text-2xl font-bold text-amber-800 mt-5 mb-5"> Total Added Foods:  {loadedMyFoods.length}  </h1>

        {/* mapping */}

      <div className="grid grid-cols-1 mt-4 mb-4 lg:grid-cols-3 gap-3">

      {
            loadedMyFoods.map(myFood => <FoodCart
            
            key={myFood.id}

            myFood={myFood}


            remainingFoods={remainingFoods}

            setRemainingFoods={setRemainingFoods}
            
            ></FoodCart>  )
        }


      </div>
           
        </div>
    );
};

export default MyFood;