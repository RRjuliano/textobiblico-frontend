import React from 'react';
import { useState } from 'react';
//import './style/Search.css';
import { useCreateSearchMutation } from '../redux/services/searchsApi'
import { useNavigate } from "react-router";
//import { IoCloseCircleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Loading from '../components/Loading';

const Home = () => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate()
  const [createSearch, { isLoading, error }] = useCreateSearchMutation();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const newSearch = { input: search }

    try {
      const data = await createSearch(newSearch).unwrap();
      console.log(data)
      /*
      Swal.fire({
          title: "Confirmed Order",
          text: "Your order placed successfully!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, It's Okay!"
        });
        */
      if (data.success) {
        navigate(`/r/${data.value}`)
      } else {
        navigate(`/notfound`)
      }
    } catch (error) {
      console.error("Error create new search", error);
    }
  }

  if (isLoading) return <Loading />

  return (
    <>
      <div className="min-h-full">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10" >
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block flex-nowrap rounded-full w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquise... Ex: MT 5:1" required
            />
            <button type="submit" className="text-white absolute end-2.5 bottom-3 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-lg px-2.5 py-2.5"><IoSearch /></button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Home;

