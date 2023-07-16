import spidJOSN from '../../data/spid.json'
import SeasonJson from '../../data/season.json'
import Modal from 'react-bootstrap/Modal'
import ShowMatchDetailTableP1 from './ShowMatchDetailTableP1'
import ShowMatchDetailTableP2 from './ShowMatchDetailTableP2'
import styles from './InsideModal.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from '../Instance'
import axios from 'axios'
const cx = classNames.bind(styles)

function InsideModal (props) {
    const { matchInfo, index, indexk, closeModal } = props
    console.log(index)
    const convertspId = spidJOSN.find((spid) => spid.id === matchInfo[indexk].player[index - 1].spId)
    const firstThreeDigits = String(convertspId.id).substr(0, 3) // 첫 3자리 숫자를 잘라내어 변수에 저장
    const matchedSeason = SeasonJson.find((season) => season.seasonId == firstThreeDigits)
    const seasonImg = matchedSeason ? matchedSeason.seasonImg : '시즌 정보가 없습니다. API 업데이트가 되지 않았습니다. '
    const realvlaue = String(convertspId.id).substr(-6, 6)
    const realvalue = parseInt(realvlaue)
    const srcsrc = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${realvalue}.png`
    console.log('convertspId: ', convertspId)
    console.log(matchedSeason)
    // const playerStats = matchInfo[indexk - 1].player[index - 1].status;
    const dribble_distance_to_km = String(matchInfo[indexk].player[index - 1].status.dribble) * 0.0009144
    const searchById = () => { /// //선수 아이디를 기반으로 playerdb에서 스탯을 긁어옴
        axiosInstance.get('/testtest', {
            params: { spid: convertspId.id }
        }
        ).then((response) => {
            console.log(response.data)
            alert(response.data[0].NAME)
            // setData(response.data)
        })
    }
    //
    // const statsMap = [
    //     { label: '공중볼 경합 시도 수', value: playerStats.spRating },
    //     { label: '공중볼 경합 성공 수', value: playerStats.spRating },
    //     { label: '선수 평점', value: playerStats.aerialSuccess },
    //     { label: '어시스트 수', value: playerStats.assist },
    //     { label: '볼 소유 시도 수', value: playerStats.ballPossesionTry },
    //     { label: '볼 소유 성공 수', value: playerStats.ballPossesionSuccess },
    //     { label: '블락 성공 수', value: playerStats.block },
    //     { label: '블락 시도 수', value: playerStats.blockTry },
    //     { label: '디펜딩 수', value: playerStats.defending },
    //     { label: '드리블 거리 (km)', value: dribble_distance_to_km },
    //     { label: '드리블 성공 수', value: playerStats.dribbleSuccess },
    //     { label: '드리블 시도 수', value: playerStats.dribbleTry },
    //     { label: '유효 슛 수', value: playerStats.effectiveShoot },
    //     { label: '득점 수', value: playerStats.goal },
    //     { label: '인터셉트 수', value: playerStats.intercept },
    //     { label: '패스 시도 수', value: playerStats.passTry },
    //     { label: '패스 성공 수', value: playerStats.passSuccess },
    //     { label: '옐로카드 수', value: playerStats.yellowCards },
    //     { label: '레드카드 수', value: playerStats.redCards },
    //     { label: '슛 수', value: playerStats.shoot },
    //     { label: '태클 시도 수', value: playerStats.tackleTry }
    // ];

    return (// <div>
        //     <img src={seasonImg} alt=""/>
        //     {convertspId.name}<br></br>
        //
        //     <img src={srcsrc} alt=""/>
        //     {indexk}테이블의 {index} 번 째 로우를 클릭하셨습니다.<br></br>
        //     공중볼 경합 시도 수 :{matchInfo[indexk - 1].player[index - 1].status.spRating}
        //
        //     공중볼 경합 성공 수 :{matchInfo[indexk - 1].player[index - 1].status.spRating}
        //     선수 평점 :{matchInfo[indexk - 1].player[index - 1].status.aerialSuccess}
        //     어시스트 수:{matchInfo[indexk - 1].player[index - 1].status.assist}
        //     볼 소유 시도 수{matchInfo[indexk - 1].player[index - 1].status.ballPossesionTry}
        //     볼 소유 성공 수{matchInfo[indexk - 1].player[index - 1].status.ballPossesionSuccess}
        //     블락 성공 수:{matchInfo[indexk - 1].player[index - 1].status.block}
        //     블락 성공 수:{matchInfo[indexk - 1].player[index - 1].status.blockTry}
        //     디펜딩 수:{matchInfo[indexk - 1].player[index - 1].status.defending}
        //     드리블 거리 (야드):{matchInfo[indexk - 1].player[index - 1].status.dribble}
        //     드리블 성공 수{matchInfo[indexk - 1].player[index - 1].status.dribbleSuccess}
        //     드리블 시도 수:{matchInfo[indexk - 1].player[index - 1].status.dribbleTry}
        //
        //     유효 슛 수:{matchInfo[indexk - 1].player[index - 1].status.effectiveShoot}
        //     득점 수:{matchInfo[indexk - 1].player[index - 1].status.goal}
        //     인터셉트 수:{matchInfo[indexk - 1].player[index - 1].status.intercept}
        //     패스 시도 수:{matchInfo[indexk - 1].player[index - 1].status.passTry}
        //     패스 성공 수:{matchInfo[indexk - 1].player[index - 1].status.passSuccess}
        //     옐로카드 수:{matchInfo[indexk - 1].player[index - 1].status.yellowCards}
        //     레드카드 수:{matchInfo[indexk - 1].player[index - 1].status.redCards}
        //     슛 수:{matchInfo[indexk - 1].player[index - 1].status.shoot}
        //     태클 시도 수:{matchInfo[indexk - 1].player[index - 1].status.tackleTry}
        //     태클 성공 수:{matchInfo[indexk - 1].player[index - 1].status.tackle}
        //
        //
        // </div>
        <div className={cx('modal__backdrop')}>
            <div className={cx('modal__container')}>
                <h3 className={cx('modal__title')}>선수 정보</h3>
                <div className={cx('table_wrapper')}>
                    <div className={cx('player-info')}>
                        <div className={cx('player-container')}>
                            {/* <div className={cx('frame')}> */}
                            <img src={srcsrc} alt="" className={cx('playerImg')}/>
                            <div className={cx('player-info-container')}>
                                <div className={cx('seasonImg')}>
                                    <img src={seasonImg} alt="" />
                                </div>
                                <div className={cx('name')}>
                                    <p>{convertspId.name}</p>
                                    <button onClick={searchById}>선수 스탯 조회</button>
                                </div>
                            </div>
                        </div>

                        {/* <p> */}
                        {/*    {indexk}테이블의 {index} 번 째 로우를 클릭하셨습니다. */}
                        {/* </p> */}
                        <div className={cx('stats')}>
                            {/* <p>{indexk}</p> */}
                            {/* <p>{index}</p> */}
                            <div className={cx('stats_line1')}>
                                <p>평점: {matchInfo[indexk].player[index - 1].status.spRating}</p>
                                <p>공중볼 경합 시도 수: {matchInfo[indexk].player[index - 1].status.aerialTry}</p>
                                <p>공중볼 경합 성공 수: {matchInfo[indexk].player[index - 1].status.aerialSuccess}</p>
                                <p>어시스트 수: {matchInfo[indexk].player[index - 1].status.assist}</p>
                                <p>볼 소유 시도 수: {matchInfo[indexk].player[index - 1].status.ballPossesionTry}</p>
                                <p>볼 소유 성공 수: {matchInfo[indexk].player[index - 1].status.ballPossesionSuccess}</p>
                                <p>블락 성공 수: {matchInfo[indexk].player[index - 1].status.block}</p>
                                <p>블락 시도 수: {matchInfo[indexk].player[index - 1].status.blockTry}</p>
                                <p>디펜딩 수: {matchInfo[indexk].player[index - 1].status.defending}</p>
                            </div>
                            <div className={cx('stats_line2')}>
                                <p>드리블 거리 (km): {dribble_distance_to_km}</p>
                                <p>드리블 성공 수: {matchInfo[indexk].player[index - 1].status.dribbleSuccess}</p>
                                <p>드리블 시도 수: {matchInfo[indexk].player[index - 1].status.dribbleTry}</p>
                                <p>유효 슛 수: {matchInfo[indexk].player[index - 1].status.effectiveShoot}</p>
                                <p>득점 수: {matchInfo[indexk].player[index - 1].status.goal}</p>
                                <p>인터셉트 수: {matchInfo[indexk].player[index - 1].status.intercept}</p>
                                <p>패스 시도 수: {matchInfo[indexk].player[index - 1].status.passTry}</p>
                                <p>패스 성공 수: {matchInfo[indexk].player[index - 1].status.passSuccess}</p>
                                <p>옐로카드 수: {matchInfo[indexk].player[index - 1].status.yellowCards}</p>
                                <p>레드카드 수: {matchInfo[indexk].player[index - 1].status.redCards}</p>
                                <p>슛 수: {matchInfo[indexk].player[index - 1].status.shoot}</p>
                                <p>태클 시도 수: {matchInfo[indexk].player[index - 1].status.tackleTry}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <button className={cx('button')} type="button" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
        // <div className="player-info">
        //     <img src={seasonImg} alt=""/>
        //     <div>
        //         <img src={srcsrc} alt=""/>
        //         {/* {convertspId.name} */}
        //         <p className="name">{convertspId.name}</p>
        //     </div>
        //
        //     {/* <p> */}
        //     {/*    {indexk}테이블의 {index} 번 째 로우를 클릭하셨습니다. */}
        //     {/* </p> */}
        //     <div className="stats">
        //         <p>{indexk}</p>
        //         <p>{index}</p>
        //         <p>선수 평점: {matchInfo[indexk].player[index - 1].status.spRating}</p>
        //         <p>공중볼 경합 시도 수: {matchInfo[indexk].player[index - 1].status.aerialTry}</p>
        //         <p>공중볼 경합 성공 수: {matchInfo[indexk].player[index - 1].status.aerialSuccess}</p>
        //         <p>어시스트 수: {matchInfo[indexk].player[index - 1].status.assist}</p>
        //         <p>볼 소유 시도 수: {matchInfo[indexk].player[index - 1].status.ballPossesionTry}</p>
        //         <p>볼 소유 성공 수: {matchInfo[indexk].player[index - 1].status.ballPossesionSuccess}</p>
        //         {/* <p>블락 성공 수: {matchInfo[indexk - 1].player[index - 1].status.block}</p> */}
        //         {/* <p>블락 시도 수: {matchInfo[indexk - 1].player[index - 1].status.blockTry}</p> */}
        //         {/* <p>디펜딩 수: {matchInfo[indexk - 1].player[index - 1].status.defending}</p> */}
        //         {/* <p>드리블 거리 (km): {dribble_distance_to_km}</p> */}
        //         {/* <p>드리블 성공 수: {matchInfo[indexk - 1].player[index - 1].status.dribbleSuccess}</p> */}
        //         {/* <p>드리블 시도 수: {matchInfo[indexk - 1].player[index - 1].status.dribbleTry}</p> */}
        //         {/* <p>유효 슛 수: {matchInfo[indexk - 1].player[index - 1].status.effectiveShoot}</p> */}
        //         {/* <p>득점 수: {matchInfo[indexk - 1].player[index - 1].status.goal}</p> */}
        //         {/* <p>인터셉트 수: {matchInfo[indexk - 1].player[index - 1].status.intercept}</p> */}
        //         {/* <p>패스 시도 수: {matchInfo[indexk - 1].player[index - 1].status.passTry}</p> */}
        //         {/* <p>패스 성공 수: {matchInfo[indexk - 1].player[index - 1].status.passSuccess}</p> */}
        //         {/* <p>옐로카드 수: {matchInfo[indexk - 1].player[index - 1].status.yellowCards}</p> */}
        //         {/* <p>레드카드 수: {matchInfo[indexk - 1].player[index - 1].status.redCards}</p> */}
        //         {/* <p>슛 수: {matchInfo[indexk - 1].player[index - 1].status.shoot}</p> */}
        //         {/* <p>태클 시도 수: {matchInfo[indexk - 1].player[index - 1].status.tackleTry}</p> */}
        //
        //     </div>
        //
        // </div>

    )
}

export default InsideModal
