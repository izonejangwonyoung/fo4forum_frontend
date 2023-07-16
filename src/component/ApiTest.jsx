import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosInstance from './Instance'

function ApiTest () {
    const [responseData, setResponseData] = useState(null)

    useEffect(() => {
        if (responseData) {
            console.log('responseData has changed: ', responseData)
        }
    }, [responseData])

    function handleClick () {
        axiosInstance
            .get('/api/products')
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={handleClick}>click me~!~!</button>
            {responseData &&
                responseData.map((data) => {
                    const aa = `https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/${data.season}.png`
                    const bb = `https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/card/${data.season}.png`
                    // const cc=`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${dd}.png?rd=202303230940`
                    return (

                        <div key={data.name}>
                            <h2>{data.name}</h2>
                            <p>{data.season}</p>
                            <img src={aa} alt="" />
                            <img src={bb} alt="" />

                            <p>급여:{data.pay_side}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default ApiTest
