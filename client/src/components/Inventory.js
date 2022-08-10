import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inventory } from '../store/actions/actionCreator'
import InventoryCard from './InventoryCard'

export default function Inventory() {
  const dispatch = useDispatch()
  const inventoryData = useSelector(state => {
    // console.log(state.inventory, '<<< state.inventory');
    return state.inventory
  })

  useEffect(() => {
    dispatch(inventory())
  }, [])

  return (
    <div className="flex justify-center mt-10 gap-5 mx-10 flex-wrap">
      {inventoryData.map(inventory => {
        return <InventoryCard data={inventory} key={inventory.id} />
      })}
    </div>
  )
}