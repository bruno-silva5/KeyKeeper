import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthFormWrapper from '../../components/auth-form-wrapper';
import { Button, FormGroup, Input, Label } from 'reactstrap';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    return;
    // e.preventDefault();
    // axios.post('http://localhost:3000/login', {
    //   email: email,
    //   password: password
    // }, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   }
    // }).then(response => {
    //   localStorage.setItem('token', response.data.accessToken);
    //   localStorage.setItem('userData', JSON.stringify(response.data.user));
    //   navigate('/');
    // }).catch(error => {
    //   console.error(error);
    //   setErrMsg(error.response?.data);
    // })
  }

  return (
    <AuthFormWrapper isSignIn>
      <FormGroup>
        <Label className='text-center'>E-mail</Label>
        <Input type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label className='text-center'>Senha</Label>
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <FormGroup className='mt-4 pb-3'>
        <Button className='mt-4' color='primary' block onClick={handleSubmit}>
          Entrar
        </Button>
      </FormGroup>
    </AuthFormWrapper>
  );
}

export default Login;