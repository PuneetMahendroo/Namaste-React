import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
      <div className="Error">
           <h1>Opps!!</h1> 
           <h1>An error Occured</h1>
          <h3>{err.status + ", " + err.statusText}</h3>
          <p>AND THERE IS NOTHING MORE</p> 
          <p>I THINK YOU NEED TO KNOW MORE ABOUT THIS</p>
      </div>
    );
  };
  
  export default Error;