import axios from 'axios'
import axiosInstance from '../Instance'
import { useState } from 'react'

function Mypage () {
    const [data, setData] = useState({})
    const sendtestapi = () => {
        axiosInstance.get('/mypage/test', { withCredentials: true }).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }

    return (

        <div>
            <button onClick={sendtestapi}>내 정보 보기</button>
            {
                data && data.length
                    ? (
                        <div>
                            {data.ID}
                            {data.EMAIL}
                        </div>

                    )
                    : null
            }
        </div>
    )
}

export default Mypage
