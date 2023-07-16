import TraitsOverlay from './Tooltip'
import PlayerDetail from './PlayerDetail'
import React, { useEffect, useState } from 'react'
import styles from './css/ShowFOPlayerSearchDetail.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from './Instance'
import axios from 'axios'
const cx = classNames.bind(styles)
function ShowFOPlayerSearchDetail (props) {
    const { data, responseData } = props
    const [cardovr, setcardovr] = useState()
    const [teamImg, setTeamImg] = useState()
    const [IsTeamExist, setIsTeamExist] = useState()
    const [clubImg, setClubImg] = useState()
    const [playerFaceImg, setPlayerFaceImg] = useState()
    const apiUrl = process.env.REACT_APP_API_URL
    const FetchImgUrlFromDBonError = (event) => {
        event.target.onerror = null
        event.target.src = clubImg
    }
    const FetchPlayerFaceImgFromFO4onError = (event) => {
        event.target.onerror = null
        event.target.src = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${data.ID}.png?rd=202305261040`
    }

    useEffect(() => {
        axiosInstance('/SearchNationImg', {
            params: { nation: data.NATIONALITY }
        }).then((response) => {
            setTeamImg(response.data)
        })
        if ((data.CLUB) != null) { /// 클럽 컬럼에 무엇인가 들어있으면,
            setIsTeamExist(data.CLUB)
            axiosInstance('/SearchClubImg', {
                params: { club: IsTeamExist }
            }).then((response) => {
                setClubImg(response.data)
                console.log(teamImg, 'teamimg url')
            })
        }
    })
    let i = 0
    i = i + 1
    console.log(i)
    console.log(props.data)
    // responseData.sort((a, b) => b.pay_side - a.pay_side)
    const result = ''
    const aa = `https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/${data.SEASON}.png` // 시즌 카드
    const bb = `https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/card/${data.SEASON}.png` // 카드 배경

    const ex11 = data.ID
    console.log('data.id', data.ID, 'ex11', ex11, 'typeofex11', typeof ex11)
    const tempvalue = ex11.toString()
    const ex22 = tempvalue.slice(-6)

    console.log('ex22', ex22, 'temp', tempvalue)
    const realvalue = parseInt(ex22) /// id 값을 6자리로 자르고 앞에 0 뺀거
    const testestest = data.id
    // let count = 0
    const stars = data.SKILL
    const star = stars.toString()
    console.log(star, 'stars')
    // for (let i = 0; i < stars.length; i++) {
    //     if (stars[i] === '1') {
    //         count++
    //     }
    // }
    let star_result = ''
    console.log(star.length, 'star의 길이')
    for (let i = 0; i < star.length; i++) {
        star_result += '★' // UTF-8 이모티콘 '별' 추가
    }
    console.log(star_result, 'star result')

    console.log(data.id)
    const str = `${data.FEATURE}`
    // const arr = str.split(",");
    const arr = str.split(',').map((item) => item.trim())

    console.log('특성 리스트에 담긴 값', arr)
    const imageList = arr.map((it, index) => {
        console.log('it', it)
        if (it === '아웃사이드 슈팅/크로스') {
            it = '아웃 사이드 슈팅크로스'
        }
        return (
            <div style={{ display: 'inline-block' }} key={index}>
                <TraitsOverlay it={it}/>
            </div>
        )
    })

    const [addValue, setAddValue] = useState('0')
    const [addLevelValue, setLevelValue] = useState('0')

    const changeEnforce = (event) => {
        const enforceValue = event.target.value

        // setEnforce(enforceValue);

        if (enforceValue === '0') {
            setAddValue('-3')
        } else if (enforceValue === '1') {
            setAddValue('0')
        } else if (enforceValue === '2') {
            setAddValue('1')
        } else if (enforceValue === '3') {
            setAddValue('2')
        } else if (enforceValue === '4') {
            setAddValue('4')
        } else if (enforceValue === '5') {
            setAddValue('6')
        } else if (enforceValue === '6') {
            setAddValue('8')
        } else if (enforceValue === '7') {
            setAddValue('11')
        } else if (enforceValue === '8') {
            setAddValue('15')
        } else if (enforceValue === '9') {
            setAddValue('19')
        } else if (enforceValue === '10') {
            setAddValue('23')
        }
    }
    const changeLevel = (event) => {
        const levelValue = event.target.value

        // setEnforce(enforceValue);

        if (levelValue === '1') {
            setLevelValue('0')
        } else if (levelValue === '2') {
            setLevelValue('1')
        } else if (levelValue === '3') {
            setLevelValue('2')
        } else if (levelValue === '4') {
            setLevelValue('3')
        } else if (levelValue === '5') {
            setLevelValue('4')
        }
    }

    const ovrValues = {
        ovr_st: data.OVR_ST,
        ovr_lw: data.OVR_LW,
        ovr_cf: data.OVR_CF,
        ovr_rw: data.OVR_RW,
        ovr_cam: data.OVR_CAM,
        ovr_lm: data.OVR_LM,
        ovr_cm: data.OVR_CM,
        ovr_rm: data.OVR_RM,
        ovr_cdb: data.OVR_CDB,
        ovr_lwb: data.OVR_LWB,
        ovr_cb: data.OVR_CB,
        ovr_rwb: data.OVR_RWB,
        ovr_lb: data.OVR_LB,
        ovr_sw: data.OVR_SW,
        ovr_rb: data.OVR_RB,
        ovr_gk: data.OVR_GK
    }
    const attributes = {
        acceleration: parseInt(props.data.ACCELERATION),
        finishing: parseInt(props.data.FINISHING),
        shotpower: parseInt(props.data.SHOTPOWER),
        longrangeshoot: parseInt(props.data.LONGRANGESHOOT),
        positioning: parseInt(props.data.POSITIONING),
        volleyshot: parseInt(props.data.VOLLEYSHOT),
        penaltykick: parseInt(props.data.PENALTYKICK),
        shortpass: parseInt(props.data.SHORTPASS),
        vision: parseInt(props.data.VISION),
        cross: parseInt(props.data.CROSS),
        longpass: parseInt(props.data.LONGPASS),
        curve: parseInt(props.data.CURVE),
        dribble: parseInt(props.data.DRIBBLE),
        ballcontrol: parseInt(props.data.BALLCONTROL),
        agility: parseInt(props.data.AGILITY),
        balance: parseInt(props.data.BALANCE),
        reaction: parseInt(props.data.REACTION),
        marking: parseInt(props.data.MARKING),
        tackle: parseInt(props.data.TACKLE),
        intercept: parseInt(props.data.INTERCEPT),
        header: parseInt(props.data.HEADER),
        slidingtackle: parseInt(props.data.SLIDINGTACKLE),
        strength: parseInt(props.data.STRENGTH),
        stamina: parseInt(props.data.STAMINA),
        aggression: parseInt(props.data.AGGRESSION),
        jump: parseInt(props.data.JUMP),
        composure: parseInt(props.data.COMPOSURE),
        gk_diving: parseInt(props.data.GK_DIVING),
        gk_handling: parseInt(props.data.GK_HANDLING),
        gk_positioning: parseInt(props.data.GK_POSITIONING),
        gk_reaction: parseInt(props.data.GK_REACTION),
        gk_kick: parseInt(props.data.GK_KICK),
        ovr_st: parseInt(props.data.OVR_ST),
        ovr_lw: parseInt(props.data.OVR_LW),
        ovr_cf: parseInt(props.data.OVR_CF),
        ovr_rw: parseInt(props.data.OVR_RW),
        ovr_cam: parseInt(props.data.OVR_CAM),
        ovr_lm: parseInt(props.data.OVR_LM),
        ovr_rm: parseInt(props.data.OVR_RM),
        ovr_cm: parseInt(props.data.OVR_CM),
        ovr_cdb: parseInt(props.data.OVR_CDB),
        ovr_lwb: parseInt(props.data.OVR_LWB),
        ovr_cb: parseInt(props.data.OVR_CB),
        ovr_rwb: parseInt(props.data.OVR_RWB),
        ovr_lb: parseInt(props.data.OVR_LB),
        ovr_sw: parseInt(props.data.OVR_SW),
        ovr_rb: parseInt(props.data.OVR_RB),
        ovr_gk: parseInt(props.data.OVR_GK)
    }
    for (const key in attributes) {
        attributes[key] += parseInt(addValue) + parseInt(addLevelValue)
    }

    // 가장 큰 값을 저장할 변수를 초기화합니다.
    let maxOvrValue = 0
    //     let maxOvrKey = '';

    // Object.values() 메서드를 사용해 값들만 가져온 후, Math.max() 함수를 사용해 가장 큰 값을 구합니다.
    const ovrArray = Object.values(ovrValues)
    maxOvrValue = Math.max(...ovrArray)
    console.log('maxOverValue', maxOvrValue)
    const [maxOvrKey] = Object.entries(ovrValues).reduce(
        (acc, [key, value]) => {
            if (value > acc[1]) {
                return [key, value]
            }
            return acc
        },
        [null, -Infinity] // null로 초기화
    )
    console.log('ss', maxOvrKey)

    const [prefix, name] = maxOvrKey.split('_')
    const cardpositionname = name.toUpperCase()
    console.log(cardpositionname) // 'st'
    console.log(cardpositionname, maxOvrValue)

    return (
        <div className={cx('container')} key={data.ID}>
            <div className={cx('container_card')} >
                <div className={cx('card_background')}>
                    <img src={bb} alt=""/>
                </div>
                <div className={cx('card_playerface')}>
                    <img src={`${apiUrl}/searchs?filename=` + data.ID} alt="" onError={FetchPlayerFaceImgFromFO4onError}/>
                </div>
                <div className={cx('card_season')}>
                    <img src={`${apiUrl}/searchTeamLogo?filename=` + data.SEASON + '.png'} onError={FetchImgUrlFromDBonError}
                        alt=""/>
                </div>
                <div className={cx('card_nation')}>
                    <img src={teamImg} alt=""/>
                </div>
                <img className={cx('card_hex')}
                    src={`${apiUrl}/etc?filename=hex`} alt=""/>
                <div className={cx('card_ovr')}
                >
                    {cardovr}
                </div>
                <div className={cx('card_payside')}>{data.PAY_SIDE}</div>
                <div
                    className={cx('card_idontknow')} ></div>
                <div className={cx('card_playername')}>
                    <img style={{ top: '10px', left: '10px', verticalAlign: 'middle' }} src={aa} alt=""/>
                    <marquee style={{ top: '10px', verticalAlign: 'middle', marginLeft: '5px' }}
                        width="100" direction="left">{data.NAME}</marquee>
                </div>
            </div>
            <div className={cx('card_introduce')}>
                <div className={cx('card_introduce_txt')}>
                    이름:{data.NAME} |국적:{data.NATIONALITY} | 급여:{data.PAY_SIDE} | id:{data.ID} | 시즌:{data.SEASON}시즌 |
                        개인기:{star_result} |
                </div>
                <div className={cx('soccer_field_img')}>
                    <img src={`${apiUrl}/etc?filename=field.png`} />
                    <div className={cx('soccer_field_st')}>
                        {attributes.ovr_st}
                    </div>
                    <div className={cx('soccer_field_lw')}>
                        {attributes.ovr_lw}
                    </div>
                    <div className={cx('soccer_field_cf')}>
                        {attributes.ovr_cf}
                    </div>
                    <div className={cx('soccer_field_rw')}>
                        {attributes.ovr_rw}
                    </div>
                    <div className={cx('soccer_field_cam')}>
                        {attributes.ovr_cam}
                    </div>
                    <div className={cx('soccer_field_lm')}>
                        {attributes.ovr_lm}
                    </div>
                    <div className={cx('soccer_field_rm')}>
                        {attributes.ovr_rm}
                    </div>
                    <div className={cx('soccer_field_cm')}>
                        {attributes.ovr_cm}
                    </div>
                    <div className={cx('soccer_field_cdb')}>
                        {attributes.ovr_cdb}
                    </div>
                    <div className={cx('soccer_field_lwb')}>
                        {attributes.ovr_lwb}
                    </div>
                    <div className={cx('soccer_field_cb')}>
                        {attributes.ovr_cb}
                    </div>
                    <div className={cx('soccer_field_rwb')}>
                        {attributes.ovr_rwb}
                    </div>
                    <div className={cx('soccer_field_lb')}>
                        {attributes.ovr_lb}
                    </div>
                    <div className={cx('soccer_field_sw')}>
                        {attributes.ovr_sw}
                    </div>
                    <div className={cx('soccer_field_rb')}>
                        {attributes.ovr_rb}
                    </div>
                    <div className={cx('soccer_field_gk')}>
                        {attributes.ovr_gk}
                    </div>
                </div>
                {
                    <div className={cx('trait_img_container')}>{imageList}</div>
                }
                <PlayerDetail data={data} maxOvrValue={maxOvrValue} changeEnforce={changeEnforce} changeLevel={changeLevel}
                    addValue={addValue} addLevelValue={addLevelValue} setcardovr={setcardovr}/>

            </div>
        </div>
    )
}

export default ShowFOPlayerSearchDetail
