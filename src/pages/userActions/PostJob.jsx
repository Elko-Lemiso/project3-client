import React, { Component } from 'react'
import Nav from '../../components/Nav';
import {getUser} from '../../utils/auth'
import {addJob} from '../../utils/postJob'
import {editJob} from '../../utils/postJob'
import {editJobImage} from '../../utils/postJob'
import {geocode} from "../../utils/googleMaps";
import {Redirect } from 'react-router-dom';
import './PostJob.scss'
import './../Form.scss';

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class PostJob extends Component {
  constructor(props) {
    super(props)
    this.user=getUser()
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleChangeImages = this.handleChangeImages.bind(this);
    this.uploadJob = this.uploadJob.bind(this);
    this.postJob = this.postJob.bind(this);
    this.saveAddress = this.saveAddress.bind(this);
  }

  state = {
    uploadedImages : 0,
    uploading: false,
    stage: 1,
    jobData: {
      creator : getUser().id,
      jobId: null,
      address: {},
      images:[]
    },
    error: null
  }

  postJob(){
    debugger
    addJob(this.state.jobData)
    .then((response)=>{
      debugger
      let newUserObject = {...this.state.jobData};
      newUserObject.jobId = response.data._id;
      newUserObject.creator = this.user.id
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

  saveAddress(){
    let addressLine = '';
    if(this.state.jobData.address.street && this.state.jobData.address.city && this.state.jobData.address.houseNr){
      addressLine = `${this.state.jobData.address.street} ${this.state.jobData.address.houseNr} ${this.state.jobData.address.city}`;
      geocode(addressLine)
      .then((response)=>{
        console.log(response);
        let newUserObject = {...this.state.jobData};
        newUserObject.address['lat'] = response.data.geoLocation.lat;
        newUserObject.address['long'] = response.data.geoLocation.lng;
        this.setState({
          jobData: newUserObject
        });
        console.log(this.state.jobData);
      })
      .then(()=>{
        this.jobStructure();
      })
    } else if(this.state.jobData.address.street && this.state.jobData.address.city){
      addressLine = `${this.state.jobData.address.street} ${this.state.jobData.address.city}`;
      geocode(addressLine)
      .then((response)=>{
        console.log(response);
        let newUserObject = {...this.state.jobData};
        newUserObject.address['lat'] = response.data.geoLocation.lat;
        newUserObject.address['long'] = response.data.geoLocation.lng;
        this.setState({
          jobData: newUserObject
        });
        console.log(this.state.jobData);
      })
      .then(()=>{
        this.jobStructure();
      })
    }
    else {
      console.log('No valid address to get the geo location codes.');
      this.jobStructure();
    }
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
    let newJobData = {...this.state.jobData};
    newJobData.address[event.target.name] = event.target.value;
    this.setState({
      jobData: newJobData
    })
  }
  handleChangeImages(event){
    debugger
    let formData = new FormData();
    formData.append("images", event.target.files[0])
    formData.append("jobId", this.state.jobData.jobId)
    this.setState({
      uploading: true
    })
    editJobImage(formData)
    .then((response)=>{
      debugger
      console.log()
      this.setState({
        uploadedImages: this.state.uploadedImages + 1,
        uploading: false
      })
    })
  }

  render() {
    if(!getUser()){return(<Redirect to="/"/>)} else{
      return(
        <div className="wrapper">
          <Nav/>
        {
        this.state.stage===1 &&
        <div className="container .slide-in-right stage-1">
          <div className="edit-profile">
            <form encType="multipart/form-data"  className="form-styling">
              <h1>WHAT DO YOU NEED DONE?</h1>
              <label>Give your job a short title</label>
              <input className="title" type="text" value={this.state.jobData.title} name="title" onChange={this.handleChange}/>
              <label>Describe the job</label>
              <textarea className="bio" type="text" value={this.state.jobData.bio} name="description" onChange={this.handleChange}/>
              <label>Price per hour in €</label>
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
            <div className="container .slide-in-right stage-2">
              <div id="edit-profile" className="edit-profile">
                <form encType="multipart/form-data"  className="form-styling">
                  <div className="column">
                      <h3>What is the location of the job?</h3>
                    <div id = "col-100" className="column column-100">
                      <label>*Street</label>
                      <input type="text" name="street" value={this.state.jobData.address.street} onChange={this.handleAddressChange}/>
                    </div>
                    <div className="row">
                      <div className="column column-50">
                        <label>*Nr. </label>
                        <input type="number" name="houseNr" value={this.state.jobData.address.houseNr} onChange={this.handleAddressChange}/>
                      </div>
                      <div className="column column-50">
                        <label>Add.</label>
                        <input type="text" name="houseNrAddition" value={this.state.jobData.address.houseNrAddition} onChange={this.handleAddressChange}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column column-60">
                        <label>*City</label>
                        <input type="text" name="city" value={this.state.jobData.address.city} onChange={this.handleAddressChange}/>
                      </div>
                      <div className="column column-40">
                        <label>*Zip code</label>
                        <input type="text" name="zipCode" value={this.state.jobData.address.zipCode} onChange={this.handleAddressChange}/>
                      </div>
                    </div>
                  </div>
                  <button onClick={(event)=>{
                      event.preventDefault();
                      this.saveAddress();
                      this.setState({
                        stage : 3
                      })
                    }} type="submit" id="buttonAddress" className="title-blue">Next</button>
                </form>
            </div>
          </div>
            }
            {
              this.state.stage === 3 &&
              <div id = "stage-3" className="container .slide-in-right ">
                <form encType="multipart/form-data">
                    <label>When does the cleaner need to be complete?</label>
                    <input type="date" name="dueDate" value={this.state.jobData.dueDate} onChange={this.handleChange}/>
                    <button onClick={(event)=>{
                    event.preventDefault();
                    this.jobStructure();
                    this.setState({
                      stage : 4
                    })
                  }} type="submit" id = "button-calendar"className="title-blue">Next</button>
                </form>
              </div>
            }
            {
            this.state.stage === 4 &&
            <div id="stage-4" className="container .slide-in-right">
              <h6>You have selected {this.state.uploadedImages} images</h6>
                <form encType="multipart/form-data" className="form-styling">
                  <label className="">Lets see what it looks like</label>
                  <input ref={this.inputRef} type="file" onChange={(event)=>{ this.handleChangeImages(event);}} className="images-input" name="images"/>
                  <Link to= "/profile"><button type="submit" className="title-blue">Done</button></Link>
                </form>
                <img src="" alt=""/>
            </div>
            }
      </div>
      )
    }
  }
}

export default PostJob