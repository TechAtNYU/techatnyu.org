import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, FloatingLabel, Row} from "react-bootstrap";
import {Form,Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import querystring from 'querystring';
const submitFeedbackForm =
    async (
        name: string,
        email: string,
        subject: string,
        role: string,
        message: string) => {
            const link = "https://docs.google.com/forms/d/e/1FAIpQLSfkETyG8-Wdvh-sMsOR76cJxgzJtQFuPDMQ6o5-b3l4exiYhA/formResponse";
            const body= {
                "entry.1527123451": name,
                "entry.411955149": email,
                "entry.1640709833": subject,
                "entry.1401865066": role,
                "entry.538667600": message,
            };
            console.log(body);
            const headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            try {
                const response =
                    await fetch(link,
                        {body:  querystring.stringify(body),
                            headers: headers,
                            method: "POST"

                        });
                    // await axios.post(link, querystring.stringify(body), {headers:headers});
                return response.status === 200;
            } catch (e) {
                console.error(e);
                return false;
            }
}

export default function ContactUs() {

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data: { [x:string]: string }) => {
        const status = await submitFeedbackForm(data.name,data.email, data.subject, data.role, data.message);
        alert(status);
    };

    return (
        <div className="container contact_form">
            <h1>Get In Touch</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="g-2 contact_item">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Name">
                            <Form.Control type="text" placeholder="John Doe" {...register("name")}/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                            <Form.Control type="email" placeholder="name@example.com"  {...register("email")} />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="g-2 contact_item">
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Role">
                            <Form.Select aria-label="Floating label select example" {...register("role")} >
                                <option>Open this select menu</option>
                                <option value="Prospective Student">Prospective Student</option>
                                <option value="Current Student">Current Student</option>
                                <option value="Alumni">Alumni</option>
                                <option value="Company">Company</option>
                                <option value="Others">Others</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Message Subject">
                            <Form.Control type="text" placeholder="Message Subject"  {...register("subject")} />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="g-2 contact_item">
                    <FloatingLabel controlId="form-msg" label="Message" className="contact-item_form">
                        <Form.Control as="textarea" placeholder="Leave a Message here" {...register("message")} />
                    </FloatingLabel>
                </Row>
                <div className="center">
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>

        </div>
    )
}
