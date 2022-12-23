import dayjs from "dayjs";
import Link from "next/link";
import changelog from "./changelog.json";
import md from "markdown-it";

export default function Changelog() {
  return (
    <div className="ml-[50px] mr-[20px] flex justify-center">
      <div className="max-w-[1024px] flex-grow">
        <p className="text-[32px] font-semibold pt-[50px] pb-[17px] border-b border-solid border-[#EAEAEA]">
          Changelog
        </p>
        <div className="mt-8">
          {changelog["changelog"].map((change) => (
            <div
              key={change.date}
              className="flex flex-col md:flex-row justify-between mb-12"
            >
              <div className="mr-12 flex-1 pb-8 md:pb-0 h-fit md:sticky top-[80px]">
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
              <div className="grow-[2] lg:grow-[5] basis-0 flex prose">
                <div
                  className="mt-[-20px]"
                  dangerouslySetInnerHTML={{
                    __html: md().render(change.description),
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
