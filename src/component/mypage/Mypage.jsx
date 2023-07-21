import axios from 'axios'
import axiosInstance from '../Instance'

function Mypage () {
    const sendtestapi = () => {
        axiosInstance.get('/mypage/test', { withCredentials: true }).then((response) => {
            console.log(response.data)
        })
    }
    return (

        <div>
            mypage

            <button onClick={sendtestapi}>send api</button>
        </div>
    )
}

export default Mypage
