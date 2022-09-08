import React from 'react'

export const Tombol = ({nilai, warna, diklik }) => {
    console.log(warna);
  return (
    <>
    <input type="button" value={nilai} className={warna} onClick={diklik}/>
    </>
  )
}
