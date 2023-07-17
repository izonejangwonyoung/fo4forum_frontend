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

function navbarexample () {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">TEST</Navbar.Brand> */}
                <Navbar.Brand href="#home">
                    <img
                        src="/src/fo4forum_logo.43694e2403db70406c27-removebg-preview.png"
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbarexample
