import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const FoodCart = ({myFood,remainingFoods,setRemainingFoods}) => {

   
    const {_id,name,price,photo,quantity} = myFood;

   

    // handleDelete
    const handleDelete = _id => {

      console.log('deleted', _id);


      // Sweetalert2

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

        
          // fetching delete
          fetch(`http://localhost:5000/food/${_id}`,{

            method:'DELETE'
          })

          .then(res=>res.json())

          .then(data=> {

            console.log(data);

            if(data.deletedCount > 0 ){

          
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"          
          

            })

           // remaining foods After Delete
           const remaining = remainingFoods.fitler( food => food._id !== _id )

           setRemainingFoods(remaining);

         

        



            }
          })
        


          
        }
      });

    }


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


      {/* update */}
     <Link to={`/updatefood/${_id}`}>
     
     <button className="btn btn-accent">Update</button>
     
     </Link>
      
      
      
      {/* delete */}
      <button
      
      onClick={ ()=>  handleDelete(_id)  }
      
      className="btn btn-error">Delete</button>




    </div>
  </div>
</div>

 

        </div>
    );
};

export default FoodCart;