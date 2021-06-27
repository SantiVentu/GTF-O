import React from 'react'
import styled from 'styled-components'

export default function ItemDetail({props}) {
    return (
        <Container>
            <div className='itemImage'>
                <img src={props.image} alt={props.modelo} />
            </div>
            <div className='itemInfo'>
                <h1>{props.modelo}</h1>
                <ul>
                    <li>Socket: {props.socket}</li>
                    <li>Watts: {props.watts}W</li>
                    <li className = 'itemPrice'>${props.price}</li>
                </ul>
            <button>Agregar al carrito</button>
            </div>
        </Container>
    )

}


const Container = styled.div`
    width: 50%;
    height: 70vh;
    border-radius: 20px;
    box-shadow: 5px 5px 15px #dadada;
    margin:5em auto;

    display: flex;
    justify-content: center;

    .itemImage{
        width: 100%;
        img{
            width: 250px;
            height: 250px;
        }
    }
    .itemInfo {
        width: 100%;
        button{
            padding: .7em;
            border-radius: 10px;
            background-color: #4043ff;
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
        }

        ul{
            list-style: none;
            font-size: 18px;
            li{
                margin: .5em 0;
                font-weight: 500;
            }
        }

        .itemPrice {
            color: #4043ff;
            font-weight: 600;
            font-size: 24px;
        }
    }
`
