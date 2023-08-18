import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
type Props = {};

const Footer = (props: Props) => {
  return (
    
    <div className="w-full md:px-32 bg-[#091020]">
      <Container>
      <div className="grid lg:grid-cols-5 gap-16 p-20">
        <div className="text-white text-4xl self-end">JJP</div>
        <div className="flex flex-col gap-2 text-white font-bold">
          <div className="mb-3">Useful Links</div>
          <Link href="">About</Link>
          <Link href="">Project</Link> 
          <Link href="">Services</Link>
          <Link href="">Testimonials</Link>
        </div>
        <div className="flex flex-col gap-2 text-white font-bold">
          <div className="mb-3">Support</div>
          <Link href="">Blog</Link>
          <Link href="">FAQ</Link>
          <Link href="">Contact</Link>
          <Link href="">Team</Link>
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
            <div> Domino Street, District 456, Los angeles USA </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/Icons/phone.svg"
              width={30}
              height={20}
              alt="Phone Number"
            />
            <div> +44 652 762 887 </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/Icons/email.svg"
              width={30}
              height={20}
              alt="Email Address"
            />
            <div> hello@mandor.com </div>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <div className="mb-3 font-bold mt-auto">Stay Connect</div>
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
              Fb
            </div>
            <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
              lg
            </div>
            <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
              Li
            </div>
          </div>
        </div>
      </div>
      </Container>
      
    </div>
  );
};

export default Footer;
