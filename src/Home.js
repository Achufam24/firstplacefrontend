import {useState, useEffect} from 'react'
import App from './App'
import {Outlet, Link} from 'react-router-dom';
import girl from './girL.png'
import logo from './logo.png'
import man from './reading.png'
import book from './mobbook.png'
import hf from './hf.png'
import child from './child.png'
import boy from './boy.png'
import mark from './mark.png'
import ell from './Ellipse.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Home = () => {

    const [names, setNames] = useState('') 
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [image, setImage] = useState(child)

    const form = useRef();

    function picture(){
        return(
            <>
            <img src={boy} alt="" />
            </>
        )
    }

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_0bebbk8', 'template_dg0adum', form.current, 'oYz9P4v4ylM0rh7Di')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    function Myform(){
        return(
           <>
           <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input name='from_name' placeholder = 'Your full name' type="text" value={names} required 
            onChange={(e)=> setNames(e.target.value)}/>
            <label>Phone number</label>
            <input placeholder='phone number' type="text" value={number} required 
            onChange={(e)=> setNumber(e.target.value)}/>
            <label>Email</label>
            <input name = 'from_email' placeholder='Your email address' type="text" value={email} required 
            onChange={(e)=> setEmail(e.target.value)}/>
            <label>Your message</label>
            <textarea name = 'message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <strong><button style={{ marginLeft:'410px', borderRadius: '10px', color: 'white', backgroundColor: '#02172C',  width: '200px', height: '5px', padding: '30px 30px ', marginTop: '20px'}}>SUBMIT</button></strong>
            </form >
           </>  
        )
    };

    return (       
       <>
       <div className="navbar">
       <div className="ttopnav">
        </div>
        <div className="topnav">
        <img style={{width: '150px', height:'40px', paddingTop: '30px'}} src={logo} alt="logo" />
         <strong><Link to="" >Register</Link>
            <Link to="/login">About</Link>
            <Link to="/login" style={{color: "#FAA61F"}}>Home</Link>
            </strong>
        </div>        
       </div>

       {/* Our services */}
       <div className='welcome'>
        <img style={{width: "600px", height: "500px", float: 'right'}} src= {girl} alt="girl image" />
        <h1><strong>Empowering <br />Tomorrow's <br />Innovators, <br /> <span style={{color: 'rgb(234, 113, 7)'}} >Today</span></strong></h1>
        <button style={{backgroundColor: "black", color: 'rgb(234, 113, 7)', width: '200px', height: '40px', borderRadius: '10px', fontFamily: 'Arial', marginTop: "0px"}}>Join us</button>
       </div>
       <div className='welcome1'>
       <div className='content'>
        <img style={{float: 'right', width: '400px', height: '400px'}} src={man} alt="man reading" />
        <div className='content1'>
        <h1 style={{color: 'rgb(234, 113, 7)'}}>Lorem ipsum dolor <br /> sit amet.</h1>
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing. <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
       </div>

       <div className='content2'>
        <img style={{float: 'left', width: '400px', height: '400px'}} src={book} alt="man reading" />
        <div className='content3'>
        <h1>Lorem ipsum dolor <br /> sit amet.</h1>
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing. <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur  <br />
        Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
       </div>

       {/* Projects  */}
       <div className='projects'>
        <h1 style={{color: '#2172C'}}>Our Campaign</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing. <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing. <br /> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing.<br /> </p>
        <div className='pictures'>
            <img style={{width: '350px', height: '350px', borderStyle: 'solid', borderWidth: '10px', borderColor: 'rgb(244, 163, 33)'}} src={boy} alt="boy" />
            <img style={{width: '500px', height: '350px', float: 'right', borderStyle: 'solid', borderWidth: '10px', borderColor: "#02172C", marginRight: '200px'  }} src={hf} alt="outreach" />
            <a href="#">View more </a>
        </div>
       </div>
       <hr style={{height: '70px',width: '100%', backgroundColor: "rgb(244, 163, 33)"}}/>
       <div className='Testimonials'>
        <h3 style={{color: '#FAA6IF'}}>Testimonials</h3>
        <h2 style={{color: '#02172C'}}>What our <br /> Customers say</h2>!#

        {/* cards */}
        <div className='cards' style={{marginLeft: '130px', display: 'inline-block'}}>
            <div className='card1'>
                <img src={mark} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                </p>
                {/* <img src={ell} alt="" /> */}
            </div>
            <div className='card1'>
                <img src={mark} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> </p>
                {/* <img src={ell} alt="" /> */}
            </div>
            <div className='card1'>
                <img src={mark} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br /> 
                Lorem ipsum dolor, sit amet consectetur adipisicing. <br />
                {/* <img src={ell} alt="" />  */}
                </p>
            </div>

        </div>
       </div>
       <div className='contact' style={{marginLeft: '400px'}}>
       <img style={{ width:'250px', height: '450px', float:'left', display: 'inline', paddingRight: '100px'}} src={image} alt="" />

            <h2 style={{color: 'rgb(244, 163, 33)'}}>Contact us
            </h2>
            <h2>Let's talk!</h2>
            {Myform()};
            
        </div>
       </div>
       </>
        );      
    };
 
export default Home ;