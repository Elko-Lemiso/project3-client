import React, { Component } from 'react'
import './Signup.scss'
import {login} from "../utils/auth";

class Login extends Component {
    constructor(props){
        super(props)
        this.loginSubmit = this.loginSubmit.bind(this)
        this.state = {
            user: {}, 
            error:{}
        }
    }
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
          this.setState = (state,callback)=>{
          return;
          };
      }

    handleChange = (event) =>{
        let newState = {...this.state.user}
        let { name, value } = event.target;
        newState[name] = value;
        this.setState({
            user: newState
      })
    }
    
    loginSubmit(e){
        e.preventDefault()
        login(this.state.user)
        .then((response)=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/welcome") 
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }
  
    placeholderStyling(){
      this.setState({
        formAdjusted: true
      })
    }
  
    render() {
      return (
        <div id="signup" className="signup big-container">
          <h1>LOGIN</h1>
            <div>
            <form onSubmit = {(e) => this.loginSubmit(e)} className="form-styling">
                <div className="column column-60">
                    <label>Email address</label>
                    <input type="text" name="email" onChange={this.handleChange}/>
                </div>
                <div className="column column-40">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="green heartbeat">Sign up</button>
                {
                    this.state.error && <p>123</p>
                }
            </form>
          </div>
        </div>
      )
    }
  }
  
  export default Login
  