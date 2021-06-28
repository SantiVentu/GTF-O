import React, {useState} from 'react'
import styled from 'styled-components'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemCountConteiner({props}) {


    let [stockItem, setStockItem] = useState(props.stock)
    let [stockCliente, setStockCliente] = useState(0)
    let [carrito, setCarrito] = useState([]);
    let disabled = false;


    let sumar = () => {
        if (stockItem === stockCliente) {
            disabled = true;
        }else{
            setStockCliente (stockCliente + 1)
        }        
}
    let restar = () => {
        if (stockCliente === 0) {
            disabled = true;
        }else{
            setStockCliente (stockCliente - 1)
        }
    
    }

    let onAdd = () => {
        setCarrito({...props, cant: stockCliente})
        setStockItem(stockItem - stockCliente)
}
    return (
        <Conteiner>
            <ItemCount 
                stockItem={stockItem} 
                stockCliente= {stockCliente}
                restar= {restar}
                sumar= {sumar}
                disabled= {disabled}
                onAdd= {onAdd}
                
            />
        </Conteiner>
    )

}


const Conteiner = styled.div`

`
