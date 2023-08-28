import axios from 'axios'
import { useState, useEffect } from "react"
import {Link, useNavigate} from 'react-router-dom'

export default function UpdatePersonalData(){
   
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(process.env.REACT_APP_db_baseUrl+`/personaldata/1`)
        .then((res) => {
            console.log(res);
          setName(res.data.name);
          setEmail(res.data.email);
          setPhone(res.data.phone);
        })
      }, []);

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(process.env.REACT_APP_db_baseUrl+`/personaldata/1`, {name, email, phone})
        .then(res=>{
            alert("PersonalData edited successfully");
            navigate('/personaldata');
        })
        .catch(err=>console.log(`error: `+err));
    }
   
    return (
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}>
                    <div className='card'>
                        <div className='card-title'>
                            <h2>Update Personal Data</h2>
                        </div>
                        <div className='card-body'>
                            <div className='row'>

                                {/* <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Id</label>
                                        <input value={id} disabled="disabled" className='form-control'></input>
                                    </div>
                                </div> */}

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input value={name} required onChange={e => setName(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input value={email} required onChange={e => setEmail(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Phone</label>
                                        <input value={phone} onChange={e => setPhone(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <button type='submit' className='btn btn-success'>Update</button>
                                        <Link to='/personaldata' className='btn btn-danger'>Cancel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}