import styled from "styled-components";

export const Nav = styled.nav`
    font-size: 1.3em;
    
    @media (min-width: 992px) {
        height: 3.5rem;
        .icon__margin {
            margin-bottom: 3px;
        }
        .cuotas{
        margin-top: 0.8rem;
        font-weight: 600;
        }   
    }
    
    @media (max-width: 700px){
        .cuotas{
            display:none;
        }
    }
    a{
        text-decoration: none;
        font-weight: 600;
    }
    
`;
export const IMG = styled.img`
	width: 2.5rem;
`;
export const ButonLogIn = styled.button`
    @media (min-width: 992px){
        margin-left: 8rem;
        
    }
    @media (max-width: 1400px){
        width: 10.8rem;
        padding-bottom: 2rem;
        display: flex;
        height: 2rem;
    }
    
`

//--Widget--
export const DIVH3 = styled.div`
    @media (max-width: 992px){
        margin-top: 7px;
    }
    background-color: #32c421;
    border-radius: 10px;
    height: 27px;
    width: 27px;
    p{
        color: white;
        font-size: 1.15rem;
        padding-left:0.55rem;
        font-weight: 500;
    }
`
export const Boton = styled.button`
    background:white;
    border:none;
    img{
        width: 2.5rem;
    }
`
