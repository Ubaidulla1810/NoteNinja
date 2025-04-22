import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPastes: (state, action) => {
            const paste = action.payload;
            state.pastes.unshift(paste); //storing the data in the store 
            // console.log(paste)
            localStorage.setItem("pastes", JSON.stringify(state.pastes)) //store the data in the localstorage
            toast("Paste Created Successfully")
        },
        updateToPastes: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item) =>
                item._id == paste._id);

            if (index >= 0) {
                state.pastes[index] = paste; //valid index means update in state/store greater then 1 valid

                localStorage.setItem("pastes", JSON.stringify(state.pastes)) //here update in the localstorage
                toast.success("Paste Updated")
            }

        },
        resetAllPastes: (state) => {
            state.pastes = [];
            localStorage.removeItem("pastes");

        },
        removeFromPastes: (state, action) => {
            const pasteId = action.payload;
            // console.log(pasteId)
            const index = state.pastes.findIndex((item) =>
                item._id === pasteId
            );
            if (index >= 0) {
                state.pastes.splice(index, 1)
                localStorage.setItem("pastes", JSON.stringify(state.pastes))
                toast.success("Paste Deleted")
            }

        },
    },
})

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions
export default pasteSlice.reducer