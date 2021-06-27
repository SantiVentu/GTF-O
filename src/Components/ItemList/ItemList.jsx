import React from 'react'
import styled from 'styled-components'

export default function ItemList({props}) {
    return (
        <Card>
            <h2>{props.modelo}</h2>
            <img src={props.image} alt={props.modelo} />
            </Card>
    )
}



const Card = styled.div`
    width: 250px;
    height: 250px;
    box-shadow: 5px 5px 15px #dadada;
    border-radius: 10px;

    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

    img {
        width: 50%;

    }
`