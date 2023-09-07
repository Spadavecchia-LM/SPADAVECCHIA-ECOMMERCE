import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProductos from "../../js/mockApi";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const fetchProductos = async () => {
      try{
        const responseProductos = await getProductos;
        setProductos(responseProductos)
      }catch(error){
        console.log("error", error)
      }
    }
    fetchProductos()
  },[])



  return (
    <>
      <ItemList productos={productos} />
    </>
  );
}
export default ItemListContainer
