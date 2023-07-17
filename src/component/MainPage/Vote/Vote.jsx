import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Instance'
import styles from './css/vote_container.module.scss'
import classNames from 'classnames/bind'
import Vote_Container from './Vote_Container'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const cx = classNames.bind(styles)

function Vote () {
    const [data, setData] = useState()
    const [voteID, setVoteID] = useState()
    const [ShowAlert, setShowAlert] = useState(false)
    const [test, setTest] = useState(false)
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        pauseOnHover: true
    })
    const handleResize = () => {
        const isMobile = window.innerWidth < 768 // 모바일 화면 기준 너비
        const updatedSettings = {
            ...settings,
            slidesToShow: isMobile ? 1 : 3,
            slidesToScroll: isMobile ? 1 : 3
        }
        setSettings(updatedSettings)
    }

    useEffect(() => {
        // 컴포넌트가 마운트될 때 이벤트 리스너 등록
        window.addEventListener('resize', handleResize)
        handleResize() // 초기 로드 시 설정값 업데이트

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        if (ShowAlert) {
            alert('이미 투표한 기록이 존재합니다.')
            setShowAlert(false)
        }
    }, [ShowAlert])

    const sendVote1 = (id) => {
        axiosInstance.post('/vote/voteplayer1', { voteID: id }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                alert('투표에 성공하였습니다')
                setTest(!test)
            }
        }).catch((error) => {
            if (error.response.status === 418) {
                console.log('418 응답 도착')
                setShowAlert(true)
            }
            console.log(error.response.status)
        })
    }
    const sendVote2 = (id) => {
        axiosInstance.post('/vote/voteplayer2', { voteID: id }).then((response) => {
            console.log(response.status)
            if (response.status === 200) {
                alert('투표에 성공하였습니다')
                setTest(!test)
            }
        }).catch((error) => {
            if (error.response.status === 418) {
                console.log('418 응답 도착')
                setShowAlert(true)
            }
            console.log(error.response.status)
        })
    }

    /// /투표 버튼이 눌려서 성공적으로 투표가 되면 투표 리스트를 새로 불러옴
    useEffect(() => {
        axiosInstance.get('/vote/list').then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [test])
    return (
        <div>

            <Slider {...settings}>

                {data && data.length
                    ? (
                        data.map((it, index) => {
                            return (
                                <div>
                                    <Vote_Container it={it} index={index} sendVote1={sendVote1} sendVote2={sendVote2}/>
                                </div>

                            )
                        }
                        ))
                    : null}
            </Slider>

        </div>
    )
}

export default Vote
