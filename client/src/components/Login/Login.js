import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Login.module.css';
import { login } from '../../services/userService';
import { loginAction } from '../../redux/actions/authenticationAction';
import { useState } from 'react';

function Login() {
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let { username, password } = Object.fromEntries(formData);

        const response = await login({ username, password });
        const data = await response.json();

        setFormSubmited(true);

        if (response.ok) {
            dispatch(loginAction(data));
            setValidated(true);
            navigate('/');
        } else {
            setError(data.message);
        }
    }

    return (
        <div className={styles.container}>
            <h3 style={{ textAlign: "center" }}>Login</h3>
            <Form noValidate onSubmit={submitHandler}>
                {
                    !validated
                        ? <h6 style={{ textAlign: 'center', color: 'darkred' }}>{error}</h6>
                        : ''
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username.."
                        name='username'
                        isInvalid={!validated && formSubmited}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password.."
                        name='password'
                        isInvalid={!validated && formSubmited}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;