import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    // search field
    const [title, setTitle] = useState('');
    // text area
    const [value, setValue] = useState('');

    // for pasteid's
    // It provides a clean and simple way to work with URL parameters in React Router.
    // It allows you to maintain URL state, enabling features like search filters, pagination, or any functionality dependent on URL parameters.
    const [searchParams, setSearchParams] = useSearchParams();

    // Reading parameters: searchParams.get('pasteid') is used to read the value of the query parameter from the URL
    const pasteId = searchParams.get("pasteId");

    // dispatch: Dispatches an action to the Redux store to change the state or trigger side effects.
    // useDispatch: A hook used to get the dispatch function in a functional component.
    const dispatch = useDispatch();

    // Using useSelector to get the user data from the Redux store
    const allPastes = useSelector((state) => state.paste.pastes)

    function createPaste() {

        if (!title.trim() || !value.trim()) {
            toast.error("Oops! Looks like you forgot to fill in the title or content");
            return;
        }
        const paste = {
            title: title,
            content: value,
            _id: pasteId ||
                uuidv4(),
            createdAt: new Date().toISOString(),
        }


        if (pasteId) {
            //update
            dispatch(updateToPastes(paste));
        }
        else {
            //create 
            dispatch(addToPastes(paste));
        }

        // After creation and updation to clean the fields
        setTitle('');
        setValue('');
        setSearchParams({});

    }

    // whenever the pasteId will get changed when we click on the edit button useEffect will trigger
    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId)
            setTitle(paste.title);
            setValue(paste.content)
        }

    }, [allPastes, pasteId])


    return (
     
        <div className='container mx-auto px-6 py-8 max-w-2xl bg-white rounded-lg shadow-lg mt-10'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
                {pasteId ? 'Edit Your Paste' : 'Create New Paste'}
            </h2>

            <div className='flex flex-col sm:flex-row gap-4 mb-6 items-center'>
                <input
                    className='flex-grow rounded-md p-2.5 pl-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#023e8a] w-full text-gray-700 transition-colors duration-200'
                    type="text"
                    placeholder='Enter title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={createPaste}
                    className='rounded-md shadow-sm px-3 py-2 bg-[#03045e] text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-[#03045e] transition-colors duration-200 w-full sm:w-auto'>
                  
                    {pasteId ? "Update Paste" : "Create Paste"}
                </button>
            </div>

            
            <div>
                <textarea
                    className='rounded-md resize-none w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#023e8a] text-gray-700 transition-colors duration-200'
                    value={value}
                    placeholder="Enter your content here!"
                    onChange={(e) => setValue(e.target.value)}
                    rows={15}>
                </textarea>
            </div>
            <footer className='mt-5 text-center text-gray-500 text-sm'>
                Made with 🤍 by Ubaidulla khan . NoteNinja
            </footer>
        </div>


    )
}

export default Home