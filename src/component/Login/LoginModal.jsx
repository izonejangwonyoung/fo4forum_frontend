// ModalComponent.jsx

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../Redux/LoginModalControlReducer' /// / 모달을 닫기 위한 액션
import styles from './css/LoginModal.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from '../../../src/component/Instance'

const cx = classNames.bind(styles)
const LoginModalComponent = () => {
    const dispatch = useDispatch() // useDispatch 훅 사용하여 액션 디스패치 함수 가져오기
    const [inputID, setinputID] = useState()
    const [inputPW, setinputPW] = useState()
    const [responseCode, setResponseCode] = useState(null)
    useEffect(() => {
        setinputID(inputID)
        setinputPW(inputPW)
        setResponseCode(responseCode)
    }, [inputID, inputPW, responseCode])
    const handleCloseModal = () => {
        dispatch(closeModal()) // 모달 닫기 액션 디스패치
    }
    const handleInputId = (event) => {
        setinputID(event.target.value)
    }

    const handleInputPW = (event) => {
        setinputPW(event.target.value)
    }
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            handleSubmit() // Enter 입력이 되면 클릭 이벤트 실행
        }
    }
    const handleSubmit = () => {
        /// axios날리는 곳
        console.log(inputID, inputPW, 'axios 날리기 전에 데이터 들어있는지 확인')
        const jsonData = { id: inputID, pw: inputPW }
        axiosInstance.post('/login/verify', jsonData, { withCredentials: true }).then((response) => {
            console.log(response, 'response')
            setResponseCode(response.status)
            if (response.status === 200) {
                window.open('/mainPL', '_self')
            }
        }).catch((error) => {
            console.error(error)
        })
    }
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-content')}>
                <div className={cx('login-form')}>
                    <input onChange={handleInputId} autoFocus={true} type="text" placeholder="아이디"/>
                    <input onChange={handleInputPW} onKeyDown={handleOnKeyPress} type="password" placeholder="비밀번호"/>
                    <button onClick={handleSubmit}> 제출</button>
                    <button onClick={handleCloseModal}>닫기</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModalComponent
