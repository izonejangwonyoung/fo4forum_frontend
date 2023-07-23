//
// import React, { useState, useRef, useEffect } from 'react'
// import { FaBars } from 'react-icons/fa'
// import { links, social } from './data'
// import logo from '../fo4forum_logo.png'
// import styles from './navbar.module.scss'
// import classNames from 'classnames/bind'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { openModal, closeModal } from '../Redux/LoginModalControlReducer'
// import { openSignUpModal, closeSignUpModal } from '../Redux/SignUpModalControlReducer'
// import axios from 'axios'
// const cx = classNames.bind(styles)
// const apiUrl = process.env.REACT_APP_API_URL
//
// const Navbar = () => {
//     const [IsLogin, setIsLogin] = useState(false)
//     const [user, setUser] = useState({})
//     useEffect(() => {
//         try {
//             axios({
//                 url: `${apiUrl}/login/success`,
//                 method: 'GET',
//                 withCredentials: true
//             })
//                 .then((result) => {
//                     console.log(result, '/login/success 실행 결과')
//                     if (result.data) {
//                         setIsLogin(true)
//                         setUser(result.data[0])
//                         console.log(result)
//                     }
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                 })
//         } catch (error) {
//             console.log(error)
//         }
//     }, [])
//     const datafromredux = useSelector((state) => state.modal.isModalOpen)
//
//     const dispatch = useDispatch()
//     const handleClickLoginOpen = () => {
//         dispatch(openModal())
//     }
//     const handleClickClose = () => {
//         dispatch(closeModal())
//     }
//     const handleClickSignUpOpen = () => {
//         dispatch(openSignUpModal())
//     }
//
//     useEffect(() => {
//         console.log(datafromredux)
//     }, [datafromredux])
//     // const sendDataToChild = () => {
//     // setIsOpen(true)
//     // const dataToSend = {
//     //     modalStatus: isOpen
//     // }
//     // dispatch(isModal(dataToSend.modalStatus))
//     // }
//     // 메뉴버튼
//     const [showLinks, setShowLinks] = useState(false)
//     const linksContainerRef = useRef(null)
//     const linksRef = useRef(null)
//     // const [isOpen, setIsOpen] = useState(false)
//     // const isOpen = useSelector((state) => state.isOpen)
//
//     const toggleLinks = () => {
//         setShowLinks(!showLinks)
//     }
//     const handleLogout = () => {
//         try {
//             axios({
//                 url: `${apiUrl}/logout`,
//                 method: 'post',
//                 withCredentials: true
//             })
//                 .then((result) => {
//                     console.log(result, '/logout 실행 결과')
//                     window.open('/mainPL', '_self')
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                 })
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         const linksHeight = linksRef.current.getBoundingClientRect().height
//         if (showLinks) {
//             linksContainerRef.current.style.height = `${linksHeight}px`
//         } else {
//             linksContainerRef.current.style.height = '0px'
//         }
//     }, [showLinks])
//     useEffect(() => {
//         console.log('redux data status', datafromredux)
//     }, datafromredux)
//     return (
//         <nav>
//             <div className={cx('nav-center')}>
//                 <div className={cx('nav-header')}>
//                     <img src={logo} className={cx('logo')} alt='logo' />
//                     <button className={cx('nav-toggle')} onClick={toggleLinks}>
//                         <FaBars />
//                     </button>
//                 </div>
//                 {/* 메뉴버튼 클릭시 목록 보이도록 */}
//                 <div className={cx('links-container')} ref={linksContainerRef}>
//                     <ul className={cx('links')} ref={linksRef}>
//                         {/* data에서 Nav목록 가져오기 */}
//                         {links.map((link) => {
//                             const { id, url, text } = link
//                             return (
//                                 <li key={id}>
//                                     <Link to={url}>{text}</Link>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </div>
//                 {/* social 아이콘 가져오기 */}
//                 {/* <ul className={cx('social-icons')}> */}
//                 {/*    {social.map((socialIcon) => { */}
//                 {/*        const { id, url, icon } = socialIcon */}
//                 {/*        return ( */}
//                 {/*            <li key={id}> */}
//                 {/*                <a href={url}>{icon}</a> */}
//                 {/*            </li> */}
//                 {/*        ) */}
//                 {/*    })} */}
//                 {/* </ul> */}
//                 <div className={cx('button_container')}>
//                     <div className={cx('btn_login')}>
//                         <button onClick={
//                             handleClickLoginOpen
//                         } className={cx('button_log')}>Log In</button>
//                     </div>
//                     {IsLogin
//                         ? (
//                             <div>
//                                 {user.ID}님 환영합니다.
//                                 <button className={cx('button_log')} onClick={handleLogout}>
//                                     Logout
//                                 </button>
//                             </div>
//                         )
//                         : <>
//                             <div className={cx('btn_login')}>
//                                 <button onClick={
//                                     handleClickSignUpOpen
//                                 } className={cx('button_log')}>Sign In</button>
//                             </div>
//                         </>
//                     }
//                 </div>
//                 {/* <div className={cx('btn_login')}> */}
//                 {/*    <button onClick={ */}
//                 {/*        handleClickSignUpOpen */}
//                 {/*    }>Sign In</button> */}
//                 {/* </div> */}
//                 {/* <div>{isOpen ? '열려있음' : '닫혀있음'}</div> */}
//                 {/* <div>{datafromredux}</div> */}
//             </div>
//         </nav>
//     )
// }
//
// export default Navbar
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../fo4forum_logo.43694e2403db70406c27-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './navbar.module.scss'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from '../Redux/LoginModalControlReducer'
import { openSignUpModal, closeSignUpModal } from '../Redux/SignUpModalControlReducer'
import axiosInstance from './Instance'

const cx = classNames.bind(styles)
const apiUrl = process.env.REACT_APP_API_URL

function Navbarexample () {
    const [IsLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})
    const verifyLogin = async () => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/login/verifytoken`, { withCredentials: true })
            if (response.status === 200) {
                setIsLogin(true) // 서버 응답이 200일 경우 IsLogin을 true로 설정
            } else {
                setIsLogin(false) // 서버 응답이 200이 아닌 경우 IsLogin을 false로 설정
            }
        } catch (error) {
            console.error('Error verifying login:', error)
            setIsLogin(false) // 요청이 실패한 경우에도 IsLogin을 false로 설정
        }
    }

    useEffect(() => {
        verifyLogin() // 페이지가 로드될 때 verifyLogin 함수를 실행
    }, [])

    useEffect(() => {
        try {
            axios({
                url: `${apiUrl}/login/success`,
                method: 'GET',
                withCredentials: true
            })
                .then((result) => {
                    console.log(result, '/login/success 실행 결과')
                    if (result.data) {
                        setIsLogin(true)
                        setUser(result.data[0])
                        console.log(result)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])
    const datafromredux = useSelector((state) => state.modal.isModalOpen)

    const dispatch = useDispatch()
    const handleClickLoginOpen = () => {
        dispatch(openModal())
    }
    const handleClickClose = () => {
        dispatch(closeModal())
    }
    const handleClickSignUpOpen = () => {
        dispatch(openSignUpModal())
    }

    useEffect(() => {
        console.log(datafromredux)
    }, [datafromredux])
    // const sendDataToChild = () => {
    // setIsOpen(true)
    // const dataToSend = {
    //     modalStatus: isOpen
    // }
    // dispatch(isModal(dataToSend.modalStatus))
    // }
    // 메뉴버튼
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)
    // const [isOpen, setIsOpen] = useState(false)
    // const isOpen = useSelector((state) => state.isOpen)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }
    const handleLogout = () => {
        try {
            axios({
                url: `${apiUrl}/logout`,
                method: 'post',
                withCredentials: true
            })
                .then((result) => {
                    console.log(result, '/logout 실행 결과')
                    window.open('/mainPL', '_self')
                })
                .catch((error) => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        console.log('redux data status', datafromredux)
    }, datafromredux)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">TEST</Navbar.Brand> */}
                <Navbar.Brand href="/mainPL">
                    <img
                        src={logo}
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="피파온라인4" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/search" className={cx('link')}>선수 검색</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/usersearch" className={cx('link')}>플레이어 검색</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/traderecord" className={cx('link')}>이적시장 내역 검색</Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="해외축구" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/mainPL" className={cx('link')}>프리미어리그</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/mainLL" className={cx('link')}>라리가</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/mainKL" className={cx('link')}>K리그</Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="기타" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/detailSchedule" className={cx('link')}>경기 일정 조회</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/patchnote" className={cx('link')}>패치 노트</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link as={Link} to="/voteregister" className={cx('link')}>투표 생성</Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {IsLogin

                            ? (
                                <>

                                    <Nav.Link className={cx('login_btn')}>
                                        <button type="button" className="btn btn-close-white" onClick={handleLogout}>Logout</button>
                                    </Nav.Link>
                                    <Nav.Link className={cx('login_btn')} to="/mypage">
                                        <button type="button" className="btn btn-close-white" >Mypage</button>
                                    </Nav.Link>
                                </>

                            )
                            : (

                                <Nav.Link className={cx('login_btn')}>
                                    <button type="button" className="btn btn-close-white" onClick={handleClickLoginOpen}>Login</button>
                                </Nav.Link>

                            )
                        }
                        <Nav.Link className={cx('login_btn')}>
                            <button type="button" className="btn btn-close-white" onClick={handleClickSignUpOpen}>SignUp</button>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarexample
