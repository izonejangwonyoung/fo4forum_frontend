import React, { useState } from 'react'
import axios from 'axios'
import ShowFOPlayerSearchDetail from './ShowFOPlayerSearchDetail'
import styles from './css/Search.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from './Instance'
const cx = classNames.bind(styles)
function Search () {
    const [inputValue, setInputValue] = useState('')
    const [responseData, setResponseData] = useState([])
    const apiUrl = process.env.REACT_APP_API_URL

    // const [responseData, setResponseData] = useState('');
    // const [imgSrc, setImgSrc] = useState([])
    // const [error, setError] = useState(false)
    // const [success, setSuccess] = useState(false)
    // const location = useLocation();
    // const [inputValue,setInputValue] = location.state.inputValue; // 전달된 값
    //
    // const handleImageError = () => {
    //     setError(true);
    //     setImgSrc('https://phinf.pstatic.net/contact/20210627_215/1624719722812IFlHv_JPEG/image.jpg?type=f130_130');
    // };
    // const onErrorImg = (e) => {
    //     e.target.style.display='none'
    //     // e.target.src = default_img
    // }
    // const [imageUrl, setImageUrl] = useState('https://example.com/image.jpg')
    // const [fallbackUrl, setFallbackUrl] = useState([
    //     'https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/not_found.png?rd=202303231100'
    // ])
    // const [currentFallbackIndex, setCurrentFallbackIndex] = useState(0)
    //
    // const handleImageError = (e) => {
    //     e.target.style.display = 'none'
    // }
    // const handleImageErrorSpecial = (e) => {
    //     if (success === false) {
    //         e.target.src = default_img
    //     }
    // }
    const handleSubmit = (event) => {
        event.preventDefault()
        setResponseData([])
        axios
            .get(`${apiUrl}/search`, { params: { query: inputValue } })
            .then((response) => {
                setResponseData(response.data)
                // console.log('response_data: ', response.data)
                if (response.data.length < 1) {
                    alert('해당 선수 이름이 DB에 존재하지 않습니다!')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    console.log(responseData)
    return (

        <div className={cx('container')}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="query" className={cx('input')} value={inputValue} onChange={handleInputChange}/>
                        <i className="bi bi-search"></i>
                    </div>
                </form>
            </div>
            {/* 20230525 주석처리한 기존 검색 창 */}
            {/* <div className="jobs_search_form"> */}
            {/*    <div className="row"> */}
            {/*        <div className="col-sm-5"> */}
            {/*            /!* <div className="single-input" onSubmit={handleSubmit}> *!/ */}
            {/*            /!*    <input type="text" name="query" value={inputValue} onChange={handleInputChange}/> *!/ */}
            {/*            /!*    <i className="bi bi-search"></i> *!/ */}
            {/*            /!* </div> *!/ */}
            {/*            <form onSubmit={handleSubmit}> */}
            {/*                <div className="single-input"> */}
            {/*                    <input type="text" name="query" value={inputValue} onChange={handleInputChange}/> */}
            {/*                    <i className="bi bi-search"></i> */}
            {/*                </div> */}
            {/*            </form> */}

            {/*        </div> */}
            {/*        <div className="col-sm-2"> */}
            {/*            <div className="single-input"> */}
            {/*                <button type="submit" onClick={handleSubmit}>Search</button> */}
            {/*            </div> */}
            {/*        </div> */}
            {/*    </div> */}
            {/* </div> */}

            {/* <form onSubmit={handleSubmit}> */}
            {/*    <input type="text" name="query" value={inputValue} onChange={handleInputChange}/> */}
            {/*    <button type="submit">Search</button> */}
            {/* </form> */}

            {
                // responseData.map((data, index) => {
                //     return <ShowFOPlayerSearchDetail key={index} data={data}/>
                // }
                /// 급여 큰 순으로 정렬
                responseData.sort((a, b) => {
                    if (a.PAY_SIDE < b.PAY_SIDE) {
                        return 1
                    }
                    if (a.PAY_SIDE > b.PAY_SIDE) {
                        return -1
                    }
                    return 0
                }).map((data, index) => (
                    <ShowFOPlayerSearchDetail key={index} data={data} />
                ))

            }
        </div>

    )
}

export default Search
