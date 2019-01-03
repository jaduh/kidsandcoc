

import React from 'react'
import { Link } from 'gatsby'

import './blog.css'
import '../../pages/main.css'
import '../homepageGrid/homepageGrid.css'




export class BlogHeader extends React.Component{
    render(){
        const titel ="Lessen van onze adembenemende vakantie in Maleisië met kinderen"
        return(
        <div className="blogHeaderContainer">
            <div className="blogHeaderFoto"></div>
            <div className="blogHeaderTekst">
                <div className="blogHeaderKop">
                    <h1>{titel}</h1>
                </div>
                <div className="blogHeaderIntro">
                    <p>Wij gingen naar Maleisië met onze peuter en we vonden dat even fantastisch als vermoeiend.  We zagen orang oetans, lagen op ons eigen privéstrand, waanden ons even miljonair in Kuala Lumpur en liepen dwars door het wonderschone regenwoud. Eindresultaat? Alle drie moe, maar ontzettend voldaan.
            </p>
                </div>
            
            </div>

        </div>
        
        )
    }

}

