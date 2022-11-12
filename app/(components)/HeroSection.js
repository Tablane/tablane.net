export default function HeroSection() {
  return (
    <div className="text-center my-[8rem]">
      <div className="flex flex-col items-center">
        <span className="py-3 text-2xl font-bold text-[#191919]">
          Next Generation
        </span>
        <span className="py-3 text-7xl font-black text-[#191919]">
          Productivity
        </span>
        <button className="mt-[64px] font-normal h-[50px] w-[200px] p-2 bg-black rounded-[5px] border-black border-solid border leading-3 text-white hover:bg-white hover:text-black transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
