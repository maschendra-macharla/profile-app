import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function SkillsList(){
    
    // states, hooks
    const [skills, setSkills]= useState('');
    const navigate= useNavigate();
    
    // Fetch skills
    // and load this page for every change in skills data
    useEffect(()=>{
        console.log(process.env.REACT_APP_db_baseUrl+`/skills`);
        axios.get(process.env.REACT_APP_db_baseUrl+`/skills`)
        .then((res)=>
            {
                setSkills(res.data);
            }
        )
        .catch((err)=>{console.log(`Something is wrong in fetching skills. Error: `+ err)});

    }, []);

   function editskill(id){
        navigate(`/skill/editSkill/`+id);
    }

    function deleteskill(id){
        if (window.confirm('Do you want to remove?')) {
            axios.delete(process.env.REACT_APP_db_baseUrl+`/skills/`+id)
            .then(res => {
                alert("User delete successfully");
                window.location.reload();
            }).catch((err) => {
                console.log(err.message);
            });
        }
    }

    
    return(
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Skills List</h2>
                </div>
                <div className='card-body'>
                    <div><Link className='btn btn-success' to="addSkill">Add New Skill (+)</Link></div>
                    <table className='table table-borderd'>
                        <thead className='bg-dark'>
                            <tr>
                                <td>Skill Id</td>
                                <td>Skill Name</td>
                                <td>YoE</td>
                                <td>Level</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {skills && skills?.map((skill) => (
                                <tr key={skill.id}>
                                    <td>{skill.id}</td>
                                    <td>{skill.skill_name}</td>
                                    <td>{skill.yoe}</td>
                                    <td>{skill.level}</td>
                                    <td>
                                        <a onClick={() => { editskill(skill.id) }} className='btn btn-success'>Edit</a>
                                        <a onClick={() => { deleteskill(skill.id) }} className='btn btn-danger'>Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


}