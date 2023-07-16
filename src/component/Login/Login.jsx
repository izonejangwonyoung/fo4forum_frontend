import { useState } from 'react'
import styles from './css/login.module.scss'
import classNames from 'classnames/bind'
import Modal from 'react-bootstrap/Modal'

const cx = classNames.bind(styles)

function LoginPage () {
    return (
        <div className={cx('container')}>
            <div>
                <input type="text" id='id'/>
                <input type="password" id='id'/>
            </div>

        </div>
    )
}

export default LoginPage
