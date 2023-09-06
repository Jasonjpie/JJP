import { testmonials } from '@/data'
import Image from 'next/image'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Container from '../common/Container'

type Props = {}

const Testmonials = (props: Props) => {
  const [ index, setIndex ] = useState(0)
  const testmony = testmonials[index]
  const { ref, inView } = useInView({ triggerOnce:true })
  return (
    <div className='w-full' id='Testimonials'>
      <Container>
        <div className='relative mx-auto w-full -mb-44 z-10 space-y-16'>
          <div className='text-4xl lg:text-6xl pt-16 font-bold font-poppins text-center'>TESTMONIALS</div>
          <div ref={ref} className='grid grid-cols-1 lg:grid-cols-2 w-full bg-gradient-to-br from-[#142C63] to-[#131C31] '>
            <div className='p-16'>
              <div className='relative flex flex-col gap-10 items-center self-center'>
                <Image className={`${inView ? 'animated fadeInDown':'opacity-0'}`} src={`/Icons/${testmony.image}`} width={300} height={500} alt={testmony.name} />
                <div className={`${inView ? 'animated fadeInUp':'opacity-0'} flex-col gap-1 items-center hidden lg:flex absolute top-64 left-52 w-[500px] h-[300px] bg-white px-2 pt-10`}>
                    <div className='text-3xl font-bold font-poppins text-center'>{testmony.name}</div>
                    <div className='w-[80%] font-poppins leading-loose text-gray-500 p-1'>{testmony.testmony}</div>
                    <div className='absolute -top-8 bg-white p-6 rounded-full shadow-xl'>
                      <BiSolidQuoteLeft className='text-[#0A72AD]' />
                    </div>
                </div>
                <div className='flex flex-col relative lg:hidden gap-1 items-center w-[300px] h-[200px] bg-white px-2 pt-10'>
                    <div className='text-3xl font-bold font-poppins text-center'>{testmony.name}</div>
                    <div className='w-[300px] font-poppins leading-loose text-gray-500 p-5'>{testmony.testmony}</div>
                    <div className='absolute -top-8 bg-white p-6 rounded-full shadow-xl'>
                      <BiSolidQuoteLeft className='text-[#0A72AD]' />
                    </div>
                </div>
              </div>
            </div>
            <div className={`flex flex-col gap-10 text-white p-12 ${inView ? 'animated fadeInRight':'opacity-0'}`}>
              <div className='text-4xl font-bold font-poppins'>What we have done  & what our Customers say</div>
              <div className='font-poppins text-[#C4C4C4] text-xl leading-loose'>
                We are to help you build a excellent build, with
                us nothing is impossible. See what we have done
                and what they have to say about our work perform.
              </div>
              <div className='flex justify-end w-full mt-24'>
                <button disabled={index === 0} onClick={() => setIndex(index - 1)} className='p-5'>
                  <BsArrowLeft size={30} className='text-white' />
                </button>
                <button disabled={index === testmonials.length - 1} onClick={() => setIndex(index + 1)} className='p-5 bg-[#0A72AD]'>
                  <BsArrowRight size={30} className='text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='relative bg-[#101C3D] h-[300px] z-0'/> 
    </div>
  )
}

export default Testmonials