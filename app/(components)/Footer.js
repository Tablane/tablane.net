export default function Footer() {
  return (
    <div className="flex flex-row h-[120px] justify-center">
      <div className="w-[1048px] h-full flex justify-between items-center flex-row text-sm">
        <div className="mx-8">© 2022 TaskBoard</div>
        <div className="mx-8">
          <span className="ml-8 cursor-pointer text-sm text-[#666] hover:text-black">
            Privacy Policy
          </span>
          <span className="ml-8 cursor-pointer text-sm text-[#666] hover:text-black">
            Terms and Conditions
          </span>
          <span className="ml-8 cursor-pointer text-sm text-[#666] hover:text-black">
            Contact
          </span>
        </div>
      </div>
    </div>
  );
}
