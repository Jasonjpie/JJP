import { BiBriefcase, BiCheckShield } from "react-icons/bi"
import { IoPricetagOutline } from 'react-icons/io5'
import { BsShieldCheck } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
type Props = {}

const MakeUsDifferent = (props: Props) => {
  return (
    <div className="w-full flex flex-col mt-24">
        <div className="w-44 h-3 bg-gradient-to-r from-[#BDBFEC] to-[#051242]"/>
        <div className="flex flex-wrap lg:flex-nowrap font-poppins">
            <div className="font-semibold text-5xl p-2 lg:py-10 lg:pr-10">What Make Us Different?</div>
            {/* <div className="text-gray-500 text-2xl font-medium lg:max-w-[60%] p-2 lg:p-10">Check out our best service you can possibly orders in building your company and don&apos;t forget to ask via our email or our customer service if you are interested in using our services</div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex flex-col gap-5 font-poppins p-3">
            <div className="w-fit rounded-full p-3 bg-[#2329C0] bg-opacity-30">
              <div className="bg-[#051242] rounded-full p-4">
              <BiBriefcase size={40} className=' text-white' />
              </div>
            </div>
            <div className="font-semibold text-2xl">Experienced</div>
            <div className="font-medium text-xl">Our experience of 14 years of building and making achievements in the world of development</div>
          </div>
          <div className="flex flex-col gap-5 font-poppins p-3">
            <div className="w-fit rounded-full p-3 bg-[#2329C0] bg-opacity-30">
              <div className="bg-[#051242] rounded-full p-4">
                <IoPricetagOutline size={40} className='  text-white' />
              </div>
            </div>
            <div className="font-semibold text-2xl">Competitive Price</div>
            <div className="font-medium text-xl">The prices we offer you are very competitive without reducing the quality of the company&apos;s work in the slightest</div>
          </div>
          <div className="flex flex-col gap-5 font-poppins p-3">
            <div className="w-fit rounded-full p-3 bg-[#2329C0] bg-opacity-30">
              <div className="bg-[#051242] rounded-full p-4">
                <AiOutlineFieldTime size={40} className='text-white' />
              </div>
            </div>
            <div className="font-semibold text-2xl">On Time</div>
            <div className="font-medium text-xl">We prioritize the quality of our work and finish it on time</div>
          </div>
          <div className="flex flex-col gap-5 font-poppins p-3">
            <div className="w-fit rounded-full p-3 bg-[#2329C0] bg-opacity-30">
              <div className="bg-[#051242] rounded-full p-4">
                <BiCheckShield size={40} className=' text-white' />
              </div>
            </div>
            <div className="font-semibold text-2xl">Best Materials</div>
            <div className="font-medium text-xl">The material determines the building itself so we recommend that you use the best & quality materials in its class.</div>
          </div>

        </div>
    </div>
  )
}

export default MakeUsDifferent