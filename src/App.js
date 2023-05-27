
import React from 'react';

// import PropsDemo from './props_read';
import Formik from './formikForm';
// import Component from './state';
// import Fun from './onChange';
// import {BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom';
// import Dynamic from './Dynamic';
// import State from './state_function';



function App(props){


  // const AppState=()=>{
  //   return <h1>The data is : {11}</h1>
  // }
    

// must learn this before 
  // function example() { 
  //   for (var i = 0; i < 5; i++) { 
  //     var localVar = "Hello";
  //     console.log(i); // Outputs 0, 1, 2, 3, 4
  //  } 
  //  console.log(i); // Outputs 5 
  //  console.log(localVar); // Outputs "Hello" } 
  //  example();




// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }

// const myElement = <h1>{text}</h1>;

  return(

    <Formik/>
     
    // <Router>
    // <Route path='/dynamic' Component={Dynamic}>Click to see Dynamic routing</Route>
    //    <ul>
    //       <Link to="/Router1/PageLoaded!">Route1</Link>
    //       <Link to="/state">State</Link>
    //   </ul>

    //   <Routes>
    //       <Route path='/Router1/PageLoaded!' element={<Fun/>}></Route>
    //       <Route path='/state' element={<State/>}></Route>
    //   </Routes>
    // </Router>


     
      // <Fun/>    
      //   <PropsDemo message="Working Fine"/>    
      //     <h1 onClick={AppState}>{32234-332}Hello Dear learning</h1>
      //     <button onClick={AppState}>Click</button>
      //     <State/>
      //     <Component/>
          
  )
}





// class App extends React.Component {
//       constructor(props) {
//         super(props);
//         this.state={
//           count:0,
//           name:'React'
//       };
//     }

//    StateFunction=()=>{
//       this.setState({
//         count:this.state.count+1,
//         name: "Shoaib Ahmed "
//       })
//    }

//     render(){
//       return (
//         <>
//         <h1>Count : {this.state.count} name : {this.state.name}</h1>
//         <button onClick={this.StateFunction}>Click To increament</button>

//          <button onClick={
//           ()=>this.setState({count:this.state.count-1})}>Decrement!</button> 


//         </>
//       )
//     }
  
// }


export default App




// /

// Web scraping can raise ethical concerns, and it is important to approach it responsibly and consider ethical considerations. Here are some key points to keep in mind:

// Respect Website Terms of Service: Before scraping a website, review its terms of service and scraping policies. Some websites explicitly prohibit scraping or require you to obtain permission. Adhering to these terms is essential for ethical scraping.

// Obtain Legal Permission: If a website requires explicit permission for scraping, reach out to the website owner or administrator to seek approval. Respect their decision and abide by any conditions they impose.

// Consider Privacy and Personal Data: Be mindful of privacy laws and regulations. Avoid scraping websites that contain sensitive or personal information without proper authorization. Ensure that the data you extract is anonymized and used in a manner that respects user privacy.

// Avoid Overloading Servers: When scraping a website, ensure that your scraping activities do not overload or disrupt the target server. Excessive requests can lead to server issues and impact the website's availability for other users. Use proper throttling techniques and respect server resource limits.

// Do Not Misrepresent or Manipulate Data: It is important to present the scraped data accurately and avoid manipulation that could mislead or deceive users. Misrepresenting data undermines the integrity of the information and can have negative consequences.

// Use Scraped Data Responsibly: Ensure that the scraped data is used for legitimate purposes and aligns with ethical standards. Misusing scraped data for malicious activities or infringing on others' rights is unethical and potentially illegal.

// Consider the Impact: Assess the potential impact of your scraping activities on the target website and its users. If your scraping puts a strain on the website's resources or disrupts its functionality, it can be considered unethical.

// Ultimately, the ethics of web scraping for cybersecurity depend on the specific context, compliance with legal requirements, and respectful treatment of the data and the website. It is crucial to approach web scraping responsibly, with transparency and integrity, to ensure ethical practices are followed throughout the process.

// */