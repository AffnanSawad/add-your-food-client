import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateFood = () => {

    const loadedUpdateFoods = useLoaderData();

    const {_id,name,price,photo,quantity} = loadedUpdateFoods;

   
   
    const handleUpdateFood = e => {

        e.preventDefault();
    
        const name = e.target.name.value ;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value ;
        const photo = e.target.url.value;
       
    
        const newUpdateFood = {name,quantity,price,photo};
    
        console.log(newUpdateFood);
    
        // send to server
    
        fetch(`http://localhost:5000/food/${_id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUpdateFood),
    
    
    
        })
    
        .then(res=>res.json())
    
        .then(data=>{
            console.log(data);
    
            if(data.modifiedCount > 0 ){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to update',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  
            }
        } )
    }
   
   
   
   
    return (
     
         
     
     <div>
        <h1 className="text-4xl text-amber-800 font-extrabold mt-20 ml-10">Update Food</h1>
    
        <form onSubmit={handleUpdateFood} className="card-body w-1/2 lg:ml-80">
    <div className="form-control ">
      <label className="label">
        <span className="label-text font-bold">Food Name</span>
      </label>
      <input type="text" name="name"  defaultValue={name} placeholder="Food name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Quantity</span>
      </label>
      <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" required />
      
    </div>
   
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Price</span>
      </label>
      <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
      </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">Photo URL</span>
      </label>
      <input type="photo" name="url" defaultValue={photo} placeholder="photoURL" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
     <input type="submit" value='Update My Food' className="btn btn-accent" />
    </div>
  </form>


    </div>



    );
};

export default UpdateFood;