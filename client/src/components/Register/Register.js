import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { loginAction } from '../../redux/actions/authenticationAction';
import { register } from '../../services/userService';
import styles from './Register.module.css';

function Register() {
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        const formData = new FormData(form);
        let { username, password } = Object.fromEntries(formData);

        const response = await register({ username, password });
        const data = await response.json();

        if (response.ok) {
            dispatch(loginAction(data));
            navigate('/');
        } else {
            setValidated(false);
        }
    };

    return (
        <div className={styles.container}>
            <h3 style={{ textAlign: "center" }}>Register</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username.." name='username' required minLength={3} />
                    <Form.Control.Feedback type="invalid">
                        Usernames should be at least 3 characters long.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password.."
                        required
                        minLength={5}
                        name='password'
                        onInput={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Passwords should be at least 5 characters long.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repeat Password.."
                        required
                        minLength={5}
                        pattern={password}
                    />
                    <Form.Control.Feedback type="invalid">
                        Passwords should match.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default Register;