import React, { useContext, useState } from 'react'
import { deleteItem } from '../../Service/itemService';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import './ItemList.css';

const ItemList = () => {
  const {itemsData,setItemsData}=useContext(AppContext);
  const [searchTerm,setSearchTerm]=useState("");

const filteredItems=itemsData.filter((item)=>{
  return item.name.toLowerCase().includes(searchTerm.toLowerCase());

})

const removeItem=async(itemid)=>{
  try{
    const response=await deleteItem(itemid);
    if(response.status===204){
      const updatedItems=itemsData.filter(item=>item.itemid!==itemid);
      setItemsData(updatedItems);
      toast.success("Item deleted");
    }else{
      toast.error("Unable to delete item");
    }

  }catch(err){
    console.error(err);
    toast.error("Unable to delete item")

  }
}

  return (
    <div className="category-list-container" style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input type="text"
           name='keyword'
            id='keyword'
             placeholder='Search by keyword'
             className='form-control'
             onChange={(e)=>{setSearchTerm(e.target.value)}}
             value={searchTerm}
             />
             <span className="input-group-text bg-warning">
              <i className="bi bi-search"></i>
             </span>
             

        </div>
      </div>
      <div className="row g-3 pe-2">
        {filteredItems.map((item,index)=>(
          <div className="col-12" key={index}>
            <div className="card p-3 bg-dark">
              <div className="d-flex align-items-center">
                <div style={{marginRight:'15px'}}>
                  <img src={item.imgurl} alt={item.name}  className="item-image" />
                </div>
                //second column
                <div className="flex-grow-1">
                  <h6 className="mb-1 text-white">{item.name}</h6>
                  <p className="mb-0 text-white">
                    Category:{item.categoryName}
                  </p>
                  <span className="mb-0 text-block badge rounded-pill text-bg-warning">
                    &#8377;{item.price}
                  </span>
                </div>
                //Third column
                <div>
                  <button className="btn btn-danger btn-sm" onClick={()=>{
                    console.log("Deleting itemId:", item.itemid);
                    removeItem(item.itemid)
                  }}>
                    <i className="bi bi-trash"></i>

                  </button>
                </div>
              </div>
            </div>
          </div>

        )
          
        )}
        
      </div>

    </div>
  )
}

export default ItemList