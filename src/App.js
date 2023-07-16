import logo from './logo.svg'
import './App.css'
import Navbar from './component/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Traderecord from './component/test2'
import ApiTest from './component/ApiTest'
import Search from './component/Search'
import Login from './component/test'
import AccordianTest from './component/AccordianTest'
import Footer from './component/Footer'
import PL_MainPageLayout from './component/MainPage/PL_MainPageLayout'
import SideBarLayout from './component/SideBar/SideBarLayout'
import LL_MainPageLayout from './component/MainPage/LL_MainPageLayout'
import KL_MainPageLayout from './component/MainPage/KL_MainPageLayout'
import LoginPage from './component/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from './Redux/LoginModalControlReducer'
import ModalComponent from './component/Login/LoginModal'
import SignUpModal from './component/Login/SignUpModal'
import PL_DetailGameSchedule from './component/MainPage/GameSchedule/DetailSchedulePage/PL_DetailGameSchedule'
import Vote_Register from './component/MainPage/Vote/Vote_Register'
import PatchNote from './component/UpdatePage/PatchNote'

function App () {
    const isModalOpen = useSelector(state => state.modal.isModalOpen) // Redux 상태 구독
    const isSignUpModalOpen = useSelector(state => state.signupmodal.isModalOpen) // Redux 상태 구독
    const dispatch = useDispatch() // useDispatch 훅 사용하여 액션 디스패치 함수 가져오기

    const handleOpenModal = () => {
        dispatch(openModal()) // 모달 열기 액션 디스패치
    }

    // const showModal = useSelector((state) => state.isOpen.isOpen)
    return (
        <div className="App">
            <BrowserRouter>
                {isModalOpen && (
                    <div className="modal-wrapper">
                        <ModalComponent />
                    </div>
                )}
                {isSignUpModalOpen && (
                    <div className="modal-wrapper">
                        <SignUpModal />
                    </div>
                )}
                <Navbar/>
                {/* <SideBarLayout/> */}
                {/* <SideBarLayout/> */}
                <Routes>

                    <Route path="/mainPL" element={<PL_MainPageLayout/>}></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                    <Route path="/mainLL" element={<LL_MainPageLayout/>}></Route>
                    <Route path="/mainKL" element={<KL_MainPageLayout/>}></Route>
                    <Route path="/usersearch" element={<Login/>}></Route>
                    <Route path="/traderecord" element={<Traderecord/>}></Route>
                    <Route path="/traderecord" element={<Traderecord/>}></Route>
                    <Route path="/apitest" element={<ApiTest/>}></Route>
                    <Route path="/search" element={<Search/>}></Route>
                    <Route path="/AccordianTest" element={<AccordianTest/>}></Route>
                    <Route path="/detailSchedule" element={<PL_DetailGameSchedule/>}></Route>
                    <Route path="/voteRegister" element={<Vote_Register/>}></Route>
                    <Route path="/patchnote" element={<PatchNote/>}></Route>

                </Routes>
                {/* <Footer/> */}
            </BrowserRouter>
        </div>
    )
}

export default App
