import axios from 'axios'
import { useState } from 'react'

function RecentMatchRecord (props) {
    const userId = props.data.accessId
    const [matchiddata, setmatchiddata] = useState('')
    const [matchdatadetail, setmatchdatadetail] = useState([])
    const [matchType, setMatchType] = useState('50')
    const apiKey = process.env.REACT_APP_NEXON_API_KEY

    const searchMatchData = () => {
        setmatchdatadetail([''])
        axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${userId}/matches?`, {
            headers: {
                Authorization: apiKey
            },
            params: {
                matchtype: `${matchType}`,
                offset: '0',
                limit: '5'

            }
        }).then((response) => {
            console.log(response.data)
            setmatchiddata(response.data)
            response.data.map((it) => {
                axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${it}`, {
                    headers: {
                        Authorization: apiKey
                    }
                }).then((response) => {
                    console.log(response.data)
                    setmatchdatadetail(prevState => [...prevState, response.data])
                })
            })
        })
    }
    // const showDiv = () => {
    //     if (matchiddata) {
    //         // console.log('dddddd',matchdatadetail.matchDate)
    //         return (
    //             <div>
    //                 <p>matchdata 있네</p>
    //                 {
    //                     matchiddata.map((it) => {
    //                         return (
    //                             <div>
    //                                 <p>{it}</p>
    //
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         )
    //     }
    // }

    const showDivDetail = () => {
        if (matchdatadetail.length > 1) {
            console.log('dddddd', matchdatadetail)
            return (
                <div>
                    {
                        matchdatadetail.matchDate
                    }
                    {
                        matchdatadetail.map((it, index) => {
                            matchdatadetail.sort((a, b) => new Date(b.matchDate) - new Date(a.matchDate))

                            console.log('here', it)
                            return (
                                <div>
                                    <p>시간: {it.matchDate}</p>
                                    <p>타입: {it.matchType}</p>
                                    {/* <p>{it.matchInfo[index]}</p> */}
                                    {/* <p>{it.matchInfo[0].map((at)=>{ */}
                                    {/* console.log(at) */}
                                    {/* })} */}
                                    {/* }</p> */}

                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    return (

        <div>
            <button onClick={searchMatchData}>최근 경기 기록 조회</button>
            {showDivDetail()}
        </div>
    )
}

export default RecentMatchRecord
