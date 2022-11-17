import {useState} from "react"
const Register = () => {

    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const submit =e => {
        e.preventDefault()
    }
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <form>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label" >Username</label>
                            <input type="text" className="form-control" id="username" onChange={e => setUser(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-check-label" > Password</label>
                            <input type="password" className="form-control" onChange={e => setPass(e.target.value)} id="password"/>
                        </div>
                        <button onClick={e => submit(e)} className="bt btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
