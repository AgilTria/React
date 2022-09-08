import React from 'react'

function Home ({nama, umur, alamat}) {
  return (
    <>
    <div className="colums m-5 is-flex-direction-row">
      <div className="message is-4">
          <p> Welcome</p>
          <button class="delete" aria-label="delete"></button>
      </div>
    <div class="messege-body">
      <p>saya :{nama}</p>
      <p>umur : {umur}</p>
      <p>alamat : {alamat}</p>
      </div>
    </div>   
     </>

  )
}
export default Home;
