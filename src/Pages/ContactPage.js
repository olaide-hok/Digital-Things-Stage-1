import React from 'react'
import styled from 'styled-components';

const ContactPage = () => {
  return (
    <FormWrapper className='main'>
        <div className='contact_text'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form className='contact_form'>

            <div className='FandL'>
                <div>
                <label htmlFor="first_name">First name</label>
                <input type="text" id="first_name" placeholder='Enter your first name' />
                </div>

                <div className=''>    
                <label htmlFor="last_name">last name</label>
                <input type="text" id="last_name" placeholder='Enter your last name'/>
                </div>
            </div>

            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" placeholder='yourname@email.com' />

            <label htmlFor="message">Message</label>
            <textarea name="" id='message' placeholder="Send me a message and I'll will reply as soon as possible..."></textarea>

            <div className='radio'>
                <input type="radio" name="terms" id="terms" />
                <label htmlFor="terms">"You agree to providing your data to who may contact you."</label>
            </div>

            <button type="submit" id="btn__submit" className='submit_btn'>Send message</button>

        </form>

    </FormWrapper>
  )
}

const FormWrapper = styled.div`

    @media screen and (min-width: 900px) {
        max-width: 45rem;
        margin: 0 auto;
        padding-top: 4rem;
        .contact_text {
            margin-bottom: 3rem;
        }

        input[type="text"], input[type="email"], textarea {
            background: #FFFFFF;
            border: 1px solid #D0D5DD;
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
            border-radius: 8px;
            font-family: 'Inter';
            margin-bottom: 2.75rem;
            padding: 10px 14px;
        }

        input[type="text"], input[type="email"] {
            height: 2.75rem;
        }

        textarea {
            height: 8.25rem;
        }

        label {
            color: #344054;
            margin-bottom: 6px;
            font-family: 'Inter';
        }

        .contact_form {
            display: flex;
            flex-direction: column;

            .FandL {
                display: grid;
                grid: auto / auto auto;
                grid-gap: 1.5rem;

                div {
                    display: grid;
                }
            }


            .radio {
                margin-bottom: 2rem;

                input {
                    margin-right: 0.75rem;
                }
            }

            .submit_btn {
                background: #1570EF;
                border: 1px solid #1570EF;
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
                border-radius: 8px;
                padding: 12px 20px;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #FFFFFF;
            }
        }
    }
`

export default ContactPage

