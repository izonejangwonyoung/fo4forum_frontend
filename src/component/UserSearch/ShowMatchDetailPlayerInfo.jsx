import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from '../css/ShowMatchDetailPlayerInfo.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from '../Instance'
const cx = classNames.bind(styles)
const ShowMatchDetailPlayerInfo = (props) => {
    const { matchInfo } = props
    const tableNumber = useSelector((state) => state.myData.data.tableNumber)
    const rowNumber = useSelector((state) => state.myData.data.rowNumber)
    const temp = rowNumber - 1
    const [imgsrc, setimgsrc] = useState('')
    const [seasonImg, setSeasonImg] = useState('')
    const [actionimgsrc, setactionimgsrc] = useState('')
    const [playerData, setPlayerData] = useState('')
    useEffect(() => {
        if (!rowNumber || !matchInfo[tableNumber]?.player[temp]?.spId) {
            return
        }
        /// spid 기반으로 DB에서 선수 정보 찾아서 fetch
        axiosInstance('/SearchPlayerInfo', {
            params: { spid: matchInfo[tableNumber].player[temp].spId }
        }
        ).then((response) => {
            setPlayerData(response.data)
            console.log(tableNumber, 'tablenumber')
            console.log(rowNumber, 'rownumber')
            console.log(playerData, 'playerdata 출력')
        })
        /// /아이디 기반으로 시즌 이미지 url fetch
        axiosInstance('/SearchSeasonImg', {
            params: { seasonid: String(matchInfo[tableNumber].player[temp].spId).substring(0, 3) }
        }).then((response) => {
            setSeasonImg(response.data)
        })

        const spid = String(matchInfo[tableNumber].player[temp].spId) // 문자열로 변환
        const convertSpid = spid.substr(-6, 6)
        const imgSrc = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${convertSpid}.png`
        const actionimgSrc = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${spid}.png`
        setimgsrc(imgSrc)
        setactionimgsrc(actionimgSrc)
    }, [tableNumber, rowNumber, matchInfo, temp])
    console.log(matchInfo[0], 'matchinfo for test')
    if (!rowNumber) {
        return null // 또는 다른 fallback 처리를 해줄 수도 있습니다.
    }
    /// /공통 이미지가 존재하지 않을 경우 action 이미지를 불러와서 이미지를 띄운다
    const handleImageError = () => {
        setimgsrc(actionimgsrc)
    }
    return (
        <div>
            <div className={cx('player_name')}>
                {playerData && playerData.length > 0 && (
                    <>
                        <p>{playerData[0].NAME}</p>
                        <img src={seasonImg} alt="" />
                        table number :{tableNumber}
                        row number: {rowNumber}
                    </>
                )}
            </div>
            <div className={cx('player_img')}>
                <img src={imgsrc} onError={handleImageError} alt=""/>
            </div>
            <div className={cx('playerInfo')}>
                <div className={cx('t1')}>
                    <p>평점: {matchInfo[0].player[temp].status.spRating}</p>
                    <p>공중볼 경합 시도 수: {matchInfo[0].player[temp].status.aerialTry}</p>
                    <p>공중볼 경합 성공 수: {matchInfo[0].player[temp].status.aerialSuccess}</p>
                    <p>어시스트 수: {matchInfo[0].player[temp].status.assist}</p>
                    <p>볼 소유 시도 수: {matchInfo[0].player[temp].status.ballPossesionTry}</p>
                    <p>볼 소유 성공 수: {matchInfo[0].player[temp].status.ballPossesionSuccess}</p>
                    <p>블락 성공 수: {matchInfo[0].player[temp].status.block}</p>
                    <p>블락 시도 수: {matchInfo[0].player[temp].status.blockTry}</p>
                    <p>디펜딩 수: {matchInfo[0].player[temp].status.defending}</p>
                </div>
                <div className={cx('t2')}>
                    <p>드리블 성공 수: {matchInfo[0].player[temp].status.dribbleSuccess}</p>
                    <p>드리블 시도 수: {matchInfo[0].player[temp].status.dribbleTry}</p>
                    <p>유효 슛 수: {matchInfo[0].player[temp].status.effectiveShoot}</p>
                    <p>득점 수: {matchInfo[0].player[temp].status.goal}</p>
                    <p>인터셉트 수: {matchInfo[0].player[temp].status.intercept}</p>
                    <p>패스 시도 수: {matchInfo[0].player[temp].status.passTry}</p>
                    <p>패스 성공 수: {matchInfo[0].player[temp].status.passSuccess}</p>
                    <p>옐로카드 수: {matchInfo[0].player[temp].status.yellowCards}</p>
                    <p>레드카드 수: {matchInfo[0].player[temp].status.redCards}</p>
                    <p>슛 수: {matchInfo[0].player[temp].status.shoot}</p>
                    <p>태클 시도 수: {matchInfo[0].player[temp].status.tackleTry}</p>
                </div>
                {/* <p>드리블 거리 (km): {dribble_distance_to_km}</p> */}
            </div>
        </div>
    )
}

export default ShowMatchDetailPlayerInfo
