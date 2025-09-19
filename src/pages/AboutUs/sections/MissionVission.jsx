import React from 'react'

import Text from '@/components/ui/Text'

import mission from '@/assets/about/mission.jpg'
import vission from '@/assets/about/vission.jpg'

const MissionVission = () => {
    return (
        <section className="w-full bg-white py-[70px]">

            {/* Info */}
            <div className='max-w-[821px] mx-auto'>
                <Text className="text-[24px] leading-[42px]">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1312px] w-full mx-auto mt-[107px] gap-8 px-5">
                {/* Image Column */}
                <div className="w-full md:max-w-[600px] flex-shrink-0">
                    <img
                        src={mission}
                        alt="mission.jpg"
                        className="w-full h-auto object-cover "
                    />
                </div>

                {/* Text Column */}
                <div className="flex-1">
                    <Text className="md:leading-[42px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </Text>
                </div>
            </div>

            {/* Our Vission */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-[1312px] w-full mx-auto mt-[70px] gap-8 px-5">
                {/* Image Column */}
                <div className="w-full md:max-w-[600px] flex-shrink-0">
                    <img
                        src={vission}
                        alt="mission.jpg"
                        className="w-full h-auto object-cover "
                    />
                </div>

                {/* Text Column */}
                <div className="flex-1">
                    <Text className="md:leading-[42px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </Text>
                </div>
            </div>

        </section >
    )
}

export default MissionVission