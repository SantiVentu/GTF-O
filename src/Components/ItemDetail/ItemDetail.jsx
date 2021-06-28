import React from 'react'
import styled from 'styled-components'

export default function ItemDetail({props}) {
    return (
        <Container>
            <div className='itemImage'>
                <img src={props.image} alt={props.modelo} />
                <h1>{props.modelo}</h1>
                <ul>
                    <li>Socket: {props.socket}</li>
                    <li>Watts: {props.watts}</li>
                    <li>Stock: {props.stock}</li>
                    <li className='itemPrice'>$ {props.price}</li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.main`
    width: 25%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 5px 5px 15px #dadada;
    padding: 4em;

    display: flex;
    justify-content: center;

    .itemImage{
        width: 100%;
        
        img{
            width: 250px;
        }
        ul{
            list-style: none;
            font-size: 18px;

            li{
                margin: .5em 0;
                font-weight: 500;
            }
        }

        .itemPrice{
            color: #4043ff;
            font-size: 24px;
            font-weight: 600;
        }
    }
`