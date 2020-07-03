import React, { Component } from 'react'
import {getUser} from '../../utils/auth'
import {addJob} from '../../utils/postJob'
import {editJob} from '../../utils/postJob'
import {Redirect } from 'react-router-dom';
import './../Form.scss';

class PostJob extends Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleChangeImages = this.handleChangeImages.bind(this);
    this.uploadJob = this.uploadJob.bind(this);
    this.postJob = this.postJob.bind(this);
    this.state = {
      uploadedImages : 0,
      uploading: false,
      stage: 1,
      jobData: {
        jobId: null,
        address: {},
        images:[]
      },
      error: null
    }
  }
  postJob(){
    addJob(this.state.jobData)
    .then((response)=>{

      let newUserObject = {...this.state.jobData};
      newUserObject.jobId = response.data._id;

      this.setState({
        jobData: newUserObject
      })
    })
    .catch((error)=>{
      this.setState({
        error: error.response.data.message
      })
    })
  }

  jobStructure(){
    editJob(this.state.jobData)
    .then((response)=>{
      console.log(response)
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
  }
  handleAddressChange(event){
    debugger
    let newJobData = {...this.state.jobData};
    newJobData.address[event.target.name] = event.target.value;
    this.setState({
      jobData: newJobData
    })
  }
  handleChangeImages(event){
    let formData = new FormData();
    formData.append("images", event.target.files[0])
    let newJobData ={...this.state.jobData};
    newJobData.images.push(formData)
    this.setState({
      jobData : newJobData,
      uploading: true
    })
    editJob(this.state.jobData)
    .then((response)=>{
      this.setState({
        uploadedImages: this.state.uploadedImages + 1,
        uploading: false
      })
    })
  }


  render() {
    if(!getUser()){return(<Redirect to="/" />)} else{
      return(
        <div>
        {
        this.state.stage===1 &&
        <div className="stage-1">
          <div id="edit-profile" className="edit-profile">
            <form encType="multipart/form-data" ref={this.formRef} className="form-styling">
              <h1>WHAT DO YOU NEED DONE?</h1>
              <label>Give your job a title</label>
              <input className="title" type="text" value={this.state.jobData.title} name="title" onChange={this.handleChange}/>
              <label>Describe what needs doing</label>
              <textarea className="bio" type="text" value={this.state.jobData.bio} name="description" onChange={this.handleChange}/>
              <label>What are you paying?</label>
              <input type="number" name="rate" value={this.state.jobData.rate} onChange={this.handleChange}/>
              <button onClick={(event)=>{
                event.preventDefault();
                this.postJob();
                this.setState({
                  stage : 2
                })
              }} type="submit" className="title-blue">Next</button>
            </form>
          </div>
        </div>
            }
            {
            this.state.stage === 2 &&
            <div className="stage-2">
              <div id="edit-profile" className="edit-profile">
                <form encType="multipart/form-data" ref={this.formRef} className="form-styling">
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
                  </div>
                  <button onClick={(event)=>{
                      event.preventDefault();
                      this.jobStructure();
                      this.setState({
                        stage : 3
                      })
                    }} type="submit" className="title-blue">Next</button>
                </form>
            </div>
          </div>
            }
            {
              this.state.stage === 3 &&
              <div className="stage-2">
                <div id="edit-profile" className="edit-profile">
                <form encType="multipart/form-data" ref={this.formRef} className="form-styling">
                  <div className="row">
                    <div className="column column-50">
                      
                    </div>
                    <div className="column column-50">
                      <label>When does the cleaner need to be complete?</label>
                      <input type="date" name="dueDate" value={this.state.jobData.dueDate} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <button onClick={(event)=>{
                    event.preventDefault();
                    this.jobStructure();
                    this.setState({
                      stage : 4
                    })
                  }} type="submit" className="title-blue">Next</button>
                </form>
                  </div>
                </div>
            }
            {
              this.state.stage === 4 &&
              <div className="stage-2">
                <div id="edit-profile" className="edit-profile">
                  <form encType="multipart/form-data" ref={this.formRef} className="form-styling">
                    <label className="">Lets see what it looks like</label>
                    <input type="file" onChange={(event)=>{ this.handleChangeImages(event);}} className="images-input" name="images" />
                    <button  type="submit" className="title-blue">Done</button>
                    <p>{this.state.error}</p>
            </form>
          </div>
      </div>
    }
      </div>
      )
    }
  }
}

export default PostJob