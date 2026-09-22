import { useState } from "react"

const ItemInput = () => {
  const [itemName, setItemName] = useState("")

  return (
    <div>
        <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)} />
        <button>Hozzáad</button>
    </div>
  )
}

export default ItemInput