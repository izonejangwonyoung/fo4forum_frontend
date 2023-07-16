// ModalComponent.jsx

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeSignUpModal } from '../../Redux/SignUpModalControlReducer' /// / 모달을 닫기 위한 액션
import styles from './css/SignModal.module.scss'
import classNames from 'classnames/bind'
import crypto from 'crypto-js'
import axiosInstance from '../../../src/component/Instance'
import axios from 'axios'

const cx = classNames.bind(styles)
const SignUpModalComponent = () => {
    const dispatch = useDispatch() // useDispatch 훅 사용하여 액션 디스패치 함수 가져오기
    const [inputNAME, setinputNAME] = useState()
    const [inputID, setinputID] = useState()
    const [inputPW, setinputPW] = useState()
    const [inputEMAIL, setinputEMAIL] = useState()
    // const [encryptedNAME, setEncryptedNAME] = useState()
    // const [encryptedID, setEncryptedID] = useState()
    // const [encryptedPW, setEncryptedPW] = useState()
    // const [encryptedEMAIL, setEncryptedEMAIL] = useState()
    // const [decrypted, setDecrypted] = useState()
    const [responseCode, setResponseCode] = useState(null)

    // const data = { id: inputID, pw: inputPW }
    const secretKey = process.env.REACT_APP_SECRET_KEY
    useEffect(() => {
        setinputID(inputID)
        setinputPW(inputPW)
        setinputNAME(inputNAME)
        setinputEMAIL(inputEMAIL)
    }, [inputID, inputPW, inputEMAIL, inputNAME])
    const handleCloseModal = () => {
        dispatch(closeSignUpModal()) // 모달 닫기 액션 디스패치
    }
    const handleInputName = (event) => {
        setinputNAME(event.target.value)
    }
    const handleInputEmail = (event) => {
        setinputEMAIL(event.target.value)
    }
    const handleInputId = (event) => {
        setinputID(event.target.value)
    }

    const handleInputPW = (event) => {
        setinputPW(event.target.value)
    }
    const handleSubmit = () => {
        /// axios날리는 곳
        console.log(inputID, inputPW, inputEMAIL, inputNAME, 'axios 날리기 전에 데이터 들어있는지 확인')
        const jsonData = { id: inputID, pw: inputPW, email: inputEMAIL, name: inputNAME }
        axiosInstance.post('/login/signup', jsonData).then((response) => {
            console.log(response)
        }).catch((error) => {
            setResponseCode(error.response)
        })
    }

    return (
        <div className={cx('modal')}>
            <div className={cx('modal-content')}>
                {/* <h1>로그인</h1> */}
                <div className={cx('login-form')}>

                    <input onChange={handleInputName} autoFocus={true} type="text" placeholder="이름"/>
                    <input onChange={handleInputId} type="text" placeholder="아이디"/>
                    <input onChange={handleInputPW} type="password" placeholder="비밀번호"/>
                    <input onChange={handleInputEmail} type="text" placeholder="이메일"/>
                    <button onClick={handleSubmit}> 회원가입</button>
                    <button onClick={handleCloseModal}>닫기</button>
                </div>
            </div>
            {responseCode && (
                <div className={cx('response-message')}>
                    {responseCode === 409 && <div>이메일이 이미 사용중입니다</div>}
                    {responseCode === 408 && <div>아이디가 이미 사용중입니다</div>}
                    {responseCode === 200 && <div>회원가입에 성공하였습니다. 홈화면으로 이동합니다</div>}
                    {/* 더 많은 응답 코드와 메시지를 추가할 수 있습니다 */}
                </div>
            )}
        </div>
    )
}

export default SignUpModalComponent
