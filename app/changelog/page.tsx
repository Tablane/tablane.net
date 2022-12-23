import dayjs from "dayjs";
import Link from "next/link";
import changelog from "./changelog.json";

export default function Changelog() {
  return (
    <div className="ml-[50px] mr-[20px] flex justify-center">
      <div className="max-w-[1024px]">
        <p className="text-[32px] font-semibold pt-[50px] pb-[17px] border-b border-solid border-[#EAEAEA]">
          Changelog
        </p>
        <div className="mt-8">
          {changelog["changelog"].map((change) => (
            <div
              key={change.date}
              className="flex flex-col sm:flex-row justify-between mb-12"
            >
              <div className="mr-12 flex-1 pb-8 sm:pb-0 h-fit sm:sticky top-[80px]">
                <Link
                  href={`/changelog/${change.name}`}
                  className="text-2xl font-extrabold text-[#24292f]"
                >
                  {change.name}
                </Link>
                <p className="text-[#57606a] text-sm">
                  {dayjs(change.date).format("MMMM DD, YYYY")}
                </p>
              </div>
              <div className="grow-[2] lg:grow-[5] basis-0 flex">
                <p className="">{change.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
