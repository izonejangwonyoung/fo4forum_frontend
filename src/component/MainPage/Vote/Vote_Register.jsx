import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosInstance from '../../Instance'
import styles from './css/vote_register.module.scss'
import classNames from 'classnames/bind'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, ToggleButton, Toast } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const cx = classNames.bind(styles)
function Vote_Register () {
    const [player1, setPlayer1] = useState()
    const [player2, setPlayer2] = useState()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [data, setData] = useState()
    const [data2, setData2] = useState()
    const [showToast, setShowToast] = useState(false)

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
        if (!player1 || player1.trim() === '') {
            // 빈칸인 경우 제출을 막는 처리를 수행합니다.
            alert('빈칸 제출은 허용되지 않습니다.')
            return
        }
        axiosInstance.post('/vote/searchPlayer', {
            data: player1
        }).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }
    const searchPlayer2Axios = () => {
        if (!player2 || player2.trim() === '') {
            // 빈칸인 경우 제출을 막는 처리를 수행합니다.
            alert('빈칸 제출은 허용되지 않습니다.')
            return
        }
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
            setShowToast(true) // 제출 성공 시 알림을 표시합니다.
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
            <div className={cx('search_container')}>

                <div className={cx('container1')}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="첫 번째 선수 이름을 입력하세요"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={handlePlayer1}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={searchPlayer1Axios}>
                        제출
                        </Button>
                    </InputGroup>
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
                                    <div key={index} className={cx('player_container')}>
                                        {/* <input type="checkbox" checked={selectedPlayer1ID === it.ID} onChange={() => setSelectedPlayer1ID(it.ID)} /> */}
                                        <ToggleButton
                                            className="mb-2"
                                            id={`toggle-check-${it.ID}`}
                                            type="checkbox"
                                            variant="outline-primary"
                                            checked={selectedPlayer1ID === it.ID}
                                            onChange={() => setSelectedPlayer1ID(it.ID)}
                                        >
                                            선택
                                        </ToggleButton>
                                        <img src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${it.ID}.png`} onError={handlePhotoError} alt="사진이 제공되지 않는 선수입니다."/>
                                        {/* {it.ID} */}
                                        {/* {it.SEASON} */}
                                        <img className={cx('season_img')} src={`https://api.fo4forum.com/searchTeamlogo?filename=${it.SEASON}`} alt={it.SEASON}/>
                                        {it.NAME}
                                    </div>
                                )
                            })
                        )}

                    </div>
                </div>
                <div className={cx('result_container')}>
                    <div>
                        {/* 제목: */}
                        {/* <input type="text" onChange={handleTitle}/> */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
                            <Form.Control
                                placeholder="투표 제목"
                                aria-label="Username"
                                onChange={handleTitle}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
                            <Form.Control
                                placeholder="설명"
                                aria-label="Username"
                                onChange={handleDesc}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        {/* 내용: */}
                        {/* <input type="text" onChange={handleDesc}/> */}
                    </div>
                    <Button variant="primary" onClick={submitData}>제출</Button>
                    {showToast && (
                        <Container
                            className="position-fixed bottom-0 end-0 p-3"
                            style={{ zIndex: 9999 }}
                        >
                            <Toast
                                onClose={() => setShowToast(false)}
                                show={showToast}
                                delay={3000} // 알림이 표시된 후 일정 시간이 지나면 자동으로 사라지도록 설정합니다.
                                autohide
                            >
                                <Toast.Header>
                                    <strong className="me-auto">FO4FORUM</strong>
                                    <small>now</small>
                                </Toast.Header>
                                <Toast.Body>성공적으로 제출되었습니다.</Toast.Body>
                            </Toast>
                        </Container>
                    )}
                </div>

                {/* 2번 선수 시작 */}
                <div className={cx('container2')}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="두 번째 선수 이름을 입력하세요"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={handlePlayer2}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={searchPlayer2Axios}>
                        제출
                        </Button>
                    </InputGroup>
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
                                        {/* <input type="checkbox" checked={selectedPlayer2ID === it.ID} onChange={() => setSelectedPlayer2ID(it.ID)} /> */}
                                        <ToggleButton
                                            className="mb-2"
                                            id={`toggle-check-${it.ID}`}
                                            type="checkbox"
                                            variant="outline-primary"
                                            checked={selectedPlayer2ID === it.ID}
                                            onChange={() => setSelectedPlayer2ID(it.ID)}
                                        >
                                            선택
                                        </ToggleButton>
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
            </div>

        </div>

    )
}

export default Vote_Register
