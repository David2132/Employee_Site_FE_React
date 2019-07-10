import React from 'react';
import './App.css';




class App extends React.Component {
  render(){
    let styles = {
      textAlign: 'center',
      backgroundColor: '#C0C0C0	',
      padding: '10pt'
    };
    return (<h1 style={styles}>Coding Challenge in React</h1>)
  }
  // constructor() {
  //   super()
  //   this.state = {
  //     employees: []
  //   }
  // }
  // componentDidMount() {

  //   axios.get(`https://localhost:5000/skill`)
  //     .then(res => {
  //       const persons = res.data;
  //       console.log(persons)
  //       this.setState({ employees: persons });
  //     })

  // }
  // render() {
  //   var { employees } = this.state
  //   console.log(employees)
  //   return (
  //     <div>
  //       <p>Hello</p>
  //       <p>{employees}</p>
  //       {/* <table>
  //               {employees.map(employee=>(
  //                   <tr key={employee.id}>
  //                       <td>
  //                           {employee}
  //                       </td>
  //                       <td>
                    
  //                       </td>
  //                   </tr>
  //               ))}
  //           </table> */}
  //     </div>
  //   )
  // }

}
export default App;
