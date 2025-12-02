import React, { useRef, useState } from 'react'
import './Contact.scss'
import axios from 'axios';
import {motion, scale} from 'framer-motion'
import {useFormik} from 'formik'
import { FormSchema } from './FormSchema'
import Foot from '../Footer/Foot';

const Contact = () => {

  const initialValue = {
    Name:'',
    Email:'',
    Text:''
  }



  const {values,errors,touched,handleSubmit,handleBlur,handleChange} = useFormik({
    initialValues:initialValue,
    validationSchema:FormSchema,
    onSubmit:async (values,actions)=>{

    console.log(values)
    const name = values.Name
    const msg = values.Text
    const email = values.Email
    const res = await axios.post('https://portfoiio-emai-service.vercel.app/sendmail',{name,msg,email})
    console.log(res)
    // await sendEmail(values.Text,values.Email,values.Name);
    actions.resetForm();
    }
  })
  console.log(errors);

  const formRef = useRef();

const [showFooter,setShowFooter] = useState(false)


  
  return (
    <div className='contact'>
    <Foot showFooter={showFooter} setShowFooter={setShowFooter}/>
      <div className='contact-container'>
        <motion.div
        initial={{scale:0.95,opacity:0,y:100}}
        transition={{delay:0.1,duration:0.5}}
        whileInView={{x:0,y:0,scale:1,opacity:1}} 
        className='Form'>
        <div className='heading'><h1>Let's <span>Connect</span></h1></div>
          <form ref={formRef} onSubmit={handleSubmit} autoComplete='off'>
            <div className='input-box'>
              <div className='labelBox'><label htmlFor='Name'>Name</label>{touched.Name && errors.Name ? <p>{errors.Name}</p>:null}
              </div>
              <input type='text' name='Name' value={values.Name} autoComplete='off' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your Name..' id='Name'/>
            </div>

            <div className='input-box'>
              <div className='labelBox'><label htmlFor='Email'>Email</label>{touched.Email && errors.Email ? <p>{errors.Email}</p>:null}
              </div>
              <input type='email' name='Email' autoComplete='off' value={values.Email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email..' id='Email'/>
            </div>

            
              <textarea type='text' cols={60} rows={10} value={values.Text} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your Message .. ' name='Text' id='Text'/>

            <div className='button'>
              <button type='submit'>Submit</button>
            </div>

          </form>
        </motion.div>
      </div>
      <div className='Footer-box'>
        footer
      </div>
    </div>
  )
}

export default Contact
