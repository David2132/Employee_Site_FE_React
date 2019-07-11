import React from 'react';
import Form from './form';
import DataService from '../service/DataService';
// import Table from 'react-bootstrap/Table';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom'


class Employees extends React.Component {
    constructor(props) {
        if (!DataService.authenticated)
            props.history.push('/login')
        super(props);
        this.state = {
            isLoading: true,
            toForm: false,
            data: [],
            employee: null,
            newEmp: true
        }
        this.getEmployees = this.getEmployees.bind(this)
        this.edit = this.edit.bind(this)
        this.add = this.add.bind(this)
    }
    componentDidMount() {
        this.getEmployees()

    }
    getEmployees(){
        setTimeout( ()=>{DataService.retrieveAllEmployees().then(
            response => {
                console.log("hello")
                this.setState({
                    isLoading: false,
                    data: response.data
                })
            }

        )}, 500)
    }
    edit(emp) {
        console.log(emp.first_NAME + ' ' + emp.last_NAME)
        this.setState({
            isLoading: false,
            toForm: true,
            data: this.state.data,
            employee: emp,
            newEmp: false
        })
    }
    add() {
        var emp = {
            first_NAME: '',
            last_NAME: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            home_PHONE: '',
            cell_PHONE: '',
            email: ''
        }
        this.setState({
            isLoading: false,
            toForm: true,
            employee: emp,
            newEmp: true
        })
    }

    render() {
        const style = {
            border: '2px solid black',
            width: '60%',
            marginLeft: '20%'


        }

        const data = this.state.data;


        if (this.state.isLoading)
            return (<h2 style={{textAlign:'center'}}>loading...</h2>)
        if (this.state.toForm)
            return <Form status={this.state} />

        return (<div>

            <Button onClick={
                this.add} style={{ cursor: 'pointer', marginLeft: '20%', marginBottom: '5pt' }}>
                Add New Employee
            </Button>
            <Table striped bordered hover style={style}>
                <thead>
                    <tr>
                        <th>
                            <b>Employee Name: </b>
                        </th>
                        <th>
                            <b>Employee's Email: </b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(emp => (
                        <tr key={emp.id}>
                            <td>
                                <p onClick={() => this.edit(emp)} style={{
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    color: 'blue'
                                }}>
                                    {emp.first_NAME} {emp.last_NAME}
                                </p>
                            </td>
                            <td>
                                {emp.email}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>)
    }
}

export default withRouter(Employees)