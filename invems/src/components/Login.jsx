import "./css/Signup.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate }  from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function CheckLogin(){
        try{
            await axios.post("http://localhost:8080/login",{
                username: username,
                password: password,
            }).then((res) => 
            {
                if(res.data.message == "true")
                {
                    navigate('/Dashboard')
                }
            }
        );
        }
        catch(err){
            alert(err);
        }
    }

    return (
        <div>
        <form>
            <h1>Login</h1>
            <div class="inputbox">
                <ion-icon name="email-outline"></ion-icon>
                <input name="username" id="username"type="name" required
                value={username}
                onChange={(event)=> {
                    setUsername(event.target.value);
                }}
                />
                <label>username</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input name="password" type="password" id="password" required 
                value={password}
                onChange={(event)=>{
                    setPassword(event.target.value);
                }}/>
                <label >Password</label>
            </div>
            <div class="register">
                <p><a href="#">Forget Password ?</a></p>
            </div>
            <button id= "submit" type="submit" onClick={CheckLogin}>Login</button>
            <div class="register">
                <p>Don't have a account ?<a href=""> Register!!</a></p>
            </div>
        </form>
        </div>
    );
}
export default Login

