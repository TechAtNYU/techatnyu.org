import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";
import {Form,Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

const contactusPageStyle = {
    padding: "0px 12px",
    paddingLeft: "72px"
} as React.CSSProperties;

const headerStyle = {
    fontSize: "84px",
    fontWeight: 700,
    marginTop: "154px",
    marginBottom:"64px",
    textAlign: "start"
} as React.CSSProperties;

const descriptionStyle = {
    fontSize:"18px",
    marginBottom:"40px",
    textAlign: "start",
} as React.CSSProperties;

const h1Style = {
    fontWeight : 500,
    fontSize: "30px",
    marginTop: "60px",
    marginBottom:"16px",

}

const h2style = {
    fontWeight : 400,
    fontSize: "22px",
    marginBottom:"16px"
}

const rowTextStyle = {
    fontWeight : 400,
    fontSize: "18px",
}

const mentorshipLogoStyle = {
    marginBottom: "-277px",
    marginLeft: "317px",
}



export default function ContactUs() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: string) => alert(JSON.stringify(data));

    return (
        <div style ={contactusPageStyle} >
            <h1 style={{margin: '30px 0px 30px 0px',}} className='font-weight-bold'> Contact Us</h1>
            <h4 style={{marginBottom: '30px',}}> We would like to hear from you! Fill up this form below or email us at <a href='mailto:hello@techatnyu.org'>hello@techatnyu.org</a>.</h4>
            <Form className='contact-form' onSubmit={handleSubmit(()=>onSubmit)}>
                <Form.Group controlId="formBasicEmail" className='formContents' style={{margin: '0px 0px 20px 0px'}}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We will never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formName" className='formContents' >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="message" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formSubject" className='formContents'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="subject" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="formRole" className='formContents'>
                    <Form.Label>I am a</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="3">Prospective Student</option>
                        <option value="1">Current Student</option>
                        <option value="3">Alumni</option>
                        <option value="2">Company</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formMessage" className='formContents'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="message" placeholder="Message" />
                </Form.Group>
                <div  id='contactButton' className='formContents'>
                    <Button variant="secondary" type="submit"
                            style={{marginTop: '30px', padding: '10px 30px 10px 30px'}}
                        >
                             Submit
                    </Button>
                </div>

            </Form>
        </div>
    )
}
