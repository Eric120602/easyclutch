import React, { useState } from 'react';
import { registerTrainer } from '../api/users';
import '../App.css';



function Register() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [firstname, setFirstnm] = useState("");
    const [lastname, setLastnm] = useState("");
    const register = async (e) => {

        if (password === confirmpassword) {

            try {
                e.preventDefault();
                await registerTrainer({
                    username: username,
                    password: password,
                    firstName: firstname,
                    lastName: lastname,
                })

                console.log("register user req success")
                //let val = Number(window.prompt("Enter the OTP: "));
                try {
                    // await verifyOtp({
                    //     username: username,
                    //     otp: val,
                    // })
                    // console.log("verified")
                    alert("Successfully Registered...please login");
                    window.location.replace('/Trainermngmnt');
                }
                catch (e) {
                    console.log("verification failed", e)
                    alert("Incorrect otp entered");
                }

            }
            catch (exception) {
                console.log("register user req failed")
                alert("username already taken");
            }
        }
        else
            alert("password does not match");
    };



    return (

        <div className="regapp">

            <section className='sect'>
                <div className="fmbox">
                    <form>

                        <h2 className='logintitle'>Trainer: Register</h2>
                        <div className="inbx">
                            <input type="name" required
                                onChange={(e) => {
                                    setFirstnm(e.target.value);
                                }} />
                            <label>First Name</label>
                        </div>
                        <div className="inbx">
                            <input type="name" required
                                onChange={(e) => {
                                    setLastnm(e.target.value);
                                }} />
                            <label>Last Name</label>
                        </div>
                        <div className="inbx">
                            <input type="email" required id="em"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                            <label>Email</label>
                        </div>

                        <div className="inbx">
                            <input type="password" required id="pass"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                            <label>Password</label>
                        </div>
                        <div className="inbx">
                            <input type="password" required
                                onChange={(e) => {
                                    setConfirmpassword(e.target.value);
                                }}
                            />
                            <label>Confirm Password</label>
                        </div>

                        <button className='btn' onClick={register}>Register</button>
                        <br />
                        

                    </form>
                </div>
            </section>

        </div>


    );
}


export default Register;