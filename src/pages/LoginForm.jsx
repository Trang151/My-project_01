import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

// import { UserLogin } from '../api/UserApi';

// const Login = styled.main`
//     // background: red;
//     h1 {
//         // background: green;
//         color: #333333;
//         font-size: 24px;
//         font-weight: bold;
//     }
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 20px;
// `
// const Mail = styled.div`
//     // background: yellow;
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 20px;
//     width: 568px;
//     height: 78px;
//     p {
//         padding-left: 0px;
//         font-size: 14px;
//         font-weight: 700;
//         font-family: arial;
//         line-height: 20px;
//         color: #333;
//     }
//     input {
//         width: 568px;
//         height: 55px;
//         padding: 16px;
//         // boder: 1px solid black;
//         border-radius: 4px;
//     }
// `
// const Password = styled.div`
//     // background: yellow;
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 20px;
//     width: 568px;
//     height: 78px;
//     p {
//         padding-left: 0px;
//         font-size: 14px;
//         font-weight: 700;
//         font-family: arial;
//         line-height: 20px;
//         color: #333;
//     }
//     input {
//         width: 568px;
//         height: 55px;
//         padding: 16px;
//         // boder: 1px solid black;
//         border-radius: 4px;
//     }
// `
// const LoginButton = styled.button`
//     background: #FF333F;
//     color: #ffffff;
//     width: 568px;
//     height: 55px;
//     boder: 1px solid black;
//     border-radius: 4px;
//     margin-bottom: 20px;
//     padding: auto;
//     font-weight: bold:
//     font-sixe: 15px;
// `
const ForgetPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
`
const LoginButton = styled.div`
  display: flex;
  justify-content: center;
`
const Register = styled.div`
  height: 10px;
`
const LoginContainer = styled.div`
  max-width: 640px;
  height: 100vh;
  padding: 0 36px;
  margin: 0 auto;
  h1{
    text-align: center;
    color: #333333;
    font-size: 24px;
    font-weight: bold;
    font-family: Arial;
    font-weight: 700;
    margin: 30px 0;
  }
  p {
    font-size: 20px;
  }
  input {
    width: 100%;
    height: 55px;
    padding: 16px;
    border: 1px solid lightgray;
    border-radius: 4px;
    margin-bottom: 30px;
  }
  div {
    width: 100%;
    position: relative;
    span {
      position: absolute;
      top: 17px;
      right: 15px;
    }
  }
  ${LoginButton}{
    margin: 20px 0;
    width: 100%;
    height: 45px;
    background: #FF333F;
    color: #ffffff;
    padding: 11px 15px;
    border: 1px solid #FF333F;
    border-radius: 4px;
    font-weight: bold;
    font-size: 15px;
    &:hover {
      opacity: 0.8;
    }
  }
  ${Register} {
    a {
        color:#0073CC;
        &:hover {
          text-decoration: underline
        }
      }
  }
  ${ForgetPassword} {
    padding: 10px 0;
    width: 100%;
    a{
      color: #387AC6;
    }
    &:hover {
      a{
        color: #99B6F8;
      }
    }
    p {
      color: #387AC6;
    }
  }
  p:last-of-type {
    font-size: 14px;
    margin-top: 10px;
    a{
      color: #387AC6;
    }
  }
`
const LoginForm = () => {
  // const [identifier, setIdentifier] = useState < string > ('');
  // const [password, setPassword] = useState < string > ('');
  // const [type, setType] = useState < boolean > (false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //     UserLogin(identifier, password, navigate, dispatch)
  // }
  return (
    // <Login>
    //   <h1>ログイン</h1>
    //   <Mail>
    //     <p>メールまたは電話番号</p>
    //     <input type='text' placeholder='' />
    //   </Mail>
    //   <Password>
    //     <p>メールまたは電話番号</p>
    //     <input type='text' placeholder='' />
    //   </Password>
    //   <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
    //   <span>
    //     <link rel="stylesheet" href="" />パスワードを忘れた方はこちら
    //   </span>
    //   <span>
    //     ログインできない方はこちら
    //   </span>
    //   <p>
    //     このサイトはreCAPTCHAで保護されており、Googleのプライバシーポリシーと利用規約が適用されます。
    //   </p>
    // </Login>
    <LoginContainer>
      <h1>ログイン</h1>
      {/* Create MailBox */}
      <p>メールまたは電話番号:tom@gmail.com</p>
      <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="Enter UserName..." />
      {/* Create Password */}
      <p>パスワード:yellow</p>
      <div>
        <input type={type ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password..." />
        <span><Icon icon={type ? "mdi:eye" : "heroicons:eye-slash-solid"} hFlip={true} vFlip={true} height={20} width={20} onClick={() => handleChangeType()} /></span>
      </div>
      {/* Create button*/}
      <Register>
        <p>You don't have an account? <a href="">Register</a></p>
      </Register>
      {/* <LoginButton onClick={() => handleLogin()}>ログイン</LoginButton> */}
      {/* Instruction if forget password */}
      <ForgetPassword>
        <p><Link to="/">パスワードを忘れた方はこちら <Icon icon="ic:outline-greater-than" width="16" height="16" /></Link></p>
      </ForgetPassword>
      <ForgetPassword>
        <p><Link to="/">ログインできない方はこちら <Icon icon="ic:outline-greater-than" width="16" height="16" /></Link></p>
      </ForgetPassword>
      <p>このサイトはreCAPTCHAで保護されており、Googleの<Link to="privacy">プライバシーポリシー</Link>と<Link to="terms">利用規約</Link>が適用されます。</p>
    </LoginContainer>
  )
}

export default LoginForm
