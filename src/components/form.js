import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import DataService from '../service/DataService';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            employee: props.status.employee,
            firstError: "",
            lastError: '',
            addressError: '',
            cityError: '',
            homeError: '',
            cellError: '',
            zipError: '',
            emailError: '',
            validated: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.save = this.save.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            employee: {
                ...this.state.employee,
                [name]: value
            }
        })
    }
    validator() {
        let emailError = "";
        let firstError = "";
        let lastError = "";
        let addressError = "";
        let cityError = "";
        let zipError = "";
        let homeError = "";
        let cellError = "";

        if (!this.state.employee.email) {
            emailError = "Email is required "
        }
        else if (!this.state.employee.email.includes("@")) {
            emailError = "Not a valid email "
        }
        else if (this.state.employee.email.length < 10) {
            emailError = "Email has to be minimum 8 characters"
        }
        else if (this.state.employee.email.length > 50) {
            emailError = "Email has to be maximum 35 character "
        }
        
        if (!this.state.employee.first_NAME) {
            firstError = "First name is required"
        }
        else if (this.state.employee.first_NAME.length > 35) {
            firstError = "First name must be maximum 35 character "
        }
        else if (this.state.employee.first_NAME.length < 2) {
            firstError = "First name must be minimum 2 character "
        }
        
        if (!this.state.employee.last_NAME) {
            lastError = "Last name is required"
        }
        else if (this.state.employee.last_NAME.length > 35) {
            lastError = "Last name must be maximum 35 character "
        }
        else if (this.state.employee.last_NAME.length < 2) {
            lastError = "Last name must be minimum 2 character "
        }
        
        if (!this.state.employee.address) {
            addressError = "Address is required"
        }
        else if (this.state.employee.address.length > 35) {
            addressError = "Address must be maximum 35 character "
        }
        else if (this.state.employee.address.length < 8) {
            addressError = "Address must be minimum 8 character "
        }
        
        if (!this.state.employee.city) {
            cityError = "City is required"
        }
        else if (this.state.employee.city.length > 50) {
            cityError = "City must be maximum 50 character "
        }
        else if (this.state.employee.city.length < 5) {
            cityError = "City must be minimum 5 character "
        }
        
        if (!this.state.employee.zip) {
            zipError = "Zip is required"
        }
        else if (this.state.employee.zip.length > 9) {
            zipError = "Zip must be maximum 50 character "
        }
        else if (this.state.employee.zip.length < 5) {
            zipError = "Zip must be minimum 5 character "
        }
        
        if (!this.state.employee.home_PHONE) {
            homeError = "Home phone is required"
        }
        else if (this.state.employee.home_PHONE.length !== 10) {
            homeError = "Not a valid home phone number"
        }
        
        if (!this.state.employee.cell_PHONE) {
            cellError = "Cell phone is required"
        }
        else if (this.state.employee.cell_PHONE.length !== 10) {
            cellError = "Not a valid cell phone number"
        }
        let validated = false
        if (!emailError &&
            !firstError &&
            !lastError &&
            !addressError &&
            !cityError &&
            !zipError &&
            !cellError &&
            !homeError) {
            validated = true
        }
        this.setState({
            ...this.state,
            emailError,
            firstError,
            lastError,
            addressError,
            cityError,
            zipError,
            homeError,
            cellError,
            validated
        })
    }
    save() {
        this.validator();
        if (this.props.status.newEmp && this.state.validated) {
            DataService.addEmployee(this.state.employee)
            window.location.href = "/employees";

        }
        else if (this.state.validated) {
            DataService.updateEmployee(this.state.employee)
            window.location.href = '/employees'
        }
    }

    render() {
        
        const style = {
            textAlign: 'center'
        }
        const style1 = {
            marginLeft: '35%',
            width: '30%',
            border: '2px solid black'

        }
        const style2 = {
            marginLeft: '30%'
        }
        var page = null;
        if (this.props.status.newEmp)
            page = 'Add'
        else
            page = 'Edit'


        return (<div >
            <Table striped bordered style={style1}>
                <thead>
                    <tr>
                        <td colSpan='2'>
                            <h3 style={style}>{page} Employee</h3>

                        </td>
                    </tr>
                </thead>
                <tbody style={{ borderCollapse: 'collapse' }}>
                    <tr>
                        <td>
                            First Name:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="first_NAME"
                                value={this.state.employee.first_NAME}
                                onChange={this.handleChange}>
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.firstError}
                                </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="last_NAME"
                                value={this.state.employee.last_NAME}
                                onChange={this.handleChange}>
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.lastError}
                                </b>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Address:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="address"
                                value={this.state.employee.address}
                                onChange={this.handleChange}
                            >
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.addressError}
                                </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            City:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="city"
                                value={this.state.employee.city}
                                onChange={this.handleChange}>
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.cityError}
                                </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            State:
                    </td>
                        <td>
                            <select
                                name='state'
                                value={this.state.employee.state}
                                onChange={this.handleChange}
                            >
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Zip/Postal Code:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="zip"
                                value={this.state.employee.zip}
                                onChange={this.handleChange}>
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.zipError}
                                </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Home Phone Number:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="home_PHONE"
                                value={this.state.employee.home_PHONE}
                                onChange={this.handleChange}>
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.homeError}
                                </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Cell Phone Number:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="cell_PHONE"
                                value={this.state.employee.cell_PHONE}
                                onChange={this.handleChange}>
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.cellError}
                                </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email Address:
                    </td>
                        <td>
                            <input
                                type='text'
                                name="email"
                                value={this.state.employee.email}
                                onChange={this.handleChange}>
                            </input>
                            <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.emailError}
                                </b>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2' style={style2}>
                            < a href="/employees">
                                <Button>Cancel</Button>
                            </a>
                            <Button style={{ marginLeft: "5pt" }} onClick={this.save}>Submit</Button>
                        </td>

                    </tr>

                </tbody>
            </Table>
        </div>)
    }
}
export default Form