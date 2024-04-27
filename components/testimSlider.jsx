'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

const Slider = ({clients}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    return (
        <section className=''>
            <div className='container mx-auto'>
                <Swiper

                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={5}
                    modules={[Thumbs]}
                    watchSlidesVisibility={true}
                    watchSlidesProgress={true}
                    className='thumbs max-w-3xl rounded-lg'
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            {({isActive})=> (
                                <div className='hidden md:flex p-4 cursor-pointer'>
                                    <Image
                                        src={client.avatar} width={120} height={120}
                                        alt='qwe'
                                        className= {`${isActive} : '' ? '' rounded-full`}
                                    />
                                </div>
                                )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    loop={true}
                    navigation={{enabled:true}}
                    slidesPerView={1}
                    initialSlide={2}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    }}
                    modules={[Navigation, Thumbs, Pagination]}
                    pagination={{
                        clickable:true,
                        enabled:true,
                }}
                    className='mt-6'
                    breakpoints={{
                        320:{
                            pagination: {
                                enabled:true
                            },
                            navigation: {
                                enabled:false
                            }
                        },
                        680:{
                            pagination: {
                                clickable:false,
                                enabled:false
                            },
                            navigation: {
                                enabled:true
                            }
                        }
                    }}
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index} className=''>
                            <div className='flex items-center justify-center py-4 md:hidden'>
                                <Image src={client.avatar} alt='qwe' width={120} height={120} className='rounded-full'/>
                            </div>
                            <div className='flex overflow-hidden w-full justify-center items-center  text-white flex-col xl:px-20 fl:px-12 text-center pt-4 pb-14'>
                                <p className=' md:max-w-full max-w-[250px]'>{client.text}</p>
                                <h3 className='xl:text-2xl text-xl fl:pt-4 xl:pt-2'>{client.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Slider