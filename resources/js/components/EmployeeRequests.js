import {Button, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import RequestForm from "../components/RequestForm";


const EmployeeRequests = () => {
    const [showFormVar, setShowForm] = useState(false);
    const [users, setUsers] = useState([]);

    const showForm = () => {
        setShowForm(!showFormVar);
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async () => {
        await axios.get(`http://127.0.0.1:8000/api/supervisors`).then(({data})=>{
            setUsers(data)
        })
    }

    return (
        <Container>
            {users.map(user => (
                <Row className="request-body" key={user.id}>
                    <Col className="md-2">
                        <h5>Name</h5>
                        {user.name}
                    </Col>
                    <Col className="md-2">
                        <h5>Position</h5>
                        {user.position}
                    </Col>
                    <Col className="md-2 ">
                        <h5>Last seen time</h5>
                        {user.last_seen}
                    </Col>
                    <Col className="md-2">
                        <Button color={'primary'} onClick={showForm}>
                            Request
                        </Button>
                    </Col>
                    { showFormVar ? <RequestForm data={user.id}/> : null }
                </Row>
            ))}

        </Container>
    );
}

export default EmployeeRequests;
