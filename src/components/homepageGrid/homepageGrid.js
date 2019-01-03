
import React from 'react'
import { Link } from 'gatsby'
import './homepageGrid.css'
import '../../pages/main.css'








const HomepageGrid = () => (
 
<div className='homepage-container'>
  <h2 className='titelQuote'>Wij veroveren de wereld mét kids</h2>
   {/* <p className="onder-quote">Toegegeven. De wereld veroveren is met kinderen misschien iets ingewikkelder dan zonder. Maar om nu te zeggen dat het niet lukt, niet uitkomt of onogelijk is. Dat kan er bij ons niet in.</p>   */}


    <div className='grid-container'>
       <div className='kleineGridContainer'>
          <Link to="fullblog"><div className='grid grid-links'></div></Link>
          <p>Lessen van onze adembenemende vakantie in Maleisië met kinderen</p>
      </div>
      <div className='kleineGridContainer'>
        <div className='grid grid-mid'></div>
        <p>Lessen van onze adembenemende vakantie in Maleisië met kinderen</p>
      </div>
      <div className='kleineGridContainer'>
        <div className='grid grid-rechts'></div>
        <p>Lessen van onze vakantie in Maleisië met kinderen</p>
      </div>
    </div>
   </div>

    
)
    
    export default HomepageGrid


