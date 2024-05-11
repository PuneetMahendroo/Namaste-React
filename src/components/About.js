import { Outlet } from "react-router-dom";//react-router-dom
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import { Link } from "react-router-dom";//react-router-dom

class About extends Component{
  constructor(props) {
    super(props);
    this.state = {
      btn: false,
    }
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent Component did Mount");
  }
  render() {
  return ( btn ) ? < Outlet />  : (
    <div className="About">
        <h1>This is an <b>About US</b> Page</h1>
        {console.log("Parent Render")}
        
        {/* Nested Routing */}
        {/* {console.log(<Outlet />)} */}
        
        (btn)? (
        <button onClick={()=>{
          this.setState({ btn: false,});
        }}><Link to="Profile">Profile</Link></button> )
        : (
        <button onClick={() =>{
          this.setState=({btn:true,});
        }}><Link to="ProfileClass">Profile Class</Link></button> )

        {/* <Profile name={"Puneet Mahendroo"}/> */}
        {/* <ProfileClass name={"Puneet Mahendroo"} serial={"first"} /> */}
        {/* <ProfileClass name={"Puneet Mahendroo"} serial={"second"}/> */}
    </div>
  );
  };
};

export default About;