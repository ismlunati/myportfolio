"use client"
import CircleImage from '@/components/circle-image'
import TransitionPage from '@/components/transition-page'
import { dataTestimonials } from '@/data'
import Image from 'next/image'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useTranslation } from 'react-i18next'

const Testimonials = () => {
    const { t } = useTranslation();
  return (
    <>
    <TransitionPage />
    <div className='flex flex-col justify-center h-lvh'>

        <CircleImage />

        <h1 className='text-2xl leading-tight text-center md:text-4xl md:mb-5'>
            {t("titleLogro1")}
            <span className="block font-bold text-secondary"> {t("titleLogro2")}</span>
        </h1>


        <div className='flex items.center justify-center'>

            <div>
                <Swiper
                
                breakpoints={{
                    320: {
                        slidesPerView:1,
                        spaceBetween:15
                    }
                }}
                freeMode={true}
                pagination={{ 
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[380px] md:h[300px] w-[270px] md:w-[500px]"
                >

                        {dataTestimonials.map(({id, name, description, imageUrl}) =>(
                                <SwiperSlide key={id}>
                                <Image src={imageUrl} 
                                alt={name} 
                                width={150} 
                                height={150} 
                                className='mx-auto rounded-full'/>
                                <h4 className='text-center'>{t(name)} </h4>
                                <p className='mt-5 text-center'>{t(description)}</p>
                        </SwiperSlide>

                        ))}


                </Swiper>

            </div>


        </div>
    </div>
    </>
  )
}

export default Testimonials