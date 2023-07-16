import styles from './css/ToolTipForMainPage.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
const cx = classNames.bind(styles)
function ToolTipForMainPage_playerscore (props) {
    const { REGDATE } = props
    const apiUrl = process.env.REACT_APP_API_URL
    // useEffect(() => {
    //     if (it === '아웃 사이드 슈팅크로스') { setTrait('아웃사이드 슈팅/크로스') } else setTrait(it)
    // }, [it])

    return (
        <div className={cx('tooltip-container')}>
            득점 순위
            <div className={cx('tooltip-text')}>
                업데이트 날짜: {REGDATE}
            </div>
        </div>
    )
}
export default ToolTipForMainPage_playerscore
