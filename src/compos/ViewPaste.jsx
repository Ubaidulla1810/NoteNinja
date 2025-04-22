import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewPaste = () => {

  // this is used to get the id from the url 
  const { id } = useParams();

  // access the store 
  const allPastes = useSelector((state) => state.paste.pastes);

  // from store which data we got filtering(find) based on the id which we have got 
  // const paste = allPastes.filter((p) => p._id === id)[0];
  const paste = allPastes.find((p) => p._id === id);
  console.log(paste)

  // if no pastes found then 
  if (!paste) {
    return <div className="text-center mt-10 text-red-500">Paste not found or loading...</div>;
  }

  return (

    <div className='container mx-auto px-4 py-8 max-w-2xl'>

      <div className='mb-6'>
        <label className='block text-lg font-semibold text-gray-700 mb-2'>Title:</label>
        <input
          className='block w-full rounded-md p-2.5 pl-4 border border-gray-300 bg-gray-100 cursor-text text-gray-700'
          type="text"
          value={paste.title}
          disabled
        />
      </div>

      <div>
        <div className='flex items-center justify-between mb-2'>
          <label className='block text-lg font-semibold text-gray-700'>Content:</label>

          <button
            onClick={() => {
              navigator.clipboard.writeText(paste?.content);
              toast.success("Content copied to clipboard!");
            }}
            className='bg-gray-200 text-gray-700 text-xs font-semibold px-1.5 py-2 rounded-md hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200'
            title="Copy content to clipboard"
          >
            Copy
          </button>
        </div>

        <textarea
          className='block w-full rounded-md resize-none p-3 border border-gray-300 bg-gray-100 cursor-text text-gray-700 focus:outline-none focus:border-gray-400'
          value={paste.content}
          disabled
          // placeholder="Enter your content here!"
          rows={20}
        >
        </textarea>

      </div>
      <footer className='mt-8 text-center text-gray-500 text-sm'>
        Made with 🤍 by Ubaidulla khan . NoteNinja
      </footer>
    </div>
  );
}

export default ViewPaste