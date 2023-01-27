import React, { useState } from 'react'
import './calculadora.css'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap'
// import CalculadoraService from './calculadora.service';

function Calculadora() {
  // const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] =
    useState('0')
  const [numero1, setNumero1] = useState('0')
  const [numero2, setNumero2] = useState(null)
  const [operacao, setOperacao] = useState(null)

  function adicionarNumero(numero) {}

  function definirOperacao(op) {}

  return (
    <Container
      style={{
        background: 'transparent !important',
        backgroundColor: '#007bff',
        padding: '5px',
        margin: '5px',
        width: '400px',
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readonly"
              data-testid="txtNumeros"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">7</Button>
          </Col>
          <Col>
            <Button variant="light">8</Button>
          </Col>
          <Col>
            <Button variant="light">9</Button>
          </Col>
          <Col>
            <Button variant="warning">/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">4</Button>
          </Col>
          <Col>
            <Button variant="light">5</Button>
          </Col>
          <Col>
            <Button variant="light">6</Button>
          </Col>
          <Col>
            <Button variant="warning">*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">1</Button>
          </Col>
          <Col>
            <Button variant="light">2</Button>
          </Col>
          <Col>
            <Button variant="light">3</Button>
          </Col>
          <Col>
            <Button variant="warning">-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">0</Button>
          </Col>
          <Col>
            <Button variant="light">.</Button>
          </Col>
          <Col>
            <Button variant="success">=</Button>
          </Col>
          <Col>
            <Button variant="warning">+</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Calculadora
