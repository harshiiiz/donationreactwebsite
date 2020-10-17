import React from 'react';
import './checkout.css';
import Background from '../../images2/orphan-reservation-Maharashtra.jpg'

const contact={
backgroundImage: `url(${Background})`,
backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  // backgroundRepeat: 'no-repeat',
 width:'100%',
 height:'100%',
 position:'absolute',
 bottom:5
}


export default function About() {
  return (<>
  
  <div style={contact}>
  <div className='description'>
    When you sponsor a child here, you not only help the child in need but also transform the lives of children in the community where the sponsored child lives, by ensuring they get access to quality education, proper nutrition, healthcare and protection. Your sponsorship also helps poor and vulnerable communities to build a more enabling context for their children to be protected and cared for.
    
  Working with grassroots-based organisations, we strive towards making vulnerable communities aware of constitutional values and their rights including the rights of children. Your sponsorship empowers our efforts to save the children in poor communities from crimes like child trafficking, child labour and child marriage. Essentially, you help children become better citizens for a better tomorrow.</div>
  </div></>);

}