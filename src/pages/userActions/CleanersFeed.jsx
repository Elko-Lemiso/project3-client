import React, { Component } from 'react'
import {getUser} from '../../utils/auth';
import {allCleanersData} from '../../utils/user';
import Nav from '../../components/Nav';
import { Link , Redirect } from 'react-router-dom';
import './CleanersFeed.scss';

class CleanersFeed extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    user: getUser(),
    allCleaners: [],
    filtered: [],
    error: null  
  }

  componentDidMount(){
    !this.state.user? this.props.history.push("/"):
    // left here, test if data comes in correctly
    allCleanersData()
    .then((response)=>{
      this.setState({
        allCleaners: response.data.users,
        filtered: response.data.users,
      })
    })
    .catch((error)=>{
      this.setState({
        error: error.data.message
      })
    })
  }

  handleChange(event) {
    let currentList = [];
    let newList = [];

    if (event.target.value !== "") {
      currentList = [...this.state.filtered];
      newList = currentList.filter(item => {
        const city = item.address.city.toLowerCase();
        const firstname = item.firstname.toLowerCase();
        const lastname = item.lastname.toLowerCase();

        const filter = event.target.value.toLowerCase();
        return (
          city.includes(filter) || 
          firstname.includes(filter) ||
          lastname.includes(filter)
          );
      });
    } else {
      newList = [...this.state.allCleaners];
    }

    this.setState({
      filtered: newList
    });
  }

  render() {
    if(!this.state.user){
      return(
        <Redirect to="/" />
      )
    } else{
      return (
        <div className="big-container" id="cleaners-feed">
          <Nav/>
          <h1>CLEANERS</h1>
          <input type="text" className="input" onChange={this.handleChange} placeholder="Search by city or name.." />
          <div className="cleaners-list shadow-drop-2-bottom">
            {
              this.state.filtered.map((cleaner, index)=>(
                <Link key={`${index}-${cleaner._id}`} to={`profile/${cleaner._id}`}>
                  <div className="cleaner">
                    <div className="cleaner-image-box">
                      <img src={cleaner.profilePicture.path} alt=""/>
                    </div>
                    <div className="cleaner-details">
                      <h4 className="capitalize">{cleaner.firstname} {cleaner.lastname}</h4>
                      <table>
                        <thead>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="key-lines ">City:</td>
                            <td className="content-lines capitalize">{cleaner.address.city}</td>
                          </tr>
                          <tr>
                            <td className="key-lines">Bio:</td>
                            <td className="content-lines">{cleaner.bio}</td>
                          </tr>
                          {/* <tr>
                            <td className="key-lines">Rating:</td>
                            {cleaner.jobsTaken.length === 0? 
                            <td className="content-lines">No ratings yet</td> :
                            <td className="content-lines">Rating: 4 stars, with 7 ratings</td>
                            }
                          </tr> */}
                          <tr>
                            <td className="key-lines">#Jobs taken:</td>
                            {cleaner.jobsTaken.length === 0? 
                            <td className="content-lines">No complete jobs yet</td> :
                            <td className="content-lines">{cleaner.jobsTaken.length}</td>
                            }
                          </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                      </table>
                    </div>    
                  </div>
                </Link>  
              ))
            }
          </div>
        </div>
      )
    }
  }

}

export default CleanersFeed
