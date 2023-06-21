import {FormRow, FormRowSelect, Alert} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {

    const {isEditing, showAlert, displayAlert, position,company,jobLocation,jobType,jobTypeOptions,status, statusOptions} = useAppContext()

    const handleJobInput = (e) =>{
        const name = e.target.name
        const value = e.target.value
        console.log(`${name}:${value}`);
    }

    const handleSubmit = ()=>{}
    return (
        <Wrapper>
            <form className='form'>
                <h3>{isEditing?'edit job':'add job'}</h3>
                {showAlert && <Alert/>}
                <div className='form-center'>
                    <FormRow type='text' name='position' value={position} onChange={handleJobInput}/>
                    <FormRow type='text' name='company' value={company} onChange={handleJobInput}/>
                    <FormRow type='text' labelText='Job location' name='jobLocation' value={jobLocation} onChange={handleJobInput}/>
                    <FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions}/>
                    <FormRowSelect name='jobType'  labelText='Job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions}/>
                    <div className='btn-container'>
                    <button type='submit' className='btn btn-block submit-btn' onCLick={handleSubmit}>Submit</button>
                </div>
                </div>
                
            </form>
        </Wrapper>
    )
}

export default AddJob