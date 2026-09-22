import { useState } from "react"
import { useItemStore } from "../store/useItemStore"

const ItemInput = () => {
  const [itemName, setItemName] = useState("")
  const addItem = useItemStore((state) => state.addItem)

  const addItemHandler = () => {
    addItem(itemName)
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