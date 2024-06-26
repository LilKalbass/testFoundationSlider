'use client'

import React from 'react'
import Slider from "@/components/testimSlider";
const clientsReviews = [
    {
      'name': 'Марго',
      'avatar': '/assets/left-.jpg',
      'text': 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым'
    },
    {
        'name': 'Артур',
        'avatar': '/assets/left.jpg',
        'text': 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым'
    },
    {
        'name': 'Олена',
        'avatar': '/assets/mid.jpg',
        'text': 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым'
    },
    {
        'name': 'Максон',
        'avatar': '/assets/right.jpg',
        'text': 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым'
    },
    {
        'name': 'Дмитро',
        'avatar': '/assets/right+.jpg',
        'text': 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым'
    },
]

const Testimonials = () => {
    return (
        <section className='md:bg-review fl:bg-reviewPhone min-h-[1000px] bg-cover bg-no-repeat relative'>
            <div className= 'container mx-auto md:pt-32 pt-6'>
                <h1 className='text-white text-[48px] text-center font-extralight pt-5  leading-6'>Відгуки</h1>
                <div className = 'flex justify-center md:pt-20'>
                    <div className=' flex items-center lg:max-w-[1250px] '>
                        <Slider clients = {clientsReviews}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials
