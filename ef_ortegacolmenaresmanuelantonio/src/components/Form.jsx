import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Americana from '../assets/americana.png';
import { Button, Form } from 'react-bootstrap';
import './Form.css'

function Formulario() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ area, setArea ] = useState('');

  const regexText = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ \s]+$/;
  const regexEmail = /^[a-zA-Z0-9ñÑ._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const Send = (e) => {
    e.preventDefault;
    if (name === '' || email === '') {
      alert('Por favor ingrese sus datos');
    }

    if ((regexText.test(name) === false && name != '') || (regexEmail.test(email) === false && email != '')) {
      alert('Datos no válidos');
      console.log('click');
    }

    else alert(`Datos ingresados= { ${name}, ${email} ${area} }`);
  }

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeArea = (e) => setArea(e.target.value);

  return (
    <>
    <div className='Body'>

      <div className='Item'>
        <img src={Americana}></img>
        <p className='Subtitle'>Pizza Americana</p>
        <p>Masa clásica, salsa de tomate y pepperoni</p>
      </div>

      <div className='Form'>
        <Form onSubmit={Send}>
          <Form.Group className="box">
            <Form.Label>Nombres y apellidos</Form.Label>
            <Form.Control value={name} onChange={changeName} type="text" placeholder="Nombres y apellidos" />
          </Form.Group>

          <Form.Group className="box">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control value={email} onChange={changeEmail} type="text" placeholder='ejemplo@email.com' />
          </Form.Group>

          <Form.Group className='box'>
            <Form.Label>Haz tu pedido y disfruta de la mejor pizza</Form.Label>
            <Form.Control value={area} onChange={changeArea} as="textarea" rows={3} placeholder='Describe tu pedido aquí'></Form.Control>
          </Form.Group>
          <Button type="submit" className='Button'>Enviar</Button>
        </Form>

      </div>
    </div>
    </>
  );
}

export default Formulario;