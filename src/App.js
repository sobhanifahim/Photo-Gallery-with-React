import './App.css';
import {Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import img1 from './pic/1.JPG'
import img2 from './pic/2.JPG'
import img3 from './pic/3.JPG'
import img4 from './pic/4.JPG'
import img5 from './pic/5.JPG'
import img6 from './pic/6.JPG'
import img7 from './pic/7.JPG'
import img8 from './pic/8.JPG'
import img9 from './pic/9.jpg'
import img10 from './pic/10.jpg'
import { useState } from 'react';

function App() {
  const images=[
      {  id:1,
        imgSrc:img1,
      },
      {  id:2,
        imgSrc:img2,
      },
      {  id:3,
        imgSrc:img3,
      },
      {  id:4,
        imgSrc:img4,
      },
      {  id:5,
        imgSrc:img5,
      },
      {  id:6,
        imgSrc:img6,
      },
      {  id:7,
        imgSrc:img7,
      },
      {  id:8,
        imgSrc:img8,
      },
      {  id:9,
        imgSrc:img9,
      },
      {  id:10,
        imgSrc:img10,
      },
  ]
  const [showimg,setShowImg]=useState(false)
  const [showsrc,setShowSrc]=useState('')
  const [darkMode, setDarkMode] = useState(false);
  const getImg=(imgsrc)=>{
    setShowSrc(imgsrc)
    setShowImg(true)
  }
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="#" className={`brand ${darkMode ? 'dark-text' : 'light-text'}`}>My Photo Gallery</Navbar.Brand>
        <button onClick={toggleMode} className={darkMode? "darkmode open":"darkmode"}>
        {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} style={{color:"white"}} />}
        </button>
      </Navbar>
      <div className={showimg? "showimg open":"showimg"}>
            <img src={showsrc} alt=''/>
            <FontAwesomeIcon icon={faXmark} onClick={()=>{setShowImg(false)}} className='close'/>
      </div>
      <div className='gallery'>
           {images.map((pics,index)=>{
            return (
              <div className='image' key={index}>
                 <img src={pics.imgSrc} style={{width:"300px",height:"300px",borderRadius:"10px"}} alt='' onClick={()=>getImg(pics.imgSrc)}/>
                 <span className='icon'><FontAwesomeIcon icon={faEye} /></span><br/>
                 <p className='icon'>Preview</p>
              </div>
            )
           }

           )}
      </div>
    </div>
  );
}

export default App;
