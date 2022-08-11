import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Register.module.css';

function Register() {
    return (
        <div className={styles.container}>
            <h3 style={{ textAlign: "center" }}>Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username.." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat Password" />
                </Form.Group>
                <Button variant="primary" type="submit" >Submit</Button>
            </Form>
        </div>
    )
}

export default Register;