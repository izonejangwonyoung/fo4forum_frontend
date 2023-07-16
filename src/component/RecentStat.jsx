import axios from 'axios'

function RecentStat (props) {
    const ex = 101001183
    const fx = 7
    const apiKey = process.env.REACT_APP_NEXON_API_KEY
    console.log(ex)
    axios.get('https://api.nexon.co.kr/fifaonline4/v1.0/rankers/status', {
        params: {
            matchtype: 50,
            players: '[{"id":101001183,"po":7}]'
        },
        headers: {
            Authorization: apiKey
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error)
    })

    return (
        <div>

        </div>
    )
}

export default RecentStat
