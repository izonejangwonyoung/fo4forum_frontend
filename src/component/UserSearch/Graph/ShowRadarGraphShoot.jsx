import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const ShowRadarGraphShoot = (props) => {
    const { matchInfo } = props
    const chartRef = useRef(null)
    let nickname1 = ''
    let nickname2 = ''
    const effectiveShootTotal = []
    const goalFreekick = []
    const goalHeading = []
    const goalInPenalty = []
    const goalOutPenalty = []
    const goalPenaltyKick = []
    const goalTotal = []
    const goalTotalDisplay = []
    const ownGoal = []
    matchInfo.map((it, index) => {
        if (index === 0) {
            nickname1 = it.nickname
        } else if (index === 1) {
            nickname2 = it.nickname
        }
    })
    matchInfo.map((it, index) => {
        effectiveShootTotal.push(it.shoot.effectiveShootTotal)
        goalFreekick.push(it.shoot.goalFreekick)
        goalHeading.push(it.shoot.goalHeading)
        goalInPenalty.push(it.shoot.goalInPenalty)
        goalOutPenalty.push(it.shoot.goalOutPenalty)
        goalPenaltyKick.push(it.shoot.goalPenaltyKick)
        goalTotal.push(it.shoot.goalTotal)
        goalTotalDisplay.push(it.shoot.goalTotalDisplay)
        ownGoal.push(it.shoot.ownGoal)
    })

    const maxValues = [
        Math.max(...effectiveShootTotal),
        Math.max(...goalFreekick),
        Math.max(...goalHeading),
        Math.max(...goalInPenalty),
        Math.max(...goalOutPenalty),
        Math.max(...goalPenaltyKick),
        Math.max(...goalTotal),
        Math.max(...goalTotalDisplay),
        Math.max(...ownGoal)
    ]

    // 모든 배열에서 가장 큰 값을 찾기
    const maxOverall = Math.max(...maxValues) + 1
    console.log(nickname1)
    console.log(nickname2)
    useEffect(() => {
        const chartDom = chartRef.current
        const myChart = echarts.init(chartDom)
        const option = {
            title: {
                text: '득점 통계'
            },
            tooltip: {
                trigger: 'item',
                showContent: 'true'
            },
            legend: {
                data: ['Allocated Budget', 'Actual Spending']
            },
            radar: {
                indicator: [
                    { name: '유효 슈팅', max: `${maxOverall}` },
                    { name: '박스 내 득점', max: `${maxOverall}` },
                    { name: '박스 바깥 득점', max: `${maxOverall}` },
                    { name: '프리킥 득점', max: `${maxOverall}` },
                    { name: '헤딩 득점', max: `${maxOverall}` },
                    { name: '자책 득점', max: `${maxOverall}` },
                    { name: '패널티킥 득점', max: `${maxOverall}` },
                    { name: '총 골 수', max: `${maxOverall}` }
                ]
            },
            series: [
                {
                    name: '득점 통계',
                    type: 'radar',
                    data: [

                        {
                            value: [effectiveShootTotal[0], goalInPenalty[0], goalOutPenalty[0], goalFreekick[0], goalHeading[0], ownGoal[0], goalPenaltyKick[0], goalTotalDisplay[0]],
                            name: `${nickname1}`
                        },
                        {
                            value: [effectiveShootTotal[1], goalInPenalty[1], goalOutPenalty[1], goalFreekick[1], goalHeading[1], ownGoal[1], goalPenaltyKick[1], goalTotalDisplay[1]],
                            name: `${nickname2}`
                        }
                    ]
                }
            ]
        }
        myChart.setOption(option)

        return () => {
            myChart.dispose()
        }
    }, [])

    return <div ref={chartRef} style={{ width: '400px', height: '400px' }}></div>
}

export default ShowRadarGraphShoot
