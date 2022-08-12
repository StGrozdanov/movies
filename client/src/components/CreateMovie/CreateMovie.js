import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const currentYear = new Date(Date.now()).getFullYear();

function CreateMovie() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div style={{width: '80vw', margin: '0 auto'}}>
            <h3 style={{ textAlign: "center", margin: '20px 0' }}>Create Movie</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Movie title</Form.Label>
                        <Form.Control
                            required
                            minLength={2}
                            type="text"
                            placeholder="Movie title"
                        />
                        <Form.Control.Feedback type="invalid">
                            Movie title should be at least 2 characters long.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            required
                            min={1988}
                            max={currentYear}
                            type="number"
                            placeholder="Year"
                        />
                        <Form.Control.Feedback type="invalid">
                            Movie release year should be between 1988 and {currentYear}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Cover image</Form.Label>
                        <Form.Control
                            required
                            pattern={"(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"}
                            type="text"
                            placeholder="Cover image"
                        />
                        <Form.Control.Feedback type="invalid">
                            Should be valid picture url.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group style={{ margin: '10px auto' }} as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder="Description" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a description.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button style={{ margin: '20px auto', display: 'block' }} type="submit">Create</Button>
            </Form>
        </div>
    );
}

export default CreateMovie;