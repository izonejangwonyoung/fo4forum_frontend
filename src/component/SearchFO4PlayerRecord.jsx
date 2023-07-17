import React, { useEffect, useState } from 'react'
import axios from 'axios'
import division from '../data/division'
import matchType from '../data/matchType.json'
import ShowUserData from './ShowUserData'
import RecentStat from './RecentStat'
import RecentMatchRecord from './RecentMatchRecord'
import ShowMatchHistory from './ShowMatchHistory'
import LoadingModal from './LoadingScreen'
import produce from 'immer'
import LoadingSecondLoading from './LoadingSecondLoading'
import styles from './css/test.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function SearchFO4PlayerRecord () {
    const apiKey = process.env.REACT_APP_NEXON_API_KEY
    const [inputValue, setInputValue] = useState('')
    const [userdata, setUserdata] = useState('')
    const [data, setData] = useState([{}])
    const [test, setTest] = useState(division)
    const [modalShowLoading, setModalShowLoading] = useState(false)
    const [modalShowSecondLoading, setModalShowSecondLoading] = useState(false)

    const [matchiddata, setmatchiddata] = useState('')
    const [matchType, setMatchType] = useState('52')
    const [matchdatadetail, setmatchdatadetail] = useState([])

    let useraccessid = ''
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    // useEffect(() => {
    //     console.log('끝났고, ', matchdatadetail)
    //     console.log(useraccessid)
    //
    // }, [matchdatadetail])
    const searchMatchData = () => { /// //저장된 user accessId를 가지고 최근 매치타입 52번에 대한 5개의 경기 데이터를 가져옴
        setmatchdatadetail([])
        console.log('최근 5개 매치 데이터 가져오는데 사용되는 userid', useraccessid)
        setModalShowLoading(true)
        axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${useraccessid}/matches?`, {
            headers: {
                Authorization: apiKey
            },
            params: {
                matchtype: '52', offset: '0', limit: '5'

            }
        }).then((response) => {
            console.log('code 111', response.data)
            // setmatchiddata(response.data)
            response.data.forEach((it) => {
                axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${it}`, {
                    headers: {
                        Authorization: apiKey
                    }
                }).then((response) => {
                    console.log('code 222', response.data)
                    setmatchdatadetail(prevState => [...prevState, response.data])
                    // console.log('끝났고, ', matchdatadetail)
                })
                // const sortedMatchDataDetail = matchdatadetail.sort((a, b) => new Date(b.matchDate) - new Date(a.matchDate));
                // setmatchdatadetail([])
                // setmatchdatadetail(sortedMatchDataDetail);
            })
        })
        setModalShowLoading(false)
    }
    const handleButtonClick = () => {
        setModalShowSecondLoading(true)
        axios.get('https://api.nexon.co.kr/fifaonline4/v1.0/users?', {
            headers: {
                Authorization: apiKey
            },
            params: {
                nickname: inputValue
            }
        }).then((response) => {
            console.log('유저 정보 불러오는 axios에 대한 response.data', response.data)
            console.log(response.data.accessId)
            setUserdata(response.data)
            useraccessid = (response.data.accessId)
            console.log('useraccessid', useraccessid)
            axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${response.data.accessId}/maxdivision`, {
                headers: {
                    Authorization: apiKey
                }

            }).then((response) => {
                setData(response.data[0].division)
                console.log(response.data[0].division)
                console.log(test)

                // searchMatchData()
                // response.data.map(function (a, i) {
                //     const kkk = test.find((item) => item.divisionId === response.data[i].division)
                //     const lll = pop.find((item) => item.matchtype === response.data[i].matchType)
                //     console.log(i)
                //     setData([...data, kkk.divisionName])
                //     setData2([...data2, lll.desc])
                //     // setData([kkk.divisionName])
                //     // setLol(lll.desc)
                //     console.log(data)
                //     console.log(data2)
                // })

                // const kkk = test.find((item) => item.divisionId === response.data[0].division)
                // const lll = pop.find((item) => item.matchtype === response.data[0].matchType)
                // const kkk2 = test.find((item) => item.divisionId === response.data[1].division)
                // const lll2 = pop.find((item) => item.matchtype === response.data[1].matchType)
                // const kkk3 = test.find((item) => item.divisionId === response.data[2].division)
                // const lll3 = pop.find((item) => item.matchtype === response.data[2].matchType)
                // setData(kkk.divisionName)
                // setLol(lll.desc)
                // setData2(kkk2.divisionName)
                // setData3(lll2.desc)
                // setData4(kkk3.divisionName)
                // setData5(lll3.desc)
                const newDataArray = response.data
                setData(newDataArray)
                // control(newDataArray)
                console.log('---')
                console.log(newDataArray)
                console.log(data)

                // return <showDivision data={data}>
                // const found = division.find((item) => item.divisionId === response.data[0].division);
                // setData(found.divisionName)
                console.log(data)
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
            alert('NEXON DB에 대상 유저에 대한 정보가 존재하지 않습니다.')
        })
        setModalShowSecondLoading(false)

        /// /20230325 유저 고유값으로 각 매치 별 달성한 최고 랭킹과 달성 날짜 보여줌
    }
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            setModalShowLoading(true)
            handleButtonClick() // Enter 입력이 되면 클릭 이벤트 실행
            setTimeout(() => {
                searchMatchData()
                // setModalShowLoading(false)
            }, 3000)
        }
    }
    // const control=(value)=>{
    //     console.log('success',value)
    //     return(
    //         <div>{value[0]}
    //             <Record example={value}/>
    //         </div>
    //     )
    // }

    // const searchMatchData = () => {                        /////저장된 user accessId를 가지고 최근 매치타입 52번에 대한 5개의 경기 데이터를 가져옴
    //         setmatchdatadetail([''])
    //         console.log('최근 5개 매치 데이터 가져오는데 사용되는 userid',useraccessid)
    //         axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${useraccessid}/matches?`, {
    //             headers: {
    // Authorization: apiKey
    //             },
    //             params: {
    //                 matchtype: `${matchType}`,
    //                 offset: '0',
    //                 limit: '5'
    //
    //             }
    //         }).then((response) => {
    //         console.log('code 111',response.data)
    //         // setmatchiddata(response.data)
    //         response.data.map((it) => {
    //             axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${it}`, {
    //                 headers: {
    // Authorization: apiKey
    //                 }
    //             }).then((response) => {
    //                 console.log('code 222',response.data)
    //                 console.log('끝났고, ',matchdatadetail)
    //                 setmatchdatadetail(prevState => [...prevState, response.data])
    //
    //             })
    //
    //
    //         })
    //
    //     })
    //
    //
    // }
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

    // const showDivDetail = () => {
    //     // if (matchdatadetail.length>1) {
    //         console.log('dddddd', matchdatadetail)
    //         return (
    //             <div>
    //                 {
    //                     matchdatadetail.matchDate
    //                 }
    //                 {
    //                     matchdatadetail.map((it,index) => {
    //                         matchdatadetail.sort((a, b) => new Date(b.matchDate) - new Date(a.matchDate));
    //
    //                         console.log('here', it)
    //                         // console.log(it.matchInfo[0].accessId)
    //                         return (
    //                             <div>
    //                                 <p>시간: {it.matchDate}</p>
    //                                 <p>타입: {it.matchType}</p>
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         )
    //
    // }

    return (
        <div style={{ left: '150px', width: '1770px', height: '980px', position: 'relative' }}>
            <div className="modal-box">
                {modalShowLoading
                    ? (
                        <LoadingModal show={modalShowLoading} setShow={setModalShowLoading}></LoadingModal>
                    )
                    : null}
            </div>
            <div className="modal-box">
                {modalShowSecondLoading
                    ? (
                        <LoadingSecondLoading show={modalShowSecondLoading}
                            setShow={setModalShowSecondLoading}></LoadingSecondLoading>
                    )
                    : null}
            </div>

            <form action="" className={cx('search-bar')}>
                <input type="txt" name="name" pattern=".*\S.*" required value={inputValue}
                    onChange={handleInputChange} onKeyDown={handleOnKeyPress}/>
                <button className={cx('search-btn')} type="submit" onClick={() => {
                    setModalShowLoading(true)
                    handleButtonClick()
                    setTimeout(() => {
                        searchMatchData()
                        console.log('실행되었습니다.')
                        setModalShowLoading(false)
                    }, 3000)
                }}>
                    <span>Search</span>
                </button>
            </form>
            <div className={cx('container')}>
                <ShowUserData data={userdata} dete={data} useraccessId={useraccessid} matchdatadetail={matchdatadetail}/>
                <ShowMatchHistory useraccessId={useraccessid} matchdatadetail={matchdatadetail}/>

            </div>
            {/* <ShowMatchHistory useraccessId={useraccessid} matchdatadetail={matchdatadetail}/> */}
        </div>
    )
}

export default SearchFO4PlayerRecord
