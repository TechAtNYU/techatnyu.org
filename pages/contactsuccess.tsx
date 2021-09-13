import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


export default function ContactUsSuccess() {

    return (
        <div className="container contact_form">
            <h1>Get In Touch</h1>
            <div style={{marginTop: "50px", marginBottom: "50px"}} >
                <h5 className='font-weight-bold'> Message sent! We will get back to you as soon as possible.
                </h5>
            </div>
            <div   >
                <Button
                    variant='secondary'
                    size='lg'
                    href="/"
                >
                    Return Home
                </Button>
            </div>
        </div>
    )
}
