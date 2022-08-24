import React, {useEffect, useState} from 'react';
import { Card, CardBody, Container, Row} from "reactstrap";
import {useNavigate} from "react-router-dom";

const Notifications = () => {

    const [requests, setRequests] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await axios.get(`http://127.0.0.1:8000/api/requests/employee`).then(({data}) => {
            setRequests(data)
        })

        await axios.get(`http://127.0.0.1:8000/api/user`).then(({data})=>{
            setUser(data)
        })
    }

    return(
        <Container>
            {requests.map(request => (
                <Card className='mt-3' key={request.id}>
                    <CardBody>
                        <Row>
                            <p>Dear {user.name}</p>
                            <p>
                                Your request: <b>"{request.title}"</b>  has status: <b>{request.request_status}</b>
                            </p>
                        </Row>
                        <Row>
                            <p>
                                Date: {request.updated_at}
                            </p>
                        </Row>
                    </CardBody>
                </Card>
            ))}
        </Container>
    );
}

export default Notifications;
