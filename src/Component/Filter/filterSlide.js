// const initValue = {
//     search: '',
//     complete: 'ALL',
//     priority: []
// }
// const filterSlide = (state = initValue, action) => {
//     switch (action.type) {
//         case 'filter/todo':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filter/complete':
//             return {
//                 ...state,
//                 complete: action.payload
//             }
//         default:
//             return state
//     }

// }
// export default filterSlide
import { createSlice } from "@reduxjs/toolkit";
export const filterSlide = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        complete: 'ALL',
        priority: []
    },
    reducers: {
        search: (state, action)=> {
            state.search = action.payload
        },
        complete: (state,action) => {
            state.complete = action.payload
        }
    }

})