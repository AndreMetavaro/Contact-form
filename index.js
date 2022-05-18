import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function ContactDetailForm() {
  const handleSubmit = async (event) =>{
    const button = document.querySelector('submit')
    
    function handleSubmit() {
      button.addEventListener('submit', handleSubmit)      
      }
    }
    console.log()
  

    return (
    <div className={styles.container}>
      <Head>
        <title>Contact form</title>
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>Contact Form</h1>
<br />
<br />
        
          <div className='personData'></div>
          <a className={styles.card}>
            <h2>Details</h2>
            <p>
                  <input type='text' name='firstName' placeholder='Enter first name' required />
            <br/>
                  <input type='text' name='lastName' placeholder='Enter last name' required />
            <br/>
                  <input type='text' name='phoneNumber' placeholder='Enter phone number' required />
            <br/>
                  <input type='text' name='Message' placeholder='Leave us a message' required />
            </p>
        </a>

          <a className={styles.card}>
            <h2>
              <div className="styles.card"/>
              <div className="buttons">
                  <input type='submit' className='btn btn-submit'></input>
              </div>
            </h2>
          </a>
      </main>
    </div>
  )
}