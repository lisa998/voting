import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/reducer'

export const  App = () => {
  let vote = useSelector(store => store)
  let dispatch = useDispatch()

  const plus = (id) => {
    dispatch(increment(id))
  }

  return(
    <>
    {vote.map(e => (
      <div key={e.id} className='block'>
        <img className='productImg' src={e.productImageUrl} alt={e.title}/>
        <div className='description'>
          <h4 onClick={() => plus(e.id)}> {e.votes} </h4>
          <p> {e.title} </p>
          <p> {e.description} </p>
          <div className='submit'>
            <span>Submitted by:</span>
            <img className='avatar' src={e.submitterAvatarUrl} alt={e.id}/>
          </div>
        </div>
      </div>)
    )}
    </>
  )
}