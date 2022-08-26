import React, {useRef} from 'react';
import {Container, Row, Button, Col} from "reactstrap";
import {useState, useEffect} from "react";
//import * as user from "laravel-mix";

const Dashboard = () => {

    const [user, setUser] = useState([])
    const [status, setStatus] = useState([])

    useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = async () => {
        await axios.get(`http://127.0.0.1:8000/api/user`).then(({data})=>{
            setUser(data)
            setStatus(data.status)
        })
    }

    const updateStatus = async (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
        const formData = new FormData()
        formData.append('status', e.target.value)
        await axios.post(`http://127.0.0.1:8000/api/user/status`, formData);

    }

  return(
    <Container >
        <Row className={'mt-5 ms-auto row-content' } style={{textAlign: "center"}} expand='md'>
            <h1>Welcome to workforce!</h1>
        </Row>
        <Row>
            <p>Name of employee: {user.name}</p>
        </Row>
        <Row>
            <p>Position in the company: {user.position}</p>
        </Row>
        <Row>
            <h4>Your current status is: {status}</h4>
        </Row>
        <Row className={'mt-2'}>
            <Col md={'4'}>
                <Button id={'online-btn'} className={'btn-block'} color='primary' onClick={updateStatus} value={'online'}>
                    online
                </Button>
            </Col>
            <Col md={'4'}>
                <Button id={'break-btn'} color='primary' onClick={updateStatus} value={'break'}>
                    break
                </Button>
            </Col>
            <Col md={'4'}>
                <Button id={'offline-btn'} color='primary' onClick={updateStatus} value={'offline'}>
                    offline
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default Dashboard;
