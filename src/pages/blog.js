import React from 'react'
import { Link } from 'gatsby'
import Menu from '../components/menu/menu'
import Pijltje from '../components/pijltje/pijltje'
import HomepageGrid from '../components/homepageGrid/homepageGrid';

const Blog = () => (
 <div className='container'>
<Menu />
<HomepageGrid />
<Pijltje />
</div>
)

export default Blog