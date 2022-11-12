import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <div className="h-[64px] flex sticky top-0 backdrop-blur-sm backdrop-saturate-200">
        <div className="w-[1048px] m-auto flex justify-between px-[24px] items-center">
          <Image
            className="p-2 cursor-pointer"
            src="/android-chrome-192x192.png"
            alt="logo"
            width={42}
            height={42}
          />
          <div>
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Features
            </span>
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Templates
            </span>
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Integrations
            </span>
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Enterprise
            </span>
          </div>
          <button className="h-[32px] p-2 bg-black rounded-[5px] border-black border-solid border text-sm leading-3 text-white hover:bg-white hover:text-black transition">
            Open App
          </button>
        </div>
      </div>
      <div className="bg-red-200 text-center">blabla</div>
    </div>
  );
}
