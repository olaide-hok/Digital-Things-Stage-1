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
                <input type="text" id="first_name" placeholder='Enter your first name' required/>
                <p className="requirements">Please enter your first name</p>
                </div>

                <div className=''>    
                <label htmlFor="last_name">Last name</label>
                <input type="text" id="last_name" placeholder='Enter your last name'required/>
                <p className="requirements">Please enter your last name</p>
                </div>
            </div>

            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" placeholder='yourname@email.com' required/>
            <p className="requirements">Please enter a valid email</p>

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" id='message' placeholder="Send me a message and I'll will reply as soon as possible..." required></textarea>
            {/* <p className="requirements">Please enter a message</p> */}

            <div className='checkbox'>
                <input type="checkbox" name="terms" id="terms" required/>
                <label htmlFor="terms">"You agree to providing your data to Habeeb who may contact you."</label>
            </div>

            <button type="submit" id="btn__submit" className='submit_btn'>Send message</button>

        </form>

    </FormWrapper>
  )
}

const FormWrapper = styled.div`
    padding: 0 1rem;
    input[type="text"], input[type="email"], textarea {
        background: #FFFFFF;
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        font-family: 'Inter';
        font-size: 1rem;
        margin-bottom: 1.5rem;
        padding: 10px 14px;
        color: #667085;

        &:focus {
            border: 1px solid #84CAFF;
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF;
            outline: none;
        }
    }
    input[type="text"], input[type="email"] {
        height: 2.75rem;
    }

    input[type="email"]:invalid:not(:focus):not(:placeholder-shown) {
        border: 1px solid #F89687;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC;
        margin-bottom: 6px;
    }

    input[type="email"]:invalid:not(:focus):not(:placeholder-shown) ~ p {
        max-height: 30px;
    }

    textarea {
        height: 8.25rem;
    }
    label {
        color: #344054;
        margin-bottom: 6px;
        font-family: 'Inter';
        font-size: 1rem;
    }
    .requirements {
        max-height: 0;
        transition: 0.28s;
        overflow: hidden;
        display: flex;
        justify-content: start;
        align-items: start;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #F83F23;
    }
    
    .contact_text {
        margin-bottom: 3rem;

        h1 {
            font-weight: 600;
            font-size: 36px;
            line-height: 44px;
            letter-spacing: -0.02em;
            color: #101828;
        }

        p {
            font-weight: 400;
            font-size: 18px;
            line-height: 28px;
            color: #475467;
        }
    }
    .contact_form {
        display: flex;
        flex-direction: column;
        .FandL {

            div {
                display: grid;
            }
        }
        .checkbox {
            margin-bottom: 2rem;
            display: flex;

            input {
                margin-right: 0.75rem;
            }
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

    @media screen and (min-width: 900px) {
        max-width: 45rem;
        margin: 0 auto;
        padding-top: 4rem;
        .contact_text {
            p {
                font-size: 20px;
                line-height: 30px;
            }
        }       

        .contact_form {
            .FandL {
                display: grid;
                grid: auto / auto auto;
                grid-gap: 1.5rem;

                div {
                    display: grid;
                }
            }

            .checkbox {
                display: block;
            }

        }
    }
`

export default ContactPage

