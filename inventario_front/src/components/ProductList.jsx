import React, { useState, useEffect } from 'react';
import api from '../api';
import { Button, Table, Spinner, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de importar el CSS de Bootstrap

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get('/productos/')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error al cargar los productos.');
                setLoading(false);
            });
    }, []);

    return (
        <Container className="mt-5">
            <div className="text-center mb-4">
                <h1>Lista de Productos</h1>
                <button className='btn btn-success'>crear</button>
            </div>

            {loading && (
                <div className="d-flex justify-content-center mt-3">
                    <Spinner animation="border" />
                </div>
            )}

            {error && (
                <Alert variant="danger" className="mt-3">
                    {error}
                </Alert>
            )}

            {!loading && !error && (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nombre}</td>
                                <td>{product.descripcion}</td>
                                <td>{product.cantidad}</td>
                                <td>${parseFloat(product.precio).toFixed(2)}</td>
                                <td>
                                    <Button  className="me-2 btn btn-warning">Editar</Button>
                                    <Button className='btn btn-danger'>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};
