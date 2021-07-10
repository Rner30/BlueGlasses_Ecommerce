import React from 'react'
import chicaAnteojos from '../../../img/Bluth_HomeBanner1.jpg'
import chicaAnteojosMobile from '../../../img/Bluth_ImgSliderMobile1.jpg'
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    background: url(${chicaAnteojos});
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
    @media screen and (max-width: 700px){
        background: url(${chicaAnteojosMobile});
        background-size:cover;
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
`