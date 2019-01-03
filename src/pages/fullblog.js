import React from 'react'


import Menu from '../components/menu/menu'
import Pijltje from '../components/pijltje/pijltje'
import BlogHeader from '../components/blogpost/blogHeader'
import BlogBody from '../components/blogpost/blogBody';


export class FullBlog extends React.Component{
    render(){
        return(
            <div className='container'>
                <Menu />
                <BlogHeader/>
                <Pijltje />
                <BlogBody/>
             </div>
        );
    }

}
