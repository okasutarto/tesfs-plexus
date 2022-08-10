import React from "react";

export default function Modal({ data }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="btn btn-error w-12 bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-sm px-6 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-white"
        type="button"
        onClick={() => [
          setShowModal(true)
        ]}
      >
        <span class="material-symbols-outlined">
          info
        </span>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/*body*/}
                <div className="ml-7 mt-3 text-2xl font-semibold items-center">
                  <p>{data.User.username}</p>
                </div>
                <div className="relative w-full p-0 flex-auto">
                  <div class="card card-side bg-white">
                    <figure>
                      <img src={data.User.avatar} alt="Movie"></img>
                    </figure>
                    <div class="card-body content-center">
                      <h2 class="card-title">{data.User.fullName}</h2>
                      <p><span class="material-symbols-outlined text-sm text-yellow-500">
                        database
                      </span> Coin : {data.coin}</p>
                      <p><span class="material-symbols-outlined text-sm">
                        stadia_controller
                      </span> Xp   : {data.xp}</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}