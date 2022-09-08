
 import 'bulma/css/bulma.css';
import { Tombol } from './Componen/Tombol';
import { useState } from 'react';
import Home from './Page/Home';



function App() {
  const nama = ["Agil"];
  const umur = [19];

  const [hitung, setHitung] = useState(0);
  return (
      <div classsName="App">
        <div className="colums">
          <welcome nama="Agil" umur="22" alamat="way halom"/>
        </div>

        <Tombol nilai="kurang"warna="mx-3 button is-primary" diklik={() => setHitung(hitung -1)}/>
        <span className="mx-4" >{hitung}</span>
        <Tombol nilai="tambah"warna="mx-3 button is-succes" diklik={() => setHitung(hitung +1)}/>
        
        <hr className="has-background-black"/>
        {hitung % 2 === 0 ? "Bilangan Genap" : "Bilangan Ganjil"}
  </div> 
  
      
  )
}
    

export default App;