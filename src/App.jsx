import { useState } from 'react'
import './components/css/style.css'
import SearchBox from './components/SearchBox'

function App() {

 /* Box Search */
 const arrImg=[ 'banner-01','banner-02', 'banner-03','banner-04','banner-05','banner-06','banner-07','banner-08','banner-09','banner-11','banner-11' ]
 const [urlImg , setUrlImg] = useState(arrImg[Math.floor(Math.random() * 4)]) 
 const [urlTv , setUrlTv] = useState(arrImg[Math.floor(Math.random() * 7)+3])

  /* Function change image TV */
  const changeTv =() =>{
    setUrlTv(arrImg[Math.floor(Math.random() * 8)+2])
  }

  return (
    <div className="App">
      <div >
        <div className= {`banner ${urlImg}`} >
        <div className={`tv ${urlTv}`} ></div>
      </div>
        
        <div className='content'>
          <h1>Rick And Morty</h1>

          <SearchBox  fnChangeTv={changeTv}/>
        </div>
      </div>
      <div className="footer-color ">
        <div className="my-info">
            <h2>Rick and Morty</h2>
            <h4>Horacio Choque</h4>
            <h5>Hecho en Academlo</h5>
            <br/>
        </div>  
      </div>

    </div>
  )
}

export default App
