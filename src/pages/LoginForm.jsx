import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const Login = styled.main`
    background: gray;
    h1 {
        // background: green;
        color: #333333;
        font-size: 24px;
        font-weight: bold;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const Mail = styled.div`
    // background: yellow;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 568px;
    height: 78px;
    p {
        padding-left: 0px;
        font-size: 14px;
        font-weight: 700;
        font-family: arial;
        line-height: 20px;
        color: #333;
    }
    input {
        width: 568px;
        height: 55px;
        padding: 16px;
        // boder: 1px solid black;
        border-radius: 4px;
    }
    
    
`
const Password = styled.div`
    // background: yellow;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 568px;
    height: 78px;
    p {
        padding-left: 0px;
        font-size: 14px;
        font-weight: 700;
        font-family: arial;
        line-height: 20px;
        color: #333;
    }
    input {
        width: 568px;
        height: 55px;
        padding: 16px;
        // boder: 1px solid black;
        border-radius: 4px;
    }
`
const LoginButton = styled.button`
    background: #FF333F;
    color: #ffffff;
    width: 568px;
    height: 55px;
    boder: 1px solid black;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: auto;
    font-weight: bold:
    font-sixe: 15px;


`
const LoginForm = () => {
   const [identifier, setIdentifier] = useState<string>('');
   const [password, setPassword] = useState<string>('');
 
   const handleLogin = () => {
      UserLogin(identifier, password, navigate, dispatch)
   }
        
  return (
    <Login>
        <h1>ログイン</h1>
        <Mail>
            <p>メールまたは電話番号</p>
            <input type='text' placeholder='' />
        </Mail>
        <Password>
            <p>メールまたは電話番号</p>
            <input type='text' placeholder='' />
        </Password>
        <span>
        パスワードを忘れた方はこちら
        </span>
        <span>
        ログインできない方はこちら
        </span>
        <p>
        このサイトはreCAPTCHAで保護されており、Googleのプライバシーポリシーと利用規約が適用されます。
        </p>
        <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
    </Login>
  )
}

export default LoginForm
