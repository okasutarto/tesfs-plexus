import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function TabMenus() {
  const navigate = useNavigate()

  const handleRoutes = (e, tab) => {
    e.preventDefault()
    // console.log('tes tab');
    navigate(tab)
  }

  return (
    <div className="flex justify-center mt-10">
      <div class="btn-group">
        <button onClick={(e) => handleRoutes(e, '/play')} class="btn bg-white text-slate-600 hover:bg-purple-700 hover:text-white">
          <span class="material-symbols-outlined">
            play_arrow
          </span> Play
        </button>
        <button onClick={(e) => handleRoutes(e, '/shop')} class="btn bg-white text-slate-600 hover:bg-purple-700 hover:text-white">
          <span class="material-symbols-outlined mr-2">
            shopping_cart
          </span>Shop
        </button>
        <button onClick={(e) => handleRoutes(e, '/inventory')} class="btn bg-white text-slate-600 hover:bg-purple-700 hover:text-white">
          <span class="material-symbols-outlined mr-2">
            inventory_2
          </span>Inventory
        </button>
        <button onClick={(e) => handleRoutes(e, '/leaderboard')} class="btn bg-white text-slate-600 hover:bg-purple-700 hover:text-white">
          <span class="material-symbols-outlined mr-2">
            leaderboard
          </span>Leaderboard
        </button>
      </div >
    </div >
  )
}