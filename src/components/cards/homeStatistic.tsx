import React from 'react'

const HomeStatistic: React.FC<{icon: any, subTitle: string, count: number}> = ({icon: Icon, count, subTitle}) => {
    return (
        <div className='w-[20%] bg-[#9C0B35] items-center flex gap-8 p-5 rounded-2xl'>
            <div>
                <Icon className='text-[65px] text-white'/>
            </div>
            <div>
                <p className='text-white text-3xl font-bold'>{count}</p>
                <p className='text-white'>{subTitle}</p>
            </div>
        </div>
    )
}

export default HomeStatistic