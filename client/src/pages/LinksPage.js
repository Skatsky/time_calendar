import React, { Component } from 'react'

class LinksPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           students: [
            { day: "Monday", '1:00': true, '2:00': true, '3:00': true, '4:00': true, '5:00': true, '6:00': true, '7:00': true, '8:00': true, '9:00': true, '10:00': true, '11:00': true, '12:00': true, '13:00': true, '14:00': true, '15:00': true, '16:00': true, '17:00': true, '18:00': true, '19:00': true, '20:00': true, '21:00': true, '22:00': true, '23:00': true, '24:00': true},
            { day: "Tuesday", '1:00': true, '2:00': true, '3:00': true, '4:00': true, '5:00': true, '6:00': true, '7:00': true, '8:00': true, '9:00': true, '10:00': true, '11:00': true, '12:00': true, '13:00': true, '14:00': true, '15:00': true, '16:00': true, '17:00': true, '18:00': true, '19:00': true, '20:00': true, '21:00': true, '22:00': true, '23:00': true, '24:00': true},
            { day: "Wednesday", '1:00': true, '2:00': true, '3:00': true, '4:00': true, '5:00': true, '6:00': true, '7:00': true, '8:00': true, '9:00': true, '10:00': true, '11:00': true, '12:00': true, '13:00': true, '14:00': true, '15:00': true, '16:00': true, '17:00': true, '18:00': true, '19:00': true, '20:00': true, '21:00': true, '22:00': true, '23:00': true, '24:00': true},
            { day: "Thursday", '1:00': true, '2:00': true, '3:00': true, '4:00': true, '5:00': true, '6:00': true, '7:00': true, '8:00': true, '9:00': true, '10:00': true, '11:00': true, '12:00': true, '13:00': true, '14:00': true, '15:00': true, '16:00': true, '17:00': true, '18:00': true, '19:00': true, '20:00': true, '21:00': true, '22:00': true, '23:00': true, '24:00': true},
            { day: "Friday", '1:00': true, '2:00': true, '3:00': true, '4:00': true, '5:00': true, '6:00': true, '7:00': true, '8:00': true, '9:00': true, '10:00': true, '11:00': true, '12:00': true, '13:00': true, '14:00': true, '15:00': true, '16:00': true, '17:00': true, '18:00': true, '19:00': true, '20:00': true, '21:00': true, '22:00': true, '23:00': true, '24:00': true},
            { day: "Saturday", '1:00': true, '2:00': true, '3:00': true, '4:00': true, '5:00': true, '6:00': true, '7:00': true, '8:00': true, '9:00': true, '10:00': true, '11:00': true, '12:00': true, '13:00': true, '14:00': true, '15:00': true, '16:00': true, '17:00': true, '18:00': true, '19:00': true, '20:00': true, '21:00': true, '22:00': true, '23:00': true, '24:00': true},
            { day: "Sunday", '1:00': true, '2:00': true, '3:00': true, '4:00': true, '5:00': true, '6:00': true, '7:00': true, '8:00': true, '9:00': true, '10:00': true, '11:00': true, '12:00': true, '13:00': true, '14:00': true, '15:00': true, '16:00': true, '17:00': true, '18:00': true, '19:00': true, '20:00': true, '21:00': true, '22:00': true, '23:00': true, '24:00': true}
           ]
        }
    }

    postCalendar = () => {
        const std = this.state.students
        console.log(std)
    }
  
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
    }    

    styleHandler = (e) => {
        e.target.classList.toggle('busy')
        if (this.state.students[parseFloat(e.target.id)][e.target.attributes[2].value]) {
            this.state.students[parseFloat(e.target.id)][e.target.attributes[2].value] = false
        } else if (!this.state.students[parseFloat(e.target.id)][e.target.attributes[2].value]) {
            this.state.students[parseFloat(e.target.id)][e.target.attributes[2].value] = true
        }
        
        // const std = this.state.students
        // console.log(std)
        console.log(e)
    }

    // frefreshPage() {
    //     window.location.reload(false);
    // }
  
    renderTableData() {
        return this.state.students.map((student, index) => {
            const { day } = student //destructuring 
            return (
                <tr key={day}>
                    <td>{day}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="1:00">{this.state.students[index]['1:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="2:00">{this.state.students[index]['2:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="3:00">{this.state.students[index]['3:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="4:00">{this.state.students[index]['4:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="5:00">{this.state.students[index]['5:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="6:00">{this.state.students[index]['6:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="7:00">{this.state.students[index]['7:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="8:00">{this.state.students[index]['8:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="9:00">{this.state.students[index]['9:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="10:00">{this.state.students[index]['10:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="11:00">{this.state.students[index]['11:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="12:00">{this.state.students[index]['12:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="13:00">{this.state.students[index]['13:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="14:00">{this.state.students[index]['14:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="15:00">{this.state.students[index]['15:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="16:00">{this.state.students[index]['16:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="17:00">{this.state.students[index]['17:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="18:00">{this.state.students[index]['18:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="19:00">{this.state.students[index]['19:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="20:00">{this.state.students[index]['20:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="21:00">{this.state.students[index]['21:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="22:00">{this.state.students[index]['22:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="23:00">{this.state.students[index]['23:00']}</td>
                    <td className="free" id={index} onClick={this.styleHandler} value="24:00">{this.state.students[index]['24:00']}</td>
                </tr>
            )
    })
    }
  
     render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                 </tbody>
                </table> 
                <div className="buttonDiv">
                    <button onClick={this.postCalendar} className="buttonSave">Save</button>
                </div>
            </div>
        )
     }
}
// () => window.location.reload(false)
export default LinksPage