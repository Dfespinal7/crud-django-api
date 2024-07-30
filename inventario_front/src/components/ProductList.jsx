import React, { useState, useEffect } from 'react';
import api from '../api';

export const ProductList=()=>{
    const [products,setProducts]=useState([])

    useEffect(()=>{
        api.get('/productos/')
        .then(response=>setProducts(response.data))
        .catch(error => console.error(error));
    },[])
    return(
        <div>
            <div className='row mt-3 justify-content-center'>
                <h1>Lista de Productos</h1>
            </div>
            <table className='table table-bordered'>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.nombre}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.cantidad}</td>
                        <td>{product.precio}</td>
                        <td>accion</td>
                    </tr>
                ))}
            </table>
        </div>
    )
    
}
