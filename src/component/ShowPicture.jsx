import ConvertSpid from '../data/spid.json'
import axios from 'axios'
import { useState } from 'react'

function ShowPicture (props) {
    const value = String(props.spid)
    const realvlaue = value.substr(-6, 6)
    const realvalue = parseInt(realvlaue)
    const srcsrc = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${realvalue}.png`

    // axios.get(`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${props.spid}.png`, {
    //     headers: {
    // Authorization: apiKey
    //     }}).then((response)=>{
    //         console.log(response.data)
    //         setUuu(response.data)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    return (

        <div>
            <img src={srcsrc} alt={props.spid} title={props.spid}/>
        </div>
    )
}

export default ShowPicture
