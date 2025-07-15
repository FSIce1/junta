import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Participants () {
    return (
        <div className="container mt-4">
            <h3>Listas de integrantes de la junta</h3>
            <ListGroup>
                <ListGroup.Item>Felipe Siesquen Valdivia</ListGroup.Item>
                <ListGroup.Item>Alonso Siesquen Valdivia</ListGroup.Item>
                <ListGroup.Item>Delia Valdivia Velásquez</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Participants;