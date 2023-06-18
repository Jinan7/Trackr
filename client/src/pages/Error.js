import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
const Error = () =>{
    return(<Wrapper className='full-page'>
        <div>
            <img src={img} alt='not found'/>
            <h3>Not Found</h3>
            <p>Unable to find the requested page</p>
            <Link to='/'>Home</Link>
        </div>
    </Wrapper>);
}

export default Error;