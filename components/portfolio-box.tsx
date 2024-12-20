import Image from 'next/image';
import React from 'react'

interface PortfolioBoxProps {
    data: {
        id:number, 
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}
const PortfolioBox = (props : PortfolioBoxProps) => {
    const {data}= props;
    const { title, image} = data
  return (
    <div className='p-4 border border-teal-50 rounded-xl'>
            <h3 className='mb-4 text-xl'>{title}</h3>
{        <Image src={image} alt="Image product" width={200} height={200}
            className="w-full md:w-[200px] h-auto rounded-md object-cover"
        />}

    </div>
  )
}

export default PortfolioBox