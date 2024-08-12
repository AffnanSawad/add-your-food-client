import Swal from 'sweetalert2'

const AddFood = () => {
   
   
    // submit

   

    const handleAddFood = e => {

        e.preventDefault();
    
        const name = e.target.name.value ;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value ;
        const photo = e.target.url.value;
       
    
        const newFood = {name,quantity,price,photo};
    
        console.log(newFood);
    
        // send to server
    
        fetch('http://localhost:5000/food',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newFood),
    
    
    
        })
    
        .then(res=>res.json())
    
        .then(data=>{
            console.log(data);
    
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to add',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  
            }
        } )
    }
   
    return (
        <div>
            <h1 className="text-4xl text-amber-800 font-extrabold mt-20 ml-10">Add Food</h1>
        
            <form onSubmit={handleAddFood} className="card-body w-1/2 lg:ml-80">
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold">Food Name</span>
          </label>
          <input type="text" name="name" placeholder="Food name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Quantity</span>
          </label>
          <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" required />
          
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Price</span>
          </label>
          <input type="text" name="price" placeholder="price" className="input input-bordered" required />
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input type="photo" name="url" placeholder="photoURL" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
         <input type="submit" value='Add My Food' className="btn btn-accent" />
        </div>
      </form>


        </div>
    );
};  
   
 

export default AddFood;