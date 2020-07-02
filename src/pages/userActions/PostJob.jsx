import React, { Component } from 'react'
import {addJob} from '../../utils/postJob'
import {Redirect } from 'react-router-dom';
import './../Form.scss';

class PostJob extends Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.uploadJob = this.uploadJob.bind(this);
    this.postJob = this.postJob.bind(this);
  }

  state = {
    jobData: {
      address: {}
    },
    error: null
  }


  postJob(){
    console.log('LALALALL',this.state);
    addJob(this.state.jobData)
    .then((response)=>{
        console.log(response);
        
      this.props.history.push("/profile");
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  uploadJob(event){
    var jobPicture = new FormData(this.formRef.current);
  }

  handleChange(event){
    let newJobData = {...this.state.jobData};
    newJobData[event.target.name] = event.target.value;
    this.setState({
      jobData: newJobData
    })
    console.log(this.state.jobData);
    
  }

  handleAddressChange(event){
    debugger
    let newUserObject = {...this.state.jobData};
    newUserObject.address[event.target.name] = event.target.value;
    this.setState({
      jobData: newUserObject
    })
  }

  render() {
    if(!this.state.user && !this.state.jobData){
      return(
        <Redirect to="/" />
      )
    } else{
      return(
        <div className="big-container">
          <div id="edit-profile" className="edit-profile">
            <h1>WHAT DO YOU NEED DONE?</h1>
            <form ref={this.formRef} className="form-styling">
              <label className="">Lets see what it looks like</label>
              <input type="file" className="images-input" name="images" onChange={this.handleChange}/> 
              <button onClick={(event)=>{
                  event.preventDefault();
                  this.uploadJob(event);
                }} type="submit" className="title-blue">Upload images</button>
            </form>
            <form className="form-styling">
                <label>Give your job a title</label>
                <input className="title" type="text" value={this.state.jobData.title} name="title" onChange={this.handleChange}/>
                <label>Describe what needs doing</label>
                <textarea className="bio" type="text" value={this.state.jobData.bio} name="description" onChange={this.handleChange}/>
              <div className="row">
                <div className="column column-50">
                  <label>What are you paying?</label>
                  <input type="number" name="rate" value={this.state.jobData.rate} onChange={this.handleChange}/>
                </div>
                <div className="column column-50">
                  <label>When does the cleaner need to be complete?</label>
                  <input type="date" name="dueDate" value={this.state.jobData.dueDate} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="row">
                  <h3>What is the location of the job?</h3>
                <div className="column column-60">
                  <label>Street</label>
                  <input type="text" name="street" value={this.state.jobData.address.street} onChange={this.handleAddressChange}/>
                </div>
                <div className="column column-20">
                  <label>Nr. </label>
                  <input type="number" name="houseNr" value={this.state.jobData.address.houseNr} onChange={this.handleAddressChange}/>
                </div>
                <div className="column column-20">
                  <label>Add.</label>
                  <input type="text" name="houseNrAddition" value={this.state.jobData.address.houseNrAddition} onChange={this.handleAddressChange}/>
                </div>
              </div>
              <div className="row">
                <div className="column column-60">
                  <label>City</label>
                  <input type="text" name="city" value={this.state.jobData.address.city} onChange={this.handleAddressChange}/>
                </div>
                <div className="column column-40">
                  <label>Zip code</label>
                  <input type="text" name="zipCode" value={this.state.jobData.address.zipCode} onChange={this.handleAddressChange}/>
                </div>
              </div>
              <button onClick={(event)=>{
                event.preventDefault();
                this.postJob();
              }} type="submit" className="title-blue">Post</button>
              <p>{this.state.error}</p>
            </form>
          </div>
      </div>
      )
    }
  }
}

export default PostJob