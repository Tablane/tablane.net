import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-[#FAFAFA] py-[100px]">
      <div className="text-center px-8">
        <h1 className="font-bold text-[36px] md:text-[64px] mb-4">
          We are here to help
        </h1>
        <span className="text-[18px] md:text-[20px] text-[#666]">
          Please don’t hesitate to get in touch with us if you have a query or
          want to give some feedback.
        </span>
      </div>
      <div className="p-6 pt-14 flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="w-[300px] h-[400px] bg-white contact-card-shadow rounded flex flex-col justify-between items-center p-6 pt-12">
          <span className="w-[64px] h-[64px] rounded-full flex justify-center items-center">
            <Image
              src="/assets/discord.svg"
              alt="discord icon"
              width={64}
              height={64}
            />
          </span>
          <span className="text-[32px] font-bold">Discord</span>
          <span className="">Contact us through discord.</span>
          <Link
            href="https://discord.com/invite/YpfCs7Xt2r"
            className="h-12 w-full bg-[#5865F2] rounded text-white flex justify-center items-center"
          >
            <span>Join</span>
          </Link>
        </div>
        <div className="w-[300px] h-[400px] bg-white contact-card-shadow rounded flex flex-col justify-between items-center p-6 pt-12">
          <span className="w-[64px] h-[64px] rounded-full flex justify-center items-center">
            <Image
              src="/assets/email.svg"
              alt="email icon"
              width={64}
              height={64}
            />
          </span>
          <span className="text-[32px] font-bold">Email</span>
          <span className="">Message us per Email.</span>
          <Link
            href="mailto:contact@tablane.net"
            className="h-12 w-full bg-black rounded text-white flex justify-center items-center"
          >
            <span>Message</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
