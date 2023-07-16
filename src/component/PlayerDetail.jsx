import { useEffect, useState } from 'react'
import styles from './css/PlayerDetail.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function PlayerDetail (props) {
    const { addValue, changeEnforce, setcardovr, changeLevel, addLevelValue } = props
    const [Enforece, setEnforce] = useState('1')
    // const [addValue, setAddValue] = useState('0')

    // useEffect(() => {
    //
    // })
    // const changeEnforce = (event) => {
    //     const enforceValue = event.target.value;
    //
    //     // setEnforce(enforceValue);
    //
    //     if (enforceValue === '0') {
    //         setAddValue('-3');
    //     } else if (enforceValue === '1') {
    //         setAddValue('0');
    //     } else if (enforceValue === '2') {
    //         setAddValue('1');
    //     } else if (enforceValue === '3') {
    //         setAddValue('2');
    //     } else if (enforceValue === '4') {
    //         setAddValue('4');
    //     } else if (enforceValue === '5') {
    //         setAddValue('6');
    //     } else if (enforceValue === '6') {
    //         setAddValue('8');
    //     } else if (enforceValue === '7') {
    //         setAddValue('11');
    //     } else if (enforceValue === '8') {
    //         setAddValue('15');
    //     } else if (enforceValue === '9') {
    //         setAddValue('19');
    //     } else if (enforceValue === '10') {
    //         setAddValue('23');
    //     }
    // }
    const speed = parseInt(props.data.SPEED) + parseInt(addValue) + parseInt(addLevelValue)
    const bestovr = parseInt(props.maxOvrValue) + parseInt(addValue) + parseInt(addLevelValue)
    setcardovr(parseInt(props.maxOvrValue) + parseInt(addValue) + parseInt(addLevelValue))
    // const acceleration = parseInt(props.data.ACCELERATION) + parseInt(addValue) + parseInt(addLevelValue)
    // const finishing = parseInt(props.data.FINISHING) + parseInt(addValue) + parseInt(addLevelValue)
    // const shotpower = parseInt(props.data.SHOTPOWER) + parseInt(addValue) + parseInt(addLevelValue)
    // const longrangeshoot = parseInt(props.data.LONGRANGESHOOT) + parseInt(addValue) + parseInt(addLevelValue)
    // const positioning = parseInt(props.data.POSITIONING) + parseInt(addValue) + parseInt(addLevelValue)
    // const volleyshot = parseInt(props.data.VOLLEYSHOT) + parseInt(addValue) + parseInt(addLevelValue)
    // const penaltykick = parseInt(props.data.PENALTYKICK) + parseInt(addValue) + parseInt(addLevelValue)
    // const shortpass = parseInt(props.data.SHORTPASS) + parseInt(addValue) + parseInt(addLevelValue)
    // const vision = parseInt(props.data.VISION) + parseInt(addValue) + parseInt(addLevelValue)
    // const cross = parseInt(props.data.CROSS) + parseInt(addValue) + parseInt(addLevelValue)
    // const longpass = parseInt(props.data.LONGPASS) + parseInt(addValue) + parseInt(addLevelValue)
    // const curve = parseInt(props.data.CURVE) + parseInt(addValue) + parseInt(addLevelValue)
    // const dribble = parseInt(props.data.DRIBBLE) + parseInt(addValue) + parseInt(addLevelValue)
    // const ballcontrol = parseInt(props.data.BALLCONTROL) + parseInt(addValue) + parseInt(addLevelValue)
    // const agility = parseInt(props.data.AGILITY) + parseInt(addValue) + parseInt(addLevelValue)
    // const balance = parseInt(props.data.BALANCE) + parseInt(addValue) + parseInt(addLevelValue)
    // const reaction = parseInt(props.data.REACTION) + parseInt(addValue) + parseInt(addLevelValue)
    // const marking = parseInt(props.data.MARKING) + parseInt(addValue) + parseInt(addLevelValue)
    // const tackle = parseInt(props.data.TACKLE) + parseInt(addValue) + parseInt(addLevelValue)
    // const intecept = parseInt(props.data.INTERCEPT) + parseInt(addValue) + parseInt(addLevelValue)
    // const header = parseInt(props.data.HEADER) + parseInt(addValue) + parseInt(addLevelValue)
    // const slidingtackle = parseInt(props.data.SLIDINGTACKLE) + parseInt(addValue) + parseInt(addLevelValue)
    // const strength = parseInt(props.data.STRENGTH) + parseInt(addValue) + parseInt(addLevelValue)
    // const stamina = parseInt(props.data.STAMINA) + parseInt(addValue) + parseInt(addLevelValue)
    // const aggression = parseInt(props.data.AGGRESSION) + parseInt(addValue) + parseInt(addLevelValue)
    // const jump = parseInt(props.data.JUMP) + parseInt(addValue) + parseInt(addLevelValue)
    // const composure = parseInt(props.data.COMPOSURE) + parseInt(addValue) + parseInt(addLevelValue)
    // const gk_diving = parseInt(props.data.GK_DIVING) + parseInt(addValue) + parseInt(addLevelValue)
    // const gk_handling = parseInt(props.data.GK_HANDLING) + parseInt(addValue) + parseInt(addLevelValue)
    // const gk_positioning = parseInt(props.data.GK_POSITIONING) + parseInt(addValue) + parseInt(addLevelValue)
    // const gk_reaction = parseInt(props.data.GK_REACTION) + parseInt(addValue) + parseInt(addLevelValue)
    // const gk_kick = parseInt(props.data.GK_KICK) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_st = parseInt(props.data.OVR_ST) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_lw = parseInt(props.data.OVR_LW) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_cf = parseInt(props.data.OVR_CF) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_rw = parseInt(props.data.OVR_RW) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_cam = parseInt(props.data.OVR_CAM) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_lm = parseInt(props.data.OVR_LM) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_rm = parseInt(props.data.OVR_RM) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_cm = parseInt(props.data.OVR_CM) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_cdb = parseInt(props.data.OVR_CDB) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_lwb = parseInt(props.data.OVR_LWB) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_cb = parseInt(props.data.OVR_CB) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_rwb = parseInt(props.data.OVR_RWB) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_lb = parseInt(props.data.OVR_LB) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_sw = parseInt(props.data.OVR_SW) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_rb = parseInt(props.data.OVR_RB) + parseInt(addValue) + parseInt(addLevelValue)
    // const ovr_gk = parseInt(props.data.OVR_GK) + parseInt(addValue) + parseInt(addLevelValue)

    const setStatColor = (value) => {
        let color
        if (value >= 140) {
            color = '#c99b00'
        } else if (value >= 130) {
            color = '#dc0000'
        } else if (value >= 120) {
            color = '#cf13c0'
        } else if (value >= 110) {
            color = '#b33bff'
        } else if (value >= 100) {
            color = '#6e3bff'
        } else if (value >= 90) {
            color = '#175dde'
        } else if (value >= 80) {
            color = '#2194d6'
        } else {
            color = '#8f96a0'
        }
        return color
    }
    // if (speed >= 140) {
    //     color = '#c99b00'
    // } else if (speed >= 130) {
    //     color = '#dc0000'
    // } else if (speed >= 120) {
    //     color = '#cf13c0'
    // } else if (speed >= 110) {
    //     color = '#b33bff'
    // } else if (speed >= 100) {
    //     color = '#6e3bff'
    // } else if (speed >= 90) {
    //     color = '#175dde'
    // } else if (speed >= 80) {
    //     color = '#2194d6'
    // } else {
    //     color = '#8f96a0'
    // }
    const attributes_name = [
        '속력',
        '가속력',
        '골결정력',
        '슛 파워',
        '중거리슛',
        '위치 선정',
        '발리슛',
        '패널티 킥',
        '짧은 패스',
        '시야',
        '크로스',
        '긴 패스',
        '프리직',
        '커브',
        '드리블',
        '볼 컨트롤',
        '민첩성',
        '밸런스',
        '반응 속도',
        '대인 수비',
        '태클',
        '가로채기',
        '헤더',
        '슬라이딩 태클',
        '몸싸움',
        '스태미너',
        '적극성',
        '점프',
        '침착성',
        'gk 다이빙',
        'gk 핸들링',
        'gk 킥',
        'gk 반응속도',
        'gk 위치선정',
        'st 능력치',
        'lw 능력치',
        'cf 능력치',
        'rw 능력치',
        'cam 능력치',
        'lm 능력치',
        'cm 능력치',
        'rm 능력치',
        'cdb 능력치',
        'lwb 능력치',
        'cb 능력치',
        'rwb 능력치',
        'lb 능력치',
        'sw 능력치',
        'rb 능력치',
        'gk 능력치'
    ]

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
    return (
        <div className={cx('container')}>
            <div className={cx('select_boxes')}>
                <select onChange={changeEnforce} className="w150" style={{
                    backgroundColor: '#fff',
                    color: '#333',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    width: '200px',
                    ':hover': { borderColor: '#555' },
                    ':focus': { outline: 'none' },
                    ':active': { borderColor: '#555' }
                }}>
                    <option disabled selected>강화</option>
                    <option value="0">0강</option>
                    <option value="1">1강</option>
                    <option value="2">2강</option>
                    <option value="3">3강</option>
                    <option value="4">4강</option>
                    <option value="5">5강</option>
                    <option value="6">6강</option>
                    <option value="7">7강</option>
                    <option value="8">8강</option>
                    <option value="9">9강</option>
                    <option value="10">10강</option>
                </select>
                <select onChange={changeLevel} className="w150" style={{
                    backgroundColor: '#fff',
                    color: '#333',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    width: '200px',
                    ':hover': { borderColor: '#555' },
                    ':focus': { outline: 'none' },
                    ':active': { borderColor: '#555' }
                }}>
                    <option disabled selected>적응도</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>

            </div>
            <div className={cx('stat_box')}>
                <div>
                    <div>Acceleration</div>
                    <div style={{ color: setStatColor(attributes.acceleration) }}>{attributes.acceleration}</div>
                </div>
                <div>
                    <div>Finishing</div>
                    <div style={{ color: setStatColor(attributes.finishing) }}>
                        {attributes.finishing}
                    </div>
                </div>
                <div>
                    <div>Shot Power</div>
                    <div style={{ color: setStatColor(attributes.shotpower) }}>
                        {attributes.shotpower}
                    </div>
                </div>
                <div>
                    <div>Long Range Shoot</div>
                    <div style={{ color: setStatColor(attributes.longrangeshoot) }}>
                        {attributes.longrangeshoot}
                    </div>
                </div>
                <div>
                    <div>Positioning</div>
                    <div style={{ color: setStatColor(attributes.positioning) }}>
                        {attributes.positioning}
                    </div>
                </div>
                <div>
                    <div>Volley Shot</div>
                    <div style={{ color: setStatColor(attributes.volleyshot) }}>
                        {attributes.volleyshot}
                    </div>
                </div>
                <div>
                    <div>Penalty Kick</div>
                    <div style={{ color: setStatColor(attributes.penaltykick) }}>
                        {attributes.penaltykick}
                    </div>
                </div>
                <div>
                    <div>Short Pass</div>
                    <div style={{ color: setStatColor(attributes.shortpass) }}>
                        {attributes.shortpass}
                    </div>
                </div>
                <div>
                    <div>Vision</div>
                    <div style={{ color: setStatColor(attributes.vision) }}>
                        {attributes.vision}
                    </div>
                </div>
                <div>
                    <div>Cross</div>
                    <div style={{ color: setStatColor(attributes.cross) }}>
                        {attributes.cross}
                    </div>
                </div>
                <div>
                    <div>Long Pass</div>
                    <div style={{ color: setStatColor(attributes.longpass) }}>
                        {attributes.longpass}
                    </div>
                </div>
                <div>
                    <div>Curve</div>
                    <div style={{ color: setStatColor(attributes.curve) }}>
                        {attributes.curve}
                    </div>
                </div>
                <div>
                    <div>Dribble</div>
                    <div style={{ color: setStatColor(attributes.dribble) }}>
                        {attributes.dribble}
                    </div>
                </div>
                <div>
                    <div>Ball Control</div>
                    <div style={{ color: setStatColor(attributes.ballcontrol) }}>
                        {attributes.ballcontrol}
                    </div>
                </div>
                <div>
                    <div>Agility</div>
                    <div style={{ color: setStatColor(attributes.agility) }}>
                        {attributes.agility}
                    </div>
                </div>
                <div>
                    <div>Balance</div>
                    <div style={{ color: setStatColor(attributes.balance) }}>
                        {attributes.balance}
                    </div>
                </div>
                <div>
                    <div>Reaction</div>
                    <div style={{ color: setStatColor(attributes.reaction) }}>
                        {attributes.reaction}
                    </div>
                </div>
                <div>
                    <div>Marking</div>
                    <div style={{ color: setStatColor(attributes.marking) }}>
                        {attributes.marking}
                    </div>
                </div>
                <div>
                    <div>Tackle</div>
                    <div style={{ color: setStatColor(attributes.tackle) }}>
                        {attributes.tackle}
                    </div>
                </div>
                <div>
                    <div>Intercept</div>
                    <div style={{ color: setStatColor(attributes.intercept) }}>
                        {attributes.intercept}
                    </div>
                </div>
                <div>
                    <div>Header</div>
                    <div style={{ color: setStatColor(attributes.header) }}>
                        {attributes.header}
                    </div>
                </div>
                <div>
                    <div>Sliding Tackle</div>
                    <div style={{ color: setStatColor(attributes.slidingtackle) }}>
                        {attributes.slidingtackle}
                    </div>
                </div>
                <div>
                    <div>Strength</div>
                    <div style={{ color: setStatColor(attributes.strength) }}>
                        {attributes.strength}
                    </div>
                </div>
                <div>
                    <div>Stamina</div>
                    <div style={{ color: setStatColor(attributes.stamina) }}>
                        {attributes.stamina}
                    </div>
                </div>
                <div>
                    <div>Aggression</div>
                    <div style={{ color: setStatColor(attributes.aggression) }}>
                        {attributes.aggression}
                    </div>
                </div>
                <div>
                    <div>Jump</div>
                    <div style={{ color: setStatColor(attributes.jump) }}>
                        {attributes.jump}
                    </div>
                </div>
                <div>
                    <div>Composure</div>
                    <div style={{ color: setStatColor(attributes.composure) }}>
                        {attributes.composure}
                    </div>
                </div>
                <div>
                    <div>GK Diving</div>
                    <div style={{ color: setStatColor(attributes.gk_diving) }}>
                        {attributes.gk_diving}
                    </div>
                </div>
                <div>
                    <div>GK Handling</div>
                    <div style={{ color: setStatColor(attributes.gk_handling) }}>
                        {attributes.gk_handling}
                    </div>
                </div>
                <div>
                    <div>GK Positioning</div>
                    <div style={{ color: setStatColor(attributes.gk_positioning) }}>
                        {attributes.gk_positioning}
                    </div>
                </div>
                <div>
                    <div>GK Reaction</div>
                    <div style={{ color: setStatColor(attributes.gk_reaction) }}>
                        {attributes.gk_reaction}
                    </div>
                </div>
                <div>
                    <div>GK Kick</div>
                    <div style={{ color: setStatColor(attributes.gk_kick) }}>
                        {attributes.gk_kick}
                    </div>
                </div>

                <div>
                    <div>OVR ST</div>
                    <div>{attributes.ovr_st}</div>
                </div>
                <div>
                    <div>OVR LW</div>
                    <div>{attributes.ovr_lw}</div>
                </div>
                <div>
                    <div>OVR CF</div>
                    <div>{attributes.ovr_cf}</div>
                </div>
                <div>
                    <div>OVR RW</div>
                    <div>{attributes.ovr_rw}</div>
                </div>
                <div>
                    <div>OVR CAM</div>
                    <div>{attributes.ovr_cam}</div>
                </div>
                <div>
                    <div>OVR LM</div>
                    <div>{attributes.ovr_lm}</div>
                </div>
                <div>
                    <div>OVR RM</div>
                    <div>{attributes.ovr_rm}</div>
                </div>
                <div>
                    <div>OVR CM</div>
                    <div>{attributes.ovr_cm}</div>
                </div>
                <div>
                    <div>OVR CDB</div>
                    <div>{attributes.ovr_cdb}</div>
                </div>
                <div>
                    <div>OVR LWB</div>
                    <div>{attributes.ovr_lwb}</div>
                </div>
                <div>
                    <div>OVR CB</div>
                    <div>{attributes.ovr_cb}</div>
                </div>
                <div>
                    <div>OVR RWB</div>
                    <div>{attributes.ovr_rwb}</div>
                </div>
                <div>
                    <div>OVR LB</div>
                    <div>{attributes.ovr_lb}</div>
                </div>
                <div>
                    <div>OVR SW</div>
                    <div>{attributes.ovr_sw}</div>
                </div>
                <div>
                    <div>OVR RB</div>
                    <div>{attributes.ovr_rb}</div>
                </div>
                <div>
                    <div>OVR GK</div>
                    <div>{attributes.ovr_gk}</div>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetail
