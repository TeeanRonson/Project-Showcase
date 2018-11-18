import React, {Component} from 'react';
import '../../css/App.css';


class Reception extends Component {

    render() {
      return (
        <div className="App">
          <div className="App__Aside"></div>

          <div className="App__Form">
            <div className="FormTitle">
              <a href="#" className="FormTitle__Link">Sign In</a> or 
              <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
            </div>

            <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="username">Username</label>
                  <input type="text" id="username" className="FormField_Input" placeholder="Enter your username" name="username"/>
                </div>
              </form>
            </div>

            <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="username">First Name</label>
                  <input type="text" id="firstname" className="FormField_Input" placeholder="Enter your first name" name="firstname"/>
                </div>
              </form>
            </div>

            <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="lastname">Last Name</label>
                  <input type="text" id="lastname" className="FormField_Input" placeholder="Enter your last name" name="lastname"/>
                </div>
              </form>
            </div>

             <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="email">E-mail</label>
                  <input type="text" id="email" className="FormField_Input" placeholder="Enter your email" name="useemailrname"/>
                </div>
              </form>
            </div>

             <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="password">Password</label>
                  <input type="text" id="password" className="FormField_Input" placeholder="Enter your password" name="password"/>
                </div>
              </form>
            </div>

             <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="password">Confirm Password</label>
                  <input type="text" id="confirm" className="FormField_Input" placeholder="Re-enter your password" name="confirm"/>
                </div>
              </form>
            </div>

             <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="password">Linked In</label>
                  <input type="text" id="linkedin" className="FormField_Input" placeholder="Enter your linkedin" name="linkedin"/>
                </div>
              </form>
            </div>

            <div className="FormField">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlfor="password">Github</label>
                  <input type="text" id="Github" className="FormField_Input" placeholder="Enter your Github" name="Github"/>
                </div>
              </form>
            </div>

            <div className="FormField">
              <button className="FormField_Button mr-20"> Sign Up </button> 
              <a className="FormField__Link" href="#">Already a member</a>
            </div>

          </div>
        </div>
      )
    }
}

export default Reception;