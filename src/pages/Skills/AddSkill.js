import axios from 'axios'
import { useState} from "react"
import {Link, useNavigate} from 'react-router-dom'

export default function AddSkill(){
   
    const [id, setId] = useState('');
    const [skill_name, setSkillName] = useState('');
    const [yoe, setYoe] = useState('');
    const [level, setLevel] = useState('');
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(process.env.REACT_APP_db_baseUrl+`/skills`, {skill_name, yoe, level})
        .then(res=>{
            alert("Skill added successfully");
            navigate('/skills');
        })
        .catch(err=>console.log(`error: `+err));
    }
   
    return (
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}>
                    <div className='card'>
                        <div className='card-title'>
                            <h2>Add Skill</h2>
                        </div>
                        <div className='card-body'>
                            <div className='row'>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Id</label>
                                        <input value={id} disabled="disabled" className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Skill Name</label>
                                        <input value={skill_name} required onChange={e => setSkillName(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>YoE</label>
                                        <input value={yoe} required onChange={e => setYoe(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Level</label>
                                        <input value={level} onChange={e => setLevel(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <button type='submit' className='btn btn-success'>Add</button>
                                        <Link to='/skills' className='btn btn-danger'>Back</Link>
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