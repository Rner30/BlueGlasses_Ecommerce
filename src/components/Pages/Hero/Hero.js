import React from 'react'
import chicaAnteojos from '../../../img/Bluth_HomeBanner1-min.jpg'
import chicaAnteojosMobile from '../../../img/Bluth_ImgSliderMobile1-min.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <DIV>
            <div className="descript">
                <h1 >Anteojos para pantalla</h1>
                <p>3 / 6 / 12 Cuotas Sin Interes Envío Gratis</p> 
                <p>Neutros o con Graduación</p>
                <Link to="/productos">
                    <button className="btn btn-dark btn-lg" >TIENDA</button>
                </Link>
            </div>
        </DIV>
    )
}

export default Hero


const DIV = styled.div`
    background: url(${chicaAnteojos});
    background-size: cover;
    height: 60vh;
    h1{
        font-size: 3rem;    
    }
    p{
        font-size: 1.5rem;
    }
    .descript{
        padding-top: 13rem;
        padding-left: 25rem;
    }
    @media (max-width: 1400px){
        .descript{
            padding-top: 10rem;
            padding-left: 10rem;
        } 
    }
    
    @media (max-width: 700px){
        background: url(${chicaAnteojosMobile});
        background-size: cover;
        font-weight: bold;
        .descript{
            padding: 16rem 1rem 1rem 1rem;
        
        }
        h1{
            font-size: 2rem;    
        }
        p{
            font-size: 1.15rem;
        }
    }
    @media (max-width: 360px){
        .descript{
            padding: 7rem 1rem 1rem 1rem;
        }
    }
`