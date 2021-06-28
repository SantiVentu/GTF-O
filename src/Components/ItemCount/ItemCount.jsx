import React from 'react'
import styled from 'styled-components'

export default function ItemCount({stockItem, stockCliente, sumar, restar,disabled, onAdd}) {
    
    return (
        <Conteiner>
            <p>Stock Disponible: {stockItem}</p>
            <div className="Counter">
                <button onClick={restar} disabled = {disabled}>-</button>
                <span>{stockCliente}</span>
                <button onClick={sumar} disabled = {disabled}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
            
        </Conteiner> 
    )
}


const Conteiner = styled.div`
width: 350px;
height: 150px;

    button{
            padding: .7em;
            border-radius: 10px;
            background-color: #4043ff;
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
        }
    .Counter{
        width: 35%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        margin: 1em auto;

    }
`