import React, { useState } from 'react'
import axiosInstance from './Instance'
function AccordianTest () {
    const [data, setData] = useState()
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000) // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

    const Nextyear = nextDate.getFullYear()
    const Nextmonth = (nextDate.getMonth() + 1).toString().padStart(2, '0')
    const Nextday = nextDate.getDate().toString().padStart(2, '0')

    const formattedNextDate = `${Nextyear}-${Nextmonth}-${Nextday}`
    const formattedDate = `${year}-${month}-${day}`
    console.log(formattedNextDate)
    console.log(formattedDate)
    const testapi = () => {
        axiosInstance.get('/accordiantest', {
            params: { date: formattedDate, nextdate: formattedNextDate }
        }
        ).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }

    return (
        <div>
            <button style={{ marginTop: '200px' }} onClick={testapi}>test</button>
            {
                data
                    ? (
                        data.map((it, index) => {
                            return (
                                <p key={index}>{it.text}</p>
                            )
                        })
                    )
                    : null
            }
        </div>

    )
}

export default AccordianTest
