import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from 'jwt-decode';

const Login = () => {


  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
            src = {shareVideo}
            type = "video/mp4"
            loop
            controls = {false}
            muted
            autoPlay
            className='w-full h-full object-cover'
        />

        <div className = "absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className='p-5'>
                <img src={logo} width="130px" alt="logo"></img>
            </div>

            <div className='shadow-2xl'>
            <GoogleOAuthProvider clientId = {process.env.REACT_APP_GOOGLE_API_TOKEN}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        var decoded_profile = jwt_decode(credentialResponse.credential); // JWT ile kodlu geliyor. Tokeni deşifre etmek gerek.
                        localStorage.setItem('user', JSON.stringify(decoded_profile));
                        const { name, sub, picture } = decoded_profile; // oturum açan kişinin ID'si = sub.
                        
                        const doc = {
                           _id: sub,
                           _type: 'user',
                           userName: name,
                           image: picture
                        }
                       
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    />
            </GoogleOAuthProvider>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Login
