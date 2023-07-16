import styles from './css/ToolTipForMainPage.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
const cx = classNames.bind(styles)
function ToolTipForMainPage_teamscore (props) {
    const { REGDATE } = props
    const apiUrl = process.env.REACT_APP_API_URL
    const dateStr = REGDATE

    // Date 객체 생성
    const date = new Date(dateStr)

    // 한국 시간으로 변환
    const koreanDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }))

    // 원하는 형식으로 포맷팅
    const formattedDate = koreanDate.toLocaleString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    return (
        <div className={cx('tooltip-container')}>
            팀 순위
            <div className={cx('tooltip-text')}>
                업데이트 날짜: {formattedDate}

            </div>
        </div>
    )
}
export default ToolTipForMainPage_teamscore
