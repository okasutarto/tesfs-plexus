import React, { useEffect, useState } from "react";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { fetchUsers } from "../store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Details"

export default function Leaderboard() {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const data = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers(1));
    // console.log(data, '<<< data');
  }, [])

  const pagination = (page) => {
    // console.log(page, '<<< page');
    dispatch(fetchUsers(page));
    setCurrent(page);
  }

  return (
    <>
      <div className="flex justify-center mt-10">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-white uppercase bg-purple-700">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Ranking
                </th>
                <th scope="col" class="py-3 px-6">
                  id
                </th>
                <th scope="col" class="py-3 px-6">
                  Username
                </th>
                <th scope="col" class="py-3 px-6">
                  Xp
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, i) => {
                return <tr class="bg-white border-b hover:bg-gray-50" key={el.id}>
                  <td scope="row" class="py-1 px-6 font-medium text-slate-600 whitespace-nowrap">
                    {(i + 1) + ((current - 1) * 10)}.
                  </td>
                  <td scope="row" class="py-1 px-6 font-medium text-slate-600 whitespace-nowrap">
                    {el.UserId}
                  </td>
                  <td scope="row" class="py-1 px-6 font-medium text-slate-600 whitespace-nowrap">
                    {el.User.username}
                  </td>
                  <td scope="row" class="py-1 px-6 font-medium text-slate-600 whitespace-nowrap">
                    {el.xp}
                  </td>
                  <td class="py-1 px-6">
                    <Details data={el} key={el.id} />
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-3 mb-10">
        <Pagination current={current} onChange={pagination} total={50} />;
      </div>
    </>
  )
}