import React, { useEffect, useState } from "react";
import { fetchWeapons } from "../store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import ShopCard from "./ShopCard";

export default function Shop() {
  const dispatch = useDispatch();
  const weapons = useSelector((state) => {
    console.log(state.weapons, "<<< state weapons");
    return state.weapons;
  })

  useEffect(() => {
    dispatch(fetchWeapons());
  }, [])

  return (
    < div className="flex justify-center mt-10 gap-5 mx-10" >
      {weapons.map(item => {
        return <ShopCard item={item} key={item.id} />
      })}
    </div >
  )
}