import React from 'react'
import styles from './css/vote_container.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const Vote_Container = (props) => {
    const { it, index, sendVote1, sendVote2 } = props
    const apiUrl = process.env.REACT_APP_API_URL

    const handlePhotoError = (event) => {
        const img = event.target
        const ID = it.PLAYER1_ID
        const idSuffix = String(ID).slice(-6) // Extract the last 6 characters
        console.log(idSuffix, '잘라낸 것들')
        // Remove leading zero if present
        const processedID = idSuffix.startsWith('0') ? idSuffix.slice(1) : idSuffix

        if (img.src !== `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`) {
            img.src = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`
        }
    }
    const handlePhoto2Error = (event) => {
        const img = event.target
        const ID = it.PLAYER2_ID
        const idSuffix = String(ID).slice(-6) // Extract the last 6 characters
        console.log(idSuffix, '잘라낸 것들')
        // Remove leading zero if present
        const processedID = idSuffix.startsWith('0') ? idSuffix.slice(1) : idSuffix

        if (img.src !== `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`) {
            img.src = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`
        }
    }
    return (
        <div className={cx('main_container')} key={index}>
            <div className={cx('desc')}>
                No.{it.ID} - {it.TITLE}
            </div>
            <div className={cx('player_box')}>
                <div className={cx('player1')}>
                    <div>
                        <div>

                        </div>
                        <div className={cx('player1_info_container')}>
                            <div className={cx('player1_img')}>
                                <img
                                    src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${it.PLAYER1_ID}.png`}
                                    onError={handlePhotoError} alt="사진이 제공되지 않는 선수입니다."/>
                            </div>
                            <div className={cx('player1_name')}>
                                <img src={`${apiUrl}/searchTeamlogo?filename=${it.PLAYER1_SEASON}`}
                                    alt="선수 팀 로고"/>
                                {it.PLAYER1_SEASON}  {it.PLAYER1_NAME}
                            </div>
                        </div>
                        <div className={cx('btn_container')}>
                            <a className={cx('click-btn', 'btn-style504')}
                                onClick={() => sendVote1(it.ID)}>투표하기</a>
                        </div>
                    </div>
                    <div className={cx('player1_score')}>{it.PLAYER1_SCORE}</div>
                </div>

                {/* 플레이어2 시작 지점 */}
                <div className={cx('player2')}>
                    <div className={cx('player2_score')}>
                        {it.PLAYER2_SCORE}
                    </div>
                    <div>
                        <div className={cx('player2_info_container')}>
                            <div className={cx('player2_img')}>
                                <img
                                    src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${it.PLAYER2_ID}.png`}
                                    onError={handlePhoto2Error} alt="사진이 제공되지 않는 선수입니다."/>
                            </div>
                            <div className={cx('player2_name')}>
                                <img src={`${apiUrl}/searchTeamlogo?filename=${it.PLAYER2_SEASON}`}
                                    alt="선수 팀 로고" onError={(e) => {
                                        e.target.style.display = 'none'
                                    }}
                                />
                                {it.PLAYER2_SEASON}  {it.PLAYER2_NAME}
                            </div>
                        </div>
                        <div className={cx('btn_container')}>
                            <a className={cx('click-btn', 'btn-style504')}
                                onClick={() => sendVote2(it.ID)}>투표하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vote_Container
