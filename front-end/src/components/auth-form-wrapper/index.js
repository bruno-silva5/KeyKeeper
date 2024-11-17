import KeyKeeperLogo from '../../assets/images/keykeeper-logo.png';
import { Button, Form } from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';

const AuthFormWrapper = ({ children, isSignIn }) => {

    const activeClass = 'secondary';
    const inactiveClass = 'outline-light';

    return (
        <section>
            <Form className='auth-form p-5 shadow-lg mt-5'>
                <img src={KeyKeeperLogo} alt="Laradock" className='img-fluid mb-3' />
                <div className='my-4 text-center'>
                    <Link to='/signin'>
                        <Button size='sm' color={isSignIn ? activeClass : inactiveClass} className={isSignIn ? 'fw-bold' : ''}>
                            Login
                        </Button>
                    </Link>
                    <Link to='/signup'>
                        <Button size='sm' color={isSignIn ? inactiveClass : activeClass} className={(isSignIn ? '' : 'fw-bold') + ' ms-2'}>
                            Cadastro
                        </Button>
                    </Link>
                </div>
                {children}
            </Form>
        </section>
    )
}
export default AuthFormWrapper