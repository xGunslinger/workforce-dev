import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RequestForm = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const createRequest = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('user_id', props.data)
        formData.append('title', title)
        formData.append('description', description)

        console.log(title);

        await axios.post(`http://127.0.0.1:8000/api/request`, formData)
        navigate("/dashboard")
    }

    return (
        <div className={'mt-5'}>
            <Form onSubmit={createRequest}>
                <Row>
                    <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(event)=>{
                                setTitle(event.target.value)
                            }}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(event)=>{
                                setDescription(event.target.value)
                            }}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Send
                </Button>
            </Form>
        </div>

    )
}

export default RequestForm;
