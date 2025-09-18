import React from 'react'

import Text from '@/components/ui/Text'

const ArticleCard = ({ image, title, description }) => {
    return (

        <div className="max-w-[390px] w-full  bg-white  overflow-hidden">
            <img className="w-full h-[218px] object-cover" src={image} alt="Article" />
            <div className="pt-[19px]">
                <Text className="md:text-[16px] md:leading-[24px]">{title}</Text>
                <Text className="md:text-[14px] md:leading-[21px] text-[#61758A] mt-3">{description}</Text>
            </div>
        </div>

    )
}

export default ArticleCard