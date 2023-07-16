import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosInstance from '../../Instance'
import styles from './css/vote_register.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Vote_Register () {
    const [player1, setPlayer1] = useState()
    const [player2, setPlayer2] = useState()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [data, setData] = useState()
    const [data2, setData2] = useState()
    const handlePlayer1 = (event) => {
        setPlayer1(event.target.value)
    }
    const handlePlayer2 = (event) => {
        setPlayer2(event.target.value)
    }
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleDesc = (event) => {
        setDesc(event.target.value)
    }
    const searchPlayer1Axios = () => {
        axiosInstance.post('/vote/searchPlayer', {
            data: player1
        }).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }
    const searchPlayer2Axios = () => {
        axiosInstance.post('/vote/searchPlayer', {
            data: player2
        }).then((response) => {
            console.log(response.data)
            setData2(response.data)
        })
    }
    const submitData = () => {
        axiosInstance.post('/vote/submit', {
            data: {
                title,
                desc,
                player1: selectedPlayer1ID,
                player2: selectedPlayer2ID
            }
        }).then((response) => {
            console.log(response.data)
        })
    }
    const [selectedPlayer1ID, setSelectedPlayer1ID] = useState(null)

    const [selectedPlayer2ID, setSelectedPlayer2ID] = useState(null)

    useEffect(() => {
        console.log(player1)
    }, [player1])
    useEffect(() => {
        console.log(selectedPlayer1ID)
    }, [selectedPlayer1ID])

    return (

        <div className={cx('container_main')}>

            <div className={cx('container1')}>
                <input type="text" placeholder={'선수'} onChange={handlePlayer1}/>
                <button onClick={searchPlayer1Axios}>제출</button>
                <div>
                선수1: {selectedPlayer1ID}
                선수2: {selectedPlayer2ID}
                </div>
                <div>
                    {data && data.length > 0 && (
                        data.map((it, index) => {
                            const handlePhotoError = (event) => {
                                const img = event.target
                                const ID = it.ID
                                const idSuffix = String(ID).slice(-6) // Extract the last 6 characters
                                console.log(idSuffix, '잘라낸 것들')
                                // Remove leading zero if present
                                const processedID = idSuffix.startsWith('0') ? idSuffix.slice(1) : idSuffix

                                if (img.src !== `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`) {
                                    img.src = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`
                                }
                                setSelectedPlayer1ID(it.ID)
                            }
                            return (
                                <div key={index}>
                                    <input type="checkbox" checked={selectedPlayer1ID === it.ID} onChange={() => setSelectedPlayer1ID(it.ID)} />
                                    <img src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${it.ID}.png`} onError={handlePhotoError} alt="사진이 제공되지 않는 선수입니다."/>
                                    {it.ID}
                                    {it.NAME}
                                    {it.SEASON}
                                </div>
                            )
                        })
                    )}

                </div>
                <div>
                    <button> 저장 </button>
                </div>
            </div>

            {/* 2번 선수 시작 */}
            <div className={cx('container2')}>
                <input type="text" placeholder={'선수'} onChange={handlePlayer2}/>
                <button onClick={searchPlayer2Axios}>제출</button>
                <div>
                    선수1: {selectedPlayer1ID}
                    선수2: {selectedPlayer2ID}
                </div>
                <div>
                    {data2 && data2.length > 0 && (
                        data2.map((it, index) => {
                            const handlePhotoError = (event) => {
                                const img = event.target
                                const ID = it.ID
                                const idSuffix = String(ID).slice(-6) // Extract the last 6 characters
                                console.log(idSuffix, '잘라낸 것들')
                                // Remove leading zero if present
                                const processedID = idSuffix.startsWith('0') ? idSuffix.slice(1) : idSuffix

                                if (img.src !== `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`) {
                                    img.src = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${processedID}.png`
                                }
                                setSelectedPlayer2ID(it.ID)
                            }
                            return (
                                <div key={index}>
                                    <input type="checkbox" checked={selectedPlayer2ID === it.ID} onChange={() => setSelectedPlayer2ID(it.ID)} />
                                    <img src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${it.ID}.png`} onError={handlePhotoError} alt="사진이 제공되지 않는 선수입니다."/>
                                    {it.ID}
                                    {it.NAME}
                                    {it.SEASON}
                                </div>
                            )
                        })
                    )}

                </div>
            </div>
            <div>
                제목:
                <input type="text" onChange={handleTitle}/>
                내용:
                <input type="text" onChange={handleDesc}/>
            </div>

            <button onClick={submitData}>투표 저장</button>

            <div>
                최종 투표 제출본
                {title}
                {desc}
                {selectedPlayer1ID}
                {selectedPlayer2ID}
            </div>
        </div>

    )
}

export default Vote_Register
