import {useState} from 'react'

function Conditional(){
    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function sendEmail(e){ 
        e.preventDefault()
        console.log('The email was send')
        setUserEmail(email)
    }

    function reciveEmail(e) {
        setEmail(e.target.value)
    }

    function cleanEmail(e) {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Sign up your email:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Your email here"
                    onChange={reciveEmail}
                />
                <button type="submit" onClick={sendEmail}>Send email</button>
            </form>
            {userEmail && (
            <div>
                <p>The email is right</p>
                <button onClick={cleanEmail}>clean email</button>
            </div>
        )}
        </div>
    )
}

export default Conditional