import { useItemStore } from "../store/useItemStore"
import Item from "./Item"

const ItemList = () => {
  const items = useItemStore((state) => state.items)

  return (
    <div>
      {items.map(item => <Item item={item}/>)}
    </div>
  )
}

export default ItemList