import React, { Component } from 'react'
import './../Form.scss';
import {login} from "../../utils/auth";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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

    loginSubmit(event){
        event.preventDefault()
        login(this.state.user)
        .then((response)=> {
            this.setState({
                error: null
            }, ()=> {
              this.props.history.push("/profile") 
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
        <div className="modal" >
          <div id="login" className="signup big-container  scale-up-center shadow-drop-2-bottom">
            <div className="exit-box">
              <p className="exit-btn"><Link to = "/">X</Link></p>
              
            </div>
            <h1>LOGIN</h1>
            <form className="form-styling" >
              <label>Email address</label>
              <input type="text" name="email" onChange={this.handleChange}/>
              <label>Password</label>
              <input type="password" name="password" onChange={this.handleChange}/>
              <button type="submit" onClick={(event) => {
                event.preventDefault();
                this.loginSubmit(event);
                }} className="title-blue heartbeat">Login</button>
            </form>
          </div>
        </div>
      )
    }
  }
  
  export default Login
  