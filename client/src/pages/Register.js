import {useState, useEffect} from 'react'
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
    name: '',
    email: '',
    password:'',
    isMember: true,
    showAlert: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    const handleChange = (e) => {
        console.log(e.target)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (<Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo />
            <h3>Login</h3>
            {values.showAlert && <Alert/>}
            <FormRow name='name' type='text' value={values.name} handleChange={handleChange}/>
            <FormRow name='email' type='email' value={values.email} handleChange={handleChange}/>
            <FormRow name='password' type='password' value={values.password} handleChange={handleChange}/>
            <button type='submit' className='btn btn-hero'>Submit</button>
        </form>
    </Wrapper>)
}

export default Register;