import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import {Container} from "reactstrap";

const Schedule = () => {
    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2022-08-24T11:00', title: 'Meeting' },
        { startDate: '2018-11-01T12:00', endDate: '2022-08-26T13:30', title: 'Salary day' },
    ];
    console.log(currentDate)

    return (
        <Container>
            <Paper>
                <Scheduler
                    data={schedulerData}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={14}
                    />
                    <Appointments />
                </Scheduler>
            </Paper>
        </Container>
    )
}

export default Schedule;
