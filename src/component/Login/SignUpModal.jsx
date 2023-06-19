// ModalComponent.jsx

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeSignUpModal } from '../../Redux/SignUpModalControlReducer' /// / 모달을 닫기 위한 액션
import styles from './css/SignModal.module.scss'
import classNames from 'classnames/bind'
import crypto from 'crypto-js'
import axiosInstance from '../../../src/component/Instance'

const cx = classNames.bind(styles)
const SignUpModalComponent = () => {
    const dispatch = useDispatch() // useDispatch 훅 사용하여 액션 디스패치 함수 가져오기
    const [inputID, setinputID] = useState()
    const [inputPW, setinputPW] = useState()
    const [inputEMAIL, setinputEMAIL] = useState()
    const [encryptedID, setEncryptedID] = useState()
    const [encryptedPW, setEncryptedPW] = useState()
    const [encryptedEMAIL, setEncryptedEMAIL] = useState()
    const [decrypted, setDecrypted] = useState()
    const [responseCode, setResponseCode] = useState(null)

    // const data = { id: inputID, pw: inputPW }
    const secretKey = process.env.REACT_APP_SECRET_KEY
    useEffect(() => {
        const encryptedId = crypto.AES.encrypt(JSON.stringify(inputID), secretKey).toString()
        const encryptedPw = crypto.AES.encrypt(JSON.stringify(inputPW), secretKey).toString()
        const encryptedEmail = crypto.AES.encrypt(JSON.stringify(inputEMAIL), secretKey).toString()
        setEncryptedEMAIL(encryptedEmail)
        setEncryptedID(encryptedId)
        setEncryptedPW(encryptedPw)
        console.log(encryptedID, encryptedPW, encryptedEmail, '암호화 결과')
    }, [inputID, inputPW, inputEMAIL])
    useEffect(() => {
        console.log(decrypted)
    }, [decrypted])
    const handleCloseModal = () => {
        dispatch(closeSignUpModal()) // 모달 닫기 액션 디스패치
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
        console.log(encryptedID, encryptedPW, encryptedEMAIL, 'axios 날리기 전에 데이터 들어있는지 확인')
        const jsonData = { id: encryptedID, pw: encryptedPW, email: encryptedEMAIL }
        axiosInstance.post('/login/signup', jsonData).then((response) => {
            console.log(response)
        }).catch((error) => {
            setResponseCode(error.response.status)
            // if (error.response && error.response.status === 409) {
            //     // 이메일 중복 오류인 경우 알림 표시
            //     alert('이메일이 이미 사용 중입니다.')
            // } else if (error.response && error.response.status === 408) {
            //     alert('아이디가 이미 사용중입니다.')
            // } else {
            //     // 기타 오류인 경우 알림 표시
            //     alert('오류가 발생했습니다.')
            // }
        })
    }
    const handleDecrypt = () => { /// 복호화 진행
        const DecryptId = crypto.AES.decrypt(encryptedID, secretKey)
        const DecryptPw = crypto.AES.decrypt(encryptedPW, secretKey)
        // 인코딩, 문자열로 변환, JSON 변환
        const ConvertedDecryptedId = JSON.parse(DecryptId.toString(crypto.enc.Utf8))
        setDecrypted(ConvertedDecryptedId)
    }
    const handleResponse = (code) => {
        setResponseCode(code)
    }

    return (
        <div className={cx('modal')}>
            <div className={cx('modal-content')}>
                {/* <h1>로그인</h1> */}
                <div className={cx('login-form')}>

                    <input onChange={handleInputId} type="text" placeholder="아이디"/>
                    <input onChange={handleInputPW} type="password" placeholder="비밀번호"/>
                    <input onChange={handleInputEmail} type="text" placeholder="이메일"/>
                    <button onClick={handleSubmit}> 회원가입</button>
                    <button onClick={handleCloseModal}>닫기</button>
                    <button onClick={handleDecrypt}>복호화 진행</button>
                </div>
            </div>
            {responseCode && (
                <div className={cx('response-message')}>
                    {responseCode === 409 && <div>이메일이 이미 사용중입니다</div>}
                    {responseCode === 408 && <div>아이디가 이미 사용중입니다</div>}
                    {/* 더 많은 응답 코드와 메시지를 추가할 수 있습니다 */}
                </div>
            )}
        </div>
    )
}

export default SignUpModalComponent
