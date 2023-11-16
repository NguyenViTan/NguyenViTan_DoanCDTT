

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import userservice from "../../../services/UserService";
function Login() {
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function Login(event) {
        event.preventDefault();
        const user = new FormData();
        user.append("email", email);
        user.append("password", password);

        await userservice.Login(user).then(function (result) {
            if (result.data.success === true) {
                alert(result.data.message);
                navigate('/', { replace: true });
            }
            else {
                alert(result.data.message);
                navigate('/login', { replace: true });
            }

        })
    }
    return (
        <section class="section-conten padding-y" style={{minHeight:84}}>


        <div class="card mx-auto" style={{maxWidth: 380, marginTop:100}}>
          <div class="card-body">
          <h4 class="card-title mb-4">Đăng nhập</h4>
          <form class="form"  method="" action="" onSubmit={Login}>
                <a href="#" class="btn text-white bg-secondary btn-block mb-2"> <i class="fab fa-facebook-f"></i>  Đăng ký bằng facebook</a>
                <a href="#" class="btn btn-google btn-block mb-4 text-white bg-danger"> <i class="fab fa-google"></i>   Đăng nhập với google </a>
              <div class="form-group">
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="" name="email" id="email" placeholder="Nhập email..." />
              </div> 
              <div class="form-group my-3">
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="" name="password" id="password" placeholder="Nhập mật khẩu..." />
                                    
              </div> 
              
             
              <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block my-3"> Đăng nhập  </button>
              </div>    
          </form>
          </div> 
        </div>
    
         <p class="text-center mt-4">Chưa có tài khoản? <a  className="text-danger"href="/register">Đăng ký</a></p>
         <br/><br/>
    
    
    
    </section>
    );
}

export default Login;