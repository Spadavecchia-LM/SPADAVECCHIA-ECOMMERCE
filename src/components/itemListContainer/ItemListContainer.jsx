import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore'



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

console.log(productos)


  return (
    <>
      <ItemList productos={productos} />
    </>
  );
}
export default ItemListContainer
