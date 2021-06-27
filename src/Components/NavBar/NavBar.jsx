import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <Container>
            <ul>
                <Link to= '/'><li>Home</li></Link>
                <Link to= '/productos'><li>Productos</li></Link>
                <Link to= '/checkout'><li>Carrito</li></Link>
            </ul>
        </Container>
    )
}

const Container = styled.nav`
    width: 100%;
    height: 5em;
    background-color: #4043ff;

    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 2em;
        width: 50%;
        margin: auto;
        font-size: 20px;
        color: #fff;

        a{
            color: #fff;
            text-decoration: none;
            &:visited{
                color: #fff;
            }
        }
    }
`