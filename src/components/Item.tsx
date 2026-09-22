import { useItemStore } from "../store/useItemStore"
import type { ItemType } from "../types/Item"

const Item = ({item}:{item: ItemType}) => {

  const removeItem = useItemStore((state) => state.removeItem)
  const toggleItem = useItemStore((state) => state.toggleItem)

  return (
    <div className="item">
      <p onClick={()=>toggleItem(item.id)} className={item.isDone ? "done" : ""}>{item.name}</p>
      <button onClick={()=>removeItem(item.id)}>❌</button>
    </div>
  )
}

export default Item