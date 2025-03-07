import "./css/Signup.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordcon, setConPassword] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try{
            if(password == passwordcon){
              const response = await axios.post("http://localhost:8080/signup",{
                    username: username,
                    email: email,
                    password: password,
                });
                if(response.status == 200){
                    navigate("/login")
                }
              }
              else{
                alert("Password doesn't match!!");
              }
        }catch(err){
            alert(err);
        }
    }

    return (
        <div> 
          <section>
            <form>
              <h1>Sign Up</h1>
                <div class="inputbox">
                    <ion-icon name="person-outline"></ion-icon>
                    
                    <input type="text" id= "username" name="username" required 
                    value={username}
                    onChange={(event)=>{
                        setUsername(event.target.value);
                    } }
                    />
                    <label for="">Name</label>
                    
                </div>
                <div class="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" id="email" name="email" required 
                    value={email}
                    onChange={(event)=> {
                        setEmail(event.target.value);
                    }}
                    />
                    <label for="">Email</label>
                </div>
                
                <div class="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" id="password" name="password" required 
                    value={password}
                    onChange={(event)=> {
                        setPassword(event.target.value)
                        }}
                        />
                    <label for="">Password</label>
                </div>  
                <div class="inputbox">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input type="password" id="passwordcon" name="passwordcon" required
                  value={passwordcon}
                  onChange={(event)=>{
                    setConPassword(event.target.value);
                  }}
                  />
                  <label for="">Confirm Password</label>
              </div>  
                <button id= "submit" type="submit" onClick={save}>Sign Up</button>
              <div class="register">
                <p>Already have an account? <a href="/login">Log In</a></p>
              </div>
            </form>
          </section>
          </div>
    );
  }
  
  export default Signup;