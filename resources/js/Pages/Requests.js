import {useEffect, useState} from "react";
import EmployeeRequests from "../components/EmployeeRequests";
import SupervisorRequests from "../components/SupervisorRequests";


const Requests = () => {
    const [supervisor, setSupervisor] = useState(false)

    useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = async () => {
        await axios.get(`http://127.0.0.1:8000/api/user`).then(({data})=>{
            console.log(data.position)
            if (data.position === 'supervisor') {
                setSupervisor(true)
            } else {
                setSupervisor(false)
            }
        })
    }

return (
        <>
            {supervisor ? <SupervisorRequests /> : <EmployeeRequests /> }
        </>
    )

}

export default Requests
