export default function Play() {

  const submitPassword = () => {

    console.log('tes', '<<<< tes password');
    // dispatch(updatePassword(password))
  }

  return (
    <div className="flex justify-center mt-10 p-5 pb-10">
      <div class="carousel w-3/4 h-3/4">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-listing-thumb-01-09sep21$en?$native$" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://digitek.id/wp-content/uploads/2022/01/Game-Multiplayer-PS4-Terbaik.jpg" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/07/15/103697106.jpg" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://www.dewa.gg/wp-content/uploads/2020/12/5c00a8947b6a1d93ebec4d0d92f2f1be7a90354bdb9f875d053be8d15ae91018.jpg" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}