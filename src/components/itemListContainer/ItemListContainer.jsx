import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loader from "../Loader";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "products")

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductos(docs)
    })
  },[])




  return (
    <>
    {productos.length < 1 ? <Loader/> : <ItemList  productos={productos}/>}
    </>
  );
}
export default ItemListContainer
