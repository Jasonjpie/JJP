import { Projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Routes } from "../../../Routes";
type Props = {
  id:string,
  images: {url:string, name:string}[]
  showDetails?:boolean, 
};

const rooms = [
  {id:1, name:'All'},
  {id:2, name:'Living Room'},
  {id:3, name:'Kitchen'},
  {id:4, name:'Garden'},
  {id:5, name:'Bathroom'},
]

const MoreProjectPhotos = ({id, showDetails = false, images}: Props) => {
  const [ activeRooms, setActiveRooms ] = useState<number[]>([1])
  const handleSelection = (id:number) => {
    if(activeRooms.includes(id)){
      setActiveRooms(activeRooms.filter(_id => _id !== id))
    }else{
      setActiveRooms([...activeRooms, id])
    }
  }
  const moreImages = Math.ceil((images.length - 3)/8)
  return (
    <div className="flex flex-col gap-5">
      {showDetails && 
      <div className="flex gap-5">
        {
          rooms.map((room, index) => 
          <button key={index} disabled={activeRooms.length === 3 && !activeRooms.includes(room.id)} onClick={() => handleSelection(room.id)} className={`rounded-xl border px-5 py-2 ${activeRooms.includes(room.id) ? 'bg-[#051242] text-white':'bg-white text-gray-500'}`}>{room.name}</button>
          )
        }
        </div>}
        <div className="flex  gap-5 w-full  h-[300px] xs:h-[500px] lg:h-[700px] relative">
          <div className="relative w-[70%] h-full">
            <Image
              className="aspect-auto object-cover"
              src={images[0]?.url}
              fill
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 w-[30%] h-full">
            <div className="w-full h-[50%] relative">
              {images[1] && 
              <Image
                className="aspect-auto object-cover"
                src={images[1].url}
                fill
                alt=""
              />}
            </div>
            <div className="w-full h-[50%] relative">
              {images[2] && 
              <Image
                className="aspect-auto object-cover"
                src={images[2].url}
                fill
                alt=""
              />}
            </div>
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
              {showDetails && 
              <div className="flex  gap-5 w-full  h-[300px] xs:h-[500px] lg:h-[700px] relative">
                <div className="relative w-[35%] h-full">
                  {images[(index*8) + 3] && 
                  <Image
                    className="aspect-auto object-cover"
                    src={images[(index*8) + 3].url}
                    fill
                    alt=""
                  />}
                </div>
                <div className="flex flex-col gap-5 w-[30%] h-full">
                  <div className="w-full h-[50%] relative">
                    {images[(index*8) + 4] && 
                    <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 4].url}
                      fill
                      alt=""
                    />}
                  </div>
                  <div className="w-full h-[50%] relative">
                    {images[(index*8) + 5] && <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 5].url}
                      fill
                      alt=""
                    />}
                  </div>
                </div>
                <div className="relative w-[35%] h-full">
                  {images[(index*8) + 6] && 
                  <Image
                    className="aspect-auto object-cover"
                    src={images[(index*8) + 6].url}
                    fill
                    alt=""
                  />}
                </div>
              </div>}
              {showDetails && 
              <div className="flex  gap-5 w-full  h-[300px] xs:h-[500px] lg:h-[700px] relative">
              <div className="flex flex-col gap-5 w-[30%] h-full">
                  <div className="w-full h-[50%] relative">
                    {images[(index*8) + 7] && 
                    <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 7].url}
                      fill
                      alt=""
                    />}
                  </div>
                  <div className="w-full h-[50%] relative">
                    {images[(index*8) + 8] && <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 8].url}
                      fill
                      alt=""
                    />}
                  </div>
                </div>
                <div className='flex flex-col gap-5 w-[70%] h-full'>
                  <div className="relative w-full h-[50%]">
                    {images[(index*8) + 9] && <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 9].url}
                      fill
                      alt=""
                    />}
                  </div>
                  <div className="relative w-full h-[50%]">
                    {images[(index*8) + 10] && 
                    <Image
                      className="aspect-auto object-cover"
                      src={images[(index*8) + 10].url}
                      fill
                      alt=""
                    />}
                  </div>
                </div>
              </div>}
            </div>
          

          )
        }
    </div>
  );
};

export default MoreProjectPhotos;
