import React from "react";
// import TextForm from "./TextForm";
import "./About.css"
export default function About() {
  let mystyle={
    color : 'white',
    backgroundColor : '#042943'
  }

  let mystyle2={
    color:  'white',
    backgroundColor :  'gray'
  }

  return (
    <>
    <div className="my-custom-container">
      <div className="container pb-3 pr-1 pl-1" style={mystyle2}>
        <h1
          className="my-3"
          style={{ color:  "white" }}
        >
          About us
        
        </h1>
        
        <div className="accordion " id="accordionExample">
          <div className="accordion-item" style={mystyle2}>
            <h2 className="accordion-header" id="headingOne">

              <button
                className="accordion-button"
                //  style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About developed project(features)
              </button>

            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={mystyle}
            >
              <div className="accordion-body" style={mystyle}>
                <strong> Here you can see and use very easily 
                you can conver your text  in very attractive manner .you can remove extra unusual 
                spaces , convert to upper case and lower case,listen what you written in text area using
                <b>speak </b> ,in th lower section the the number words and letter are given
                </strong>
              </div>
            </div>
          </div>

          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={{  color:"black" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Used tools
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>
                  Bootstrap --"Bootstrap is the most popular HTML, CSS
                   and JavaScript framework for developing a 
                  responsive and mobile friendly website."--
                  HTML--CSS--JAVA script--
                  React js --"ReactJS is an open-source, component-based front end
                   library responsible only for the view layer of the application. 
                   It is maintained by Facebook. React uses a declarative paradigm 
                   that makes it easier to reason about
                   your application and aims to be both efficient and flexible." ,
                </strong>
              </div>
            </div>
          </div>
          
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={{ color: "black" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                About Developer
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>
               <b>name :</b> SAUMYA KESERVANI<br></br>
               <b>email :</b> saumyakesarvani6475@gmail.com<br></br>
                <b>mob.</b>9621359631<br></br>
                <b>add.</b>Phaphamau bazar,prayagraj, pin
                code:211013
                Uttar pradesh , India<br></br>
                  <br></br>
                  <b>education</b><br></br>
                  <b>Harcourt Butler Technical University</b>
B.tech in computer science and engineering<br></br>
<b>8.04</b><br></br>
<b>JEE mains
Entrance examinatination</b>
<br></br>
98.34 percentile
(18461 rank in india according to common rank list)
<b>JEE advance
Entrance examinatination</b>
<br></br>
16660 rank according to 
common rank list in all over india
<br></br>
<b>SKILLS</b>
Command in c , c++ and 
python programing language Competetive
programing in c++ 3 ⭐⭐⭐ at
 codechef competetive programing in c++
Frontend web developer Currently on 
the way of full stack web developer


                </strong>
               
              </div>
            </div>
          </div>
        <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={{ color: "black" }}
                // type="button"
                // data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                // aria-controls="collapseThree"
              >
                Thank you
              </button>
            </h2>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}