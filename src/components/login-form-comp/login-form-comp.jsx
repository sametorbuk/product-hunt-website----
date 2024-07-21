import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

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
        terms: true,
        name: false
    })

    const errormessages = {
        email: "email is required",
        password: "password is required",
        name: "name is required",
        terms: "please confirm"
    }


    const changeHandler = (e) => {
        const { type, name, value } = e.target
        setSignUpFormData({ ...signUpFormData, [name]: type === "checkbox" ? "checked" : value })

        if (name === "name") {
            if (value.length < 5) {
                setErrors({ ...errors, [name]: true })
            } else {
                setErrors({ ...errors, [name]: false })
            }
        }

        if (name === "password") {
            if (value.length < 5) {
                setErrors({ ...errors, [name]: true })
            } else {
                setErrors({ ...errors, [name]: false })
            }
        }

        const validateEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };

        if (name === "email") {
            setErrors({ ...errors, [name]: !(validateEmail(value)) })
        }


        if (name === "checkbox") {
            if (value === "checked") {
                setErrors({ ...errors, [name]: false })
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }


    }





    const submitHandler = (e) => {
        e.preventDefault();

        console.log(signUpFormData)
        console.log(errors)

    }




    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>SIGN FORM</ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitHandler}>

                        <FormGroup>
                            <Label htmlFor='name' >Name</Label>
                            <Input onChange={changeHandler} name="name" type='name' id="name" placeholder='enter your name' />
                            {errors.name && <FormFeedback style={{ color: "red", display: "block" }}>{errormessages.name}</FormFeedback>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input onChange={changeHandler} type="email" name="email" id="email" placeholder="Enter your email" />
                            {errors.email && <FormFeedback style={{ color: "red", display: "block" }}>{errormessages.email}</FormFeedback>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input onChange={changeHandler} type="password" name="password" id="password" placeholder="Enter your password" />
                            {errors.password && <FormFeedback style={{ color: "red", display: "block" }}>{errormessages.password}</FormFeedback>}
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="terms">I accept the terms and conditions</label>
                            <Input onChange={changeHandler} name="terms" type="checkbox" id="terms" />
                            {errors.terms && <FormFeedback style={{ color: "red", display: "block" }}>{errormessages.terms}</FormFeedback>}


                        </FormGroup>

                        <Button disabled={signUpFormData.email.length < 5
                            || signUpFormData.name.length < 5 ||
                            signUpFormData.password.length < 4} color="primary" type="submit">Submit</Button>
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

LoginModals.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};





export default LoginModals;