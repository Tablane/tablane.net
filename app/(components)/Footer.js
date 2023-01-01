import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row sm:h-[120px] justify-center top-[calc(100vh_-_120px)] sticky">
      <div className="w-[1048px] h-full flex justify-between items-center flex-col-reverse sm:flex-row text-sm">
        <div className="mx-8 text-sm text-[#666] my-[50px] sm:my-0">
          © 2022 Tablane
        </div>
        <div className="mx-8 flex flex-col sm:flex-row w-full sm:w-auto px-[50px] sm:px-0">
          <Link
            href="/legal/privacy-policy"
            className="sm:ml-8 cursor-pointer text-sm text-[#666] hover:text-black h-[42px] border-b border-[#eee] flex items-center sm:border-none"
          >
            Privacy Policy
          </Link>

          <Link
            href="/legal/terms"
            className="sm:ml-8 cursor-pointer text-sm text-[#666] hover:text-black h-[42px] border-b border-[#eee] flex items-center sm:border-none"
          >
            Terms and Conditions
          </Link>

          <Link
            href="https://status.tablane.net"
            className="sm:ml-8 cursor-pointer text-sm text-[#666] hover:text-black h-[42px] border-b border-[#eee] flex items-center sm:border-none"
          >
            Status
          </Link>

          <Link
            href="/contact"
            className="sm:ml-8 cursor-pointer text-sm text-[#666] hover:text-black h-[42px] border-b border-[#eee] flex items-center sm:border-none"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
