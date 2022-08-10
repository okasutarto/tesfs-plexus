import { sellWeapon } from '../store/actions/actionCreator'
import { useDispatch } from 'react-redux'

export default function InventoryCard({ data }) {
  const dispatch = useDispatch()

  const sell = (e, id) => {
    e.preventDefault()
    dispatch(sellWeapon(id))
  }

  return (
    <div class="card bg-white shadow-xl w-1/5">
      <figure class="px-5 pt-5">
        <img src={data.Weapon.imgUrl} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{data.Weapon.name}</h2>
        <p>{data.Weapon.description}</p>
        <div class="card-actions">
          <button onClick={(e) => sell(e, data.id)} class="btn btn-primary bg-red-600 border-red-600 hover:border-red-800 hover:bg-red-800">Sell</button>
        </div>
      </div>
    </div>
  )
}