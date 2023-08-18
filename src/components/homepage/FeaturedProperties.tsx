import { featuredProperties } from "@/data";
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri";
import Image from "next/image";
type Props = {};

const FeaturedProperties = (props: Props) => {
  return (
    <div className="w-full bg-[#F5F5FF] lg:px-32 py-24 md:px-32 space-y-10 ">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="font-bold text-6xl leading-normal">
          Featured Properties
        </div>
        <div className=" leading-loose font-montserrat text-gray-500 text-2xl pt-5">
          Take a look at our many finished projects that have been so amazing,
          we&apos;re sure you&apos;ll want them too.
        </div>
        <div className="flex justify-end self-start gap-3">
          <button className="p-4 rounded-2xl bg-white">
            <RiArrowLeftFill className="text-primary" size={30} />
          </button>
          <button className="p-4 rounded-2xl bg-primary shadow-primary shadow-2xl">
            <RiArrowRightFill className="text-white" size={30} />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
        {featuredProperties.map((property, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-white rounded-3xl p-3"
          >
            <Image
              src={`/images/featured-properties/${property.image}`}
              width={500}
              height={800}
              alt={property.name}
            />
            <div className="font-bold">{property.name}</div>
            <div className="text-gray-400">{property.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
