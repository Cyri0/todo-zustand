import { useItemStore } from "../store/useItemStore"
import type { ItemType } from "../types/Item"

const Item = ({item}:{item: ItemType}) => {

  const removeItem = useItemStore((state) => state.removeItem)

  return (
    <div>
      <p>{item.name}</p>
      <button onClick={()=>removeItem(item.id)}>❌</button>
    </div>
  )
}

export default Item