import { useItemStore } from "../store/useItemStore"

const ItemList = () => {
  const items = useItemStore((state) => state.items)

  return (
    <div>
      {items.map(item => <p>{item}</p>)}
    </div>
  )
}

export default ItemList