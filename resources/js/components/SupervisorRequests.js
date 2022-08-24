import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'


const SupervisorRequest = () => {
    const [requests, setRequests] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await axios.get(`http://127.0.0.1:8000/api/requests`).then(({data}) => {
            setRequests(data)
        })

        await axios.get(`http://127.0.0.1:8000/api/users`).then(({data})=>{
            setUsers(data)
        })
    }

    const changeRequestStatus = async (id, status) => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('request_status', status);

        await axios.post(`http://127.0.0.1:8000/api/requests/status`, formData);
        window.location.reload(false);

    }

    return (
        <Container>
            {requests.map(request => (
                <Card key={request.id} className='mt-3' >
                    <CardHeader className='bg-primary text-white'>
                        <h3>{request.title}</h3>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <p>{request.description}</p>
                        </Row>
                        <Row>
                            <p>
                                Employee name: {users.filter(user => user.id === request.employee_id).map(el => (el.name))}
                            </p>
                        </Row>
                        <Row>
                            <p>
                                Date: {request.created_at}
                            </p>
                        </Row>
                        <Row className={'mt-2'}>
                            <Col md={'1'}>
                                <Button id={'accept-btn'} color={'success'} onClick={() => changeRequestStatus(request.id, 'accept')} value={'Accept'}>
                                    Accept
                                </Button>
                            </Col>
                            <Col md={'1'}>
                                <Button id={'reject-btn'} color={'danger'} onClick={() => changeRequestStatus(request.id, 'reject')} value={'Reject'}>
                                    Reject
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            ))}
        </Container>
    );
}

export default SupervisorRequest;
