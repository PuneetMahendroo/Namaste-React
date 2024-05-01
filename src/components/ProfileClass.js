import React from "react";


class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            userInfo:null,
        };
        console.log("Child Constructor"+ this.props.serial);
    }
    async componentDidMount() {
        console.log("Child Component Did Mount "+ this.props.serial);
        const data = await fetch("https://api.github.com/users/puneetmahendroo");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });
    }
    componentWillUnmount(){
        console.log("Child Component will Unmount"+ this.props.serial);
    }
    render() {
        console.log("Child render"+ this.props.serial);
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name : {this?.state?.userInfo?.login}</h2>
                <h2>No of Repos : {this?.state?.userInfo?.public_repos}</h2>
                <img src={this?.state?.userInfo?.avatar_url}/>
                <h3>{this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                    count:1,
                });
                }}>Count</button>
            </div>
        );
    }
};

export default ProfileClass;