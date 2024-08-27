import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Americana from '../assets/americana.png';

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');

  return (
    <>
    <div className='Body'>
      <div className='Item'>
        <img src={Americana}></img>
        <p className='Subtitle'>Pizza Americana</p>
        <p>Masa clásica, salsa de tomate y pepperoni</p>
      </div>
      <div className='Form'>
      <Form>
        <Form.Group className="box">
          <Form.Label>Nombres y apellidos</Form.Label>
          <Form.Control type="text" placeholder="Nombres y apellidos" />
        </Form.Group>
        <Form.Group className="box">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="text" placeholder='ejemplo@email.com' />
        </Form.Group>
        <Form.Group className='box'>
          <Form.Label>Haz tu pedido y disfruta de la mejor pizza</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='Describe tu pedido aquí'></Form.Control>
        </Form.Group>
      </Form>
      <button>Enviar</button>
      </div>
    </div>
    </>
  );
}

export default Formulario;