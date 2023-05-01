import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

function Toodes() {
    const {isLoading,todos,error} = useSelector((state)=>state);

    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getAllTodos())
    },[])
    
  return (
    <div>
    
        <h1>todos app</h1>
        {isLoading && <h1>Loading...</h1>}
        {error && <h2>{error.message}</h2>}
        <section>
        {todos && todos.map((todo)=>{
          const {id,title} = todo;
          return <article key={id}>
            <h4>{id}</h4>
            <h4>{title}</h4>
          </article>
        })
        }
        </section>
               

    </div>
  )
}

export default Toodes;
