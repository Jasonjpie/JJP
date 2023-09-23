import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { Routes } from "../../../Routes"
type Props = {};

const Footer = (props: Props) => {
  return (

    <div className="w-full  bg-[#101C3D]">
      <Container>
        <div className="grid lg:grid-cols-5 gap-12 py-12 px-5">
          <div className="text-white text-4xl self-end">JJP</div>
          <div className="flex flex-col gap-2 text-white font-bold">
            <div className="mb-3">Useful Links</div>
            <Link href={Routes.ABOUT}>About</Link>
            <Link href={Routes.PROJECTS}>Project</Link>
            <Link href={Routes.HOME + "/#service"}>Services</Link>
            <Link href={Routes.HOME + '/#Testimonials'}>Testimonials</Link>
          </div>
          <div className="flex flex-col gap-2 text-white font-bold">
            <div className="mb-3">Support</div>
            <Link href="">Blog</Link>
            <Link href="">FAQ</Link>
            <Link href={Routes.CONTACT}>Contact</Link>
            <Link href={Routes.ABOUT + '/#Team'}>Team</Link>
          </div>
          <div className="flex flex-col gap-5 text-white">
            <div className="mb-1 font-bold">Get in Touch</div>
            <div className="flex items-center gap-3">
              <Image
                src="/Icons/location.svg"
                width={30}
                height={50}
                alt="Address"
              />
              <div> 7379 Greenbush Ave, North Hollywood, CA 91605, US </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Icons/phone.svg"
                width={30}
                height={20}
                alt="Phone Number"
              />
              <div> +1 818-915-1831 </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Icons/email.svg"
                width={30}
                height={20}
                alt="Email Address"
              />
              <div> jasonjpinc@gmail.com </div>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-3 font-bold mt-auto">Stay Connect</div>
            <div className="flex gap-3">
              <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
                <Link href='https://www.youtube.com/@JasonPie/videos'
                target="_blank"
                >
                <Image
                  src="/Icons/icons8-youtube.svg" alt={"Youtube"}
                  width={30}
                  height={20}
                />
                </Link>
              </div>
              <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
              <Link href='https://www.instagram.com/jjpconstruction/'
              target="_blank"
              >
                <Image
                  src="/Icons/icons8-instagram.svg" alt={"Instagram"}
                  width={30}
                  height={20}
                />
                </Link>
              </div>
              <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
              <Link href='https://www.facebook.com/Jjpconstruction/'
              target="_blank"
              >
                <Image
                  src="/Icons/icons8-facebook-circled.svg" alt={"facebook"}
                  width={30}
                  height={20}
                />
                </Link>
              </div>
              <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
              <Link href='https://www.houzz.com/professionals/home-builders/jjp-construction-pfvwus-pf~724293494?'
              target="_blank"
              >
                <Image
                  src="/Icons/icons8-houzz-new.svg" alt={"Houzz"}
                  width={30}
                  height={20}
                />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  );
};

export default Footer;
