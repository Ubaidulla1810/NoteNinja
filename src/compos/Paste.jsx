import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const Paste = () => {
  // if we want to fetch the data from the state then use -> useSelector hook
  const passtes = useSelector((state) => state.paste.pastes)
  console.log(passtes)

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filterData = passtes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId))
  }
 

  return (
    <div className='container mx-auto px-4 py-8 max-w-2xl'>

      <div className='flex justify-center mb-8'>
        <input
          className='rounded p-2 pl-4 border border-gray-300 w-full max-w-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#023e8a]' 
          type="text"
          placeholder='Search pastes...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-4'> 
        {
          filterData.length > 0 ? ( // Conditional rendering
            filterData.map(
              (paste) => {
                
                const date = new Date(paste.createdAt);
                const formattedDate = new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(date);

                return (
          
                  <div key={paste?._id} className='border border-gray-200 rounded p-4 shadow-sm bg-white'> 
          
                    <h3 className='text-lg font-semibold text-gray-800 mb-2'>{paste.title}</h3> 
              
                    {/*  Buttons and Date Section  */}
                    <div className='flex flex-wrap items-center justify-between gap-3 text-sm text-gray-600 border-t pt-4 border-gray-200'> 
               
                      <div className='flex items-center gap-3'> 
                     {/* view btn */}
                        <NavLink to={`/pastes/${paste?._id}`} className='text-blue-600 hover:underline'>View</NavLink>
                        {/* edit Btn*/}
                        <NavLink to={`/?pasteId=${paste?._id}`} className='text-blue-600 hover:underline'>Edit</NavLink>
                        {/* delete btn */}
                        <button
                          onClick={() => handleDelete(paste?._id)}
                          className='text-red-600 hover:underline'
                        >
                          delete
                        </button>
                        {/* copy btn */}
                        <button
                          onClick={() => { navigator.clipboard.writeText(paste?.content); toast.success("Copied to clipboard"); }}
                          className='text-gray-600 hover:underline'
                        >
                          copy
                        </button>
                      </div>

                      {/* display date */}
                      <span className='text-gray-500 text-xs'>{formattedDate}</span> 
                    </div>
                  </div>
                )
              }
            )
          ) : (
            //->  Message if no pastes found
            <div className="text-center text-gray-500 mt-8">No pastes found!</div>
          )
        }
      </div>
      <footer className='mt-8 text-center text-gray-500 text-sm'>
                    Made with 🤍 by Ubaidulla khan . NoteNinja
                </footer>
    </div>
  )
}

export default Paste


