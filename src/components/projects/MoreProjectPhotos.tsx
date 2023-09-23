import { Projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Routes } from "../../../Routes";
import ImageModal from '@/components/projects/ImageModal'

type Props = {
  id:string,
  images: {url:string, name:string}[]
  showDetails?:boolean, 
};


const MoreProjectPhotos = ({id, showDetails = false, images}: Props) => {
  const [ activeImage, setActiveImage ] = useState(images[0]?.url)
  const [ isOpen, setIsOpen ] = useState(false)
  const moreImages = Math.ceil((images.length - 3)/8)
  const showModal = (url:string) => {
    setActiveImage(url)
    setIsOpen(true)
  }
  return (
    <div className="flex flex-col gap-5">

        <div className="flex  gap-5 w-full  h-[300px] xs:h-[500px] lg:h-[700px] relative">
          <button onClick={() => showModal(images[0]?.url)} className="relative w-[70%] h-full">
            <Image
              className="aspect-auto object-cover"
              src={images[0]?.url}
              fill
              alt=""
            />
          </button>
          <div className="flex flex-col gap-5 w-[30%] h-full">
            <button onClick={() => showModal(images[1].url)} className="w-full h-[50%] relative">
              {images[1] && 
              <Image
                className="aspect-auto object-cover"
                src={images[1].url}
                fill
                alt=""
              />}
            </button>
            <button  onClick={() => showModal(images[2].url)} className="w-full h-[50%] relative">
              {images[2] && 
              <Image
                className="aspect-auto object-cover"
                src={images[2].url}
                fill
                alt=""
              />}
            </button>
          </div>
          {!showDetails && 
          <Link href={`${Routes.PROJECTS}/gallery/${id}`} className="flex items-center gap-3 bg-white rounded-md px-5 py-2 absolute bottom-10 right-10">
            <IoImageOutline />
            <div>View all the photos</div>
          </Link>}
        </div>
        {
          Array.from({length:moreImages}).map((_, index) => 
            <div className="flex flex-col gap-5" key={index}>
              {showDetails && (images[(index*8) + 3] || images[(index*8) + 4] || images[(index*8) + 5]) && 
              <div className="flex  gap-5 w-full  h-[300px] xs:h-[500px] lg:h-[700px] relative">
                {images[(index*8) + 3] && 
                <button onClick={() => showModal(images[(index*8) + 3].url)} className="relative w-[35%] h-full">
                  <Image
                    className="aspect-auto object-cover"
                    src={images[(index*8) + 3].url}
                    fill
                    alt=""
                  />
                </button>}
                {(images[(index*8) + 4] || images[(index*8) + 5]) && 
                  <div className="flex flex-col gap-5 w-[30%] h-full">
                  {images[(index*8) + 4] &&
                    <button onClick={() => showModal(images[(index*8) + 4].url)} className="w-full h-[50%] relative">
                      <Image
                        className="aspect-auto object-cover"
                        src={images[(index*8) + 4].url}
                        fill
                        alt=""
                      />
                    </button>}
                    {images[(index*8) + 5] && 
                    <button onClick={() => showModal(images[(index*8) + 5].url)} className="w-full h-[50%] relative">
                      <Image
                        className="aspect-auto object-cover"
                        src={images[(index*8) + 5].url}
                        fill
                        alt=""
                      />
                    </button>}
                  </div>}
                {images[(index*8) + 6] && 
                <button  onClick={() => showModal(images[(index*8) + 6].url)} className="relative w-[35%] h-full">
                  <Image
                    className="aspect-auto object-cover"
                    src={images[(index*8) + 6].url}
                    fill
                    alt=""
                  />
                </button>}
              </div>}
              {showDetails && (images[(index*8) + 7] || images[(index*8) + 8] || images[(index*8) + 9] || images[(index*8) + 10])  && 
              <div className="flex  gap-5 w-full  h-[300px] xs:h-[500px] lg:h-[700px] relative">
                {(images[(index*8) + 7] || images[(index*8) + 8]) && <div className="flex flex-col gap-5 w-[30%] h-full">
                  {images[(index*8) + 7] &&
                  <button onClick={() => showModal(images[(index*8) + 7].url)}  className="w-full h-[50%] relative">
                    <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 7].url}
                      fill
                      alt=""
                    />
                  </button>}
                  {images[(index*8) + 8] && 
                  <button onClick={() => showModal(images[(index*8) + 8].url)}  className="w-full h-[50%] relative">
                    <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 8].url}
                      fill
                      alt=""
                    />
                  </button>}
                </div>}
                {(images[(index*8) + 9] || images[(index*8) + 10]) &&
                  <div className='flex flex-col gap-5 w-[70%] h-full'>
                  {images[(index*8) + 9] &&
                    <button onClick={() => showModal(images[(index*8) + 9].url)} className="relative w-full h-[50%]">
                      <Image
                        className="aspect-auto object-cover"
                        src={images[(index*8) + 9].url}
                        fill
                        alt=""
                      />
                    </button>}
                      {images[(index*8) + 10] && 
                      <button onClick={() => showModal(images[(index*8) + 10].url)}  className="relative w-full h-[50%]">
                        <Image
                          className="aspect-auto object-cover"
                          src={images[(index*8) + 10].url}
                          fill
                          alt=""
                        />
                      </button>}
                  </div>}
              </div>}
            </div>
          

          )
        }
        <ImageModal image={activeImage} isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default MoreProjectPhotos;
