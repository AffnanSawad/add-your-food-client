

const FoodCart = ({myFood}) => {

   
    const {name,price,photo,quantity} = myFood;


    return (
        <div>
            
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {name} </h2>
    
   
    

   <div className="flex">
    
   <p className="font-bold">Price: ${price} </p>
   <p className="font-bold">Quantuty: {quantity} </p>


   </div>

   


    <div className="card-actions mt-4">


      
      <button className="btn btn-accent">Update</button>
      <button className="btn btn-error">Delete</button>




    </div>
  </div>
</div>

 

        </div>
    );
};

export default FoodCart;