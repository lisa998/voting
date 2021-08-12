import { createSlice } from '@reduxjs/toolkit'
import  products  from '../seed'

const sort = (e) => {
  for(let i = 0; i < e.length; i++){
    for(let j = i+1; j < e.length; j++){
      if(e[j].votes > e[i].votes){
        let temp = {...e[j]}
        e[j] = {...e[i]}
        e[i] = {...temp}
      }
    }
  }
  return products
}

const voteSlice = createSlice({
  name: 'vote',
  initialState: sort(products),
  reducers: {
    increment(state, action) {
      let id = action.payload
      state.forEach(i =>{
        if(i.id === id){
          i.votes++
        }
      })
      sort(state)
    }
  },
})

export const { increment } = voteSlice.actions
export default voteSlice.reducer