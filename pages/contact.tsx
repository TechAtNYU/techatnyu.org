import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, FloatingLabel, Row} from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";
import {Form,Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

export default function ContactUs() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: string) => alert(JSON.stringify(data));

    return (
        <div className="container contact_form">
            <h1>Get In Touch</h1>
            <Row className="g-2 contact_item">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Name">
                    <Form.Control type="text" placeholder="John Doe" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="g-2 contact_item">
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Role">
                    <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">Prospective Student</option>
                        <option value="2">Current Student</option>
                        <option value="3">Alumni</option>
                        <option value="3">Company</option>
                    </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Message Subject">
                        <Form.Control type="text" placeholder="Message Subject" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="g-2 contact_item">
                <FloatingLabel controlId="form-msg" label="Message" className="contact-item_form">
                    <Form.Control as="textarea" placeholder="Leave a Message here"/>
                </FloatingLabel>
            </Row>
            <div className="center">
                <Button variant="secondary" type="submit">
                Submit
                </Button>
            </div>

        </div>
    )
}
