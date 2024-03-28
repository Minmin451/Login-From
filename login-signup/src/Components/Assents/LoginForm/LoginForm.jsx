/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './LoginForm.css'
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";


export const LoginForm = () => {
    const newLocal = <button type="submit">เข้าสู่ระบบ</button>;
  return (
    <div className='wrapper'>
        <form action="">
            <h1>เข้าสู่ระบบ</h1>
            <h6>เพื่อความปลอดภัย กรุณาล็อกอินเข้าสู่ระบบเพื่อดูรายละเอียดของท่าน</h6>
            <div className="input-box1">
                <input type="text" placeholder='อีเมล' required />
            </div>
            <div className="input-box1">
                <input type="รหัสผ่าน" placeholder='รหัสผ่าน' required />
            </div>
            
            {newLocal}

            <div className="สร้างบัญชี">
                <a href="#">สร้างบัญชีผู้ใช้</a> 
            </div>    

            <div className="input-box2">
                <FaGoogle className='icon'/>
                <a href="#">Google</a> 
            </div>
            <div className="input-box2">
                <FaFacebook className='icon'/>
                <a href="#">Facbook</a>

                  <FaApple className='icon'/>
                  <a href="#">Apple</a>
            </div>
           


        </form>

    </div>
  )
}
