import React from 'react';
import './checkout.css';
import Background from '../../images2/IMG_20200923_153803_560.jpg'



function Contact() {
  return(<>
  <div  className='contactme'>Hi,I'm Harshita Sahu.I'd describe myself as a person with a versatile skill-set, a lot of integrity and a willingness to learn new things. I'm a motivated worker and a fast learner. I'm adept at solving problems, and I believe my ability to think quickly on my feet is one of my greatest asset.This website is made by me using React,Express and Stripe.
 <br/> <i className="fas fa-mail-bulk"></i>harshitasahu3110@gmail.com
 <br/> Connect with me on:
<br/><i className="fab fa-github"></i><a href='https://github.com/harshiiiz'>Github </a>
<br/><i className="fab fa-linkedin"></i><a href='https://www.linkedin.com/in/harshita-sahu-7a83a9160/'>LinkedIn</a>
</div>
<div id='image'>
    <img src={Background} alt=''  width='20%' height='20%'  /></div></>)
}
export default Contact;