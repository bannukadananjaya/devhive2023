import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import RegRow from '../components/RegRow';

const Registration = () => {
    const location = useLocation();
    const semester = new URLSearchParams(location.search).get('sem');
    return (
        <div>
            <Navbar />
            <div className="registration-body text-center container">
                <h2 className='text-green mt-5'>Semester 01 - Registration</h2>
                <div className='registration-inner mt-4 container'>
                    <div className='d-flex'>
                        <div className='d-flex me-5'>
                            <div style={{ width: '20px', height: '20px' }} className='border border-secondary me-2 rounded'></div>
                            <p>Core Subject</p>
                        </div>
                        <div className='d-flex me-5'>
                            <div style={{ width: '20px', height: '20px', background: '#9EEAF9' }} className='border border-secondary me-2 rounded'></div>
                            <p>Elective Subject</p>
                        </div>
                        <div className='d-flex me-5'>
                            <div style={{ width: '20px', height: '20px', background: '#FFF3CD' }} className='border border-secondary me-2 rounded'></div>
                            <p>Re-attempt Subject</p>
                        </div>
                    </div>
                    <div className='card'>
                        <table class="table table-hover m-0">
                            <thead className='table-success'>
                                <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Credits</th>
                                    <th scope="col">Coordinator</th>
                                    <th scope="col">Attempt</th>
                                    <th scope="col">Pre-Request</th>
                                    <th scope="col">Select</th>
                                    <th scope="col">Approved</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RegRow code="EC6060" />
                                <RegRow code="EC6060" />
                                <RegRow code="EC6060" />
                                <RegRow code="EC6060" />
                                <RegRow code="EC6060" />
                                <RegRow code="EC6060" />
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <div></div>
                        <div className='d-flex align-content-center'>
                            <h6 style={{ width: "150px" }} className='m-0 mt-2'>Total Credits : </h6>
                            <input style={{ maxWidth: "50px" }} type="text" className="form-control form-control-sm" value="24" readonly />
                        </div>
                        <div>
                            <button className='btn btn-green mx-3'>Save</button>
                            <button className='btn btn-green'>Register</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registration