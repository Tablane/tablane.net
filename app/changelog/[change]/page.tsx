import dayjs from "dayjs";
import Link from "next/link";
import changelog from "../changelog.json";
import { notFound } from "next/navigation";

export default function Change({ params }) {
  const change = changelog["changelog"].find((x) => x.name === params.change);

  if (!change) {
    notFound();
  }

  return (
    <div className="flex justify-center">
      <div className="p-6 lg:p-16 max-w-[1024px]">
        <Link
          className="flex mb-[65px] cursor-pointer text-[#666] text-sm hover:text-black"
          href="/changelog"
        >
          ← Back to Changelog
        </Link>
        <div className="flex items-center">
          <div className="inline-flex py-1 px-3 whitespace-no-wrap rounded-full bg-[#eaeaea]">
            <p className="text-sm">Changelog</p>
          </div>
          <p className="ml-4 text-[#666] text-sm">
            {dayjs(change.date).format("MMMM DD, YYYY")}
          </p>
        </div>
        <p className="text-[32px] lg:text-[80px] font-bold leading-none py-12">
          {change.name}
        </p>
        <div className="text-base lg:text-lg">{change.description}</div>
      </div>
    </div>
  );
}
