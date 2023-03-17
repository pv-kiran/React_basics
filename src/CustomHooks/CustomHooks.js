import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch';


function CustomHooks() {

  const {loading , posts} = useFetch('https://jsonplaceholder.typicode.com/posts');

  console.log(posts);

  return (
    <div>
      {
        loading ? <div>LOADING</div> : <div>ALL DATAS</div>
      }
    </div>
  )
}

export default CustomHooks