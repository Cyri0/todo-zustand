import { useState } from "react"
import { useItemStore } from "../store/useItemStore"
import { v4 as uuidv4 } from 'uuid';

const ItemInput = () => {
  const [itemName, setItemName] = useState("")
  const addItem = useItemStore((state) => state.addItem)

  const addItemHandler = () => {
    addItem({
      id: uuidv4(),
      isDone: false,
      name: itemName
    })
    setItemName("")
  }

  return (
    <div>
        <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)} />
        <button onClick={addItemHandler}>Hozzáad</button>
    </div>
  )
}

export default ItemInput