import React, { useState } from 'react'
import axios from 'axios'
import ConvertSpid from '../data/spid.json'
import ShowPicture from './ShowPicture'
import RecentStat from './RecentStat'
import SeasonJson from '../data/season.json'

function Traderecord () {
    const apiKey = process.env.REACT_APP_NEXON_API_KEY
    const [inputValue, setInputValue] = useState('')
    const [selectboxValue, setSelectboxValue] = useState('buy')
    const [userdata, setUserdata] = useState('')
    const [accessid, setAccessid] = useState('')
    const [tradedata, setTradedata] = useState('')
    const [adddata, setAdddata] = useState([])
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSelectboxChange = (event) => {
        setSelectboxValue(event.target.value)
        console.log(event.target.value)
    }
    const handleButtonClick = () => {
        axios.get('https://api.nexon.co.kr/fifaonline4/v1.0/users?', {
            headers: {
                Authorization: apiKey
            },
            params: {
                nickname: inputValue
            }
        }).then((response) => {
            console.log(response.data)
            setUserdata(response.data)
            setAccessid(response.data.accessId)
            axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${response.data.accessId}/markets?tradetype=${selectboxValue}&offset=0&limit=5`, {
                headers: {
                    Authorization: apiKey
                },
                params: {}

            }).then((response) => {
                console.log(response.data)
                setTradedata(response.data)
                const example = response.data.map(item => item.spid)
                console.log(example)
            }).catch((error) => {
                if (error.response) {
                    // 서버가 오류 응답을 반환한 경우
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                } else if (error.request) {
                    // 서버가 응답을 반환하지 않은 경우
                    console.log(error.request)
                } else {
                    // 요청을 보내기 전 오류가 발생한 경우
                    console.log('Error', error.message)
                }
                console.log(error.config)

                // 사용자에게 오류 메시지를 보여줍니다.
                alert('NEXON DB에 대상 유저에 대한 거래 정보가 존재하지 않습니다.')
            })
        }).catch((error) => {
            // console.log(error)
            if (error.response) {
                // 서버가 오류 응답을 반환한 경우
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if (error.request) {
                // 서버가 응답을 반환하지 않은 경우
                console.log(error.request)
            } else {
                // 요청을 보내기 전 오류가 발생한 경우
                console.log('Error', error.message)
            }
            console.log(error.config)

            // 사용자에게 오류 메시지를 보여줍니다.
            alert('NEXON DB에 대상 유저에 대한 거래 정보가 존재하지 않습니다.')
        })
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            handleButtonClick() // Enter 입력이 되면 클릭 이벤트 실행
        }
    }

    function showdiv () {
        if (tradedata.length > 1) {
            const style = {
                border: '1px solid black',
                borderCollapse: 'collapse',
                textAlign: 'center'
            }
            return (
                <table className="type11" style={style}>
                    <thead>
                        <tr>
                            <th scope="cols" style={style}>거래 날짜</th>
                            <th scope="cols" style={style}>거래 고유 식별자</th>
                            <th scope="cols" style={style}>선수 고유 식별자</th>
                            <th scope="cols" style={style}>사진</th>
                            <th scope="cols" style={style}>시즌</th>
                            <th scope="cols" style={style}>강화</th>
                            <th scope="cols" style={style}>가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tradedata.map((it, index) => {
                            const ex = ConvertSpid.find((item) => item.id === it.spid)
                            const dada = it.spid
                            const firstThreeDigits = String(dada).substr(0, 3) // 첫 3자리 숫자를 잘라내어 변수에 저장
                            const matchedSeason = SeasonJson.find((season) => season.seasonId == firstThreeDigits)
                            const className = matchedSeason ? matchedSeason.className : 'none'
                            const imgSrc = matchedSeason.seasonImg
                            console.log('ex:', ex)
                            return (
                                <tr key={index} style={style}>
                                    <td style={style}>{it.tradeDate}</td>
                                    <td style={style}>{it.saleSn}</td>
                                    {/* <td>{it.spid}</td> */}
                                    <td style={style}>{ex.name}</td>

                                    <ShowPicture spid={it.spid}/>
                                    <td style={style}><img src={imgSrc} alt=""/> <br/>{className}</td>
                                    <td style={style}>{it.grade}강</td>
                                    <td style={style}>{it.value.toLocaleString()} EP</td>

                                    <RecentStat spid={it.spid}/>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            )
        }
    }

    function changeButtonState () {
        if (selectboxValue == 'sell') {
            return (
                <div className="col-sm-2">
                    <div className="single-input">
                        <button onClick={handleButtonClick}>판매 이력 조회</button>
                    </div>
                </div>)
        }
        if (selectboxValue == 'buy') {
            return (
                <div className="col-sm-2">
                    <div className="single-input">
                        <button onClick={handleButtonClick}>구매 이력 조회</button>
                    </div>
                </div>)
        }
    }

    return (
        <div>
            <p>{userdata.nickname}</p>
            <p>{userdata.level}</p>
            <p>{userdata.accessId}</p>
            <div className="jobs_search_form">
                <div className="row">
                    <div className="col-sm-5">
                        {/* <div className="single-input" onSubmit={handleSubmit}> */}
                        {/*    <input type="text" name="query" value={inputValue} onChange={handleInputChange}/> */}
                        {/*    <i className="bi bi-search"></i> */}
                        {/* </div> */}
                        <div className="single-input">
                            <input type="text" value={inputValue} onChange={handleInputChange}
                                onKeyDown={handleOnKeyPress}/>
                            <i className="bi bi-search"></i>
                        </div>

                    </div>
                    {changeButtonState()}
                    <select className="w150" onChange={handleSelectboxChange} style={{
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

                        <option value="buy">구매</option>
                        <option value="sell">판매</option>
                    </select>

                </div>
            </div>
            {/* <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleOnKeyPress}/> */}

            {/* <select className="w150" onChange={handleSelectboxChange} style={}> */}

            {showdiv()}

        </div>

    )
}

export default Traderecord
