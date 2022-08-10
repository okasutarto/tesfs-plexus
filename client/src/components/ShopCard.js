import { buyWeapon } from '../store/actions/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ShopCard({ item }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const buy = (e, id) => {
    e.preventDefault()
    dispatch(buyWeapon(id))
    // navigate('/inventory')
  }

  return (
    <div class="card bg-white shadow-xl w-1/4">
      <figure class="px-5 pt-5">
        <img src={item.imgUrl} alt="weapons" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="mb-2 text-lg font-semibold text-slate-800 inline-flex">
          <p className="mb-0">Price : <span class="material-symbols-outlined  text-yellow-500 ">
            database
          </span> {item.price}</p>
        </div>
        <div class="card-actions">
          <button onClick={(e) => buy(e, item.id)} class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}