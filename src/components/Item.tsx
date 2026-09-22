import type { ItemType } from "../types/Item"

const Item = ({item}:{item: ItemType}) => {
  return (
    <div>
      <p>{item.name}</p>
      <button>❌</button>
    </div>
  )
}

export default Item