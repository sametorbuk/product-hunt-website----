import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const initialvalues = {
    email: "",
    password: "",
    name: "",
    terms: false
}




function LoginModals(props) {
    const { modal, toggle } = props
    const [signUpFormData, setSignUpFormData] = useState(initialvalues)


    const [errors, setErrors] = useState({
        email: false,
        password: false,
        terms: false,
        name: false
    })

    const errormessages = {
        email: "email is required",
        password: "password is required",
        name: "name is required",
    }





    const changeHandler = (e) => {
        const { name, value, type } = e.target
        setSignUpFormData({ ...signUpFormData, [name]: type === "checkbox" ? "checked" : value })
        if (name === "email") {
            setErrors(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        } else if (name === "password") {
            setErrors(value.length < 5)
        } else if (name === "name") {
            setErrors(value < 5)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(signUpFormData)

    }




    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitHandler}>

                        <FormGroup>
                            <Label htmlFor='name' >Name</Label>
                            <Input onChange={changeHandler} name="name" type='name' id="name" placeholder='enter your name' />


                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input onChange={changeHandler} type="email" name="email" id="email" placeholder="Enter your email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input onChange={changeHandler} type="password" name="password" id="password" placeholder="Enter your password" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="terms">I accept the terms and conditions</label>
                            <Input onChange={changeHandler} checked={signUpFormData.terms} name="terms" type="checkbox" id="terms" />


                        </FormGroup>

                        <Button color="primary" type="submit">Submit</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default LoginModals;