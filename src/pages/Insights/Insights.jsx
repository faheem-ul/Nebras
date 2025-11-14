import React from 'react'
import { LatsetNews } from './sections/LatsetNews'
// import OpinionPieces from './sections/OpinionPieces'
// import Listicles from './sections/Listicles'
// import IndustryEduPost from './sections/IndustryEduPost'
import { Guides } from './sections/Guides'

const Insights = () => {
    return (
        <>
            <LatsetNews />
            <div className='h-[1px] max-w-[1312px] w-full mx-auto bg-black'></div>
            <Guides />

            {/* <OpinionPieces /> */}
            {/* <Listicles /> */}
            {/* <IndustryEduPost /> */}
        </>
    )
}

export default Insights