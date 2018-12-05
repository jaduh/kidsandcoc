import React from 'react'
import { Link } from 'gatsby'

import './main.css'

import Layout from '../components/layout'
import Image from '../components/image'
import Menu from '../components/menu/menu'
import Pijltje from '../components/pijltje/pijltje'
import HomepageGrid from '../components/homepageGrid/homepageGrid';

const IndexPage = () => (

<div className='homeContainer'>
    <Menu />
  <div className='hoofdFotoContainer'>
  
    <div className='hoofdFoto'>
    
      <div className='hoofdFotoTekst'>
        <div className='quote'><h2>Reizen is de enige uitgave</h2></div>
        <div className='quote'><h2>waarvan heel je gezin</h2></div>
        <div className='quote'><h2>rijker wordt</h2></div> 
      </div>
    </div>
    <Pijltje />
  </div>
 <HomepageGrid />
  <Link to="/page-2/">Go to page 2</Link>

</div>

)

export default IndexPage
