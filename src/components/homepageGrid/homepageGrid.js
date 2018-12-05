
import React from 'react'
import { Link } from 'gatsby'
import './homepageGrid.css'
import '../../pages/main.css'







const HomepageGrid = () => (
 
<div className='homepage-container'>
  <h2 className='titelQuote'>Wij veroveren de wereld mét kids</h2>
   {/* <p className="onder-quote">Toegegeven. De wereld veroveren is met kinderen misschien iets ingewikkelder dan zonder. Maar om nu te zeggen dat het niet lukt, niet uitkomt of onogelijk is. Dat kan er bij ons niet in.</p>   */}


    <div className='grid-container'>


    <Link to="/page-2/"><div className='grid grid-links'></div></Link>
      
      <div className='grid grid-mid'></div>
      <div className='grid grid-rechts'></div>
    </div>
   </div>

    
)
    
    export default HomepageGrid


