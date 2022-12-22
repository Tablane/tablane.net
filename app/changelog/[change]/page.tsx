import dayjs from "dayjs";
import Link from "next/link";

export default function Change() {
  const change = {
    name: "Comments on Preview Deployments are now generally available",
    description:
      "You can now make Preview Deployments private for free, across all plans.\n" +
      "\n" +
      "Shareable Links: Share private Preview Deployments with external collaborators without the need to log in. See docs for limits.\n" +
      "Vercel Authentication: Team members can log in with their Vercel account to access secure previews.\n" +
      "Password Protection is now Advanced Deployment Protection and keeps the same price at $150/mo. Pro and Enterprise customers can add on Advanced Deployment Protection, which includes:\n" +
      "\n" +
      "Private Production Deployments: Make your production deployment private with the click of a button.\n" +
      "Protection Bypass for Automation: Allows you to bypass user authentication by using header secret for automated tooling.\n" +
      "Password Protection: Secure preview and production deployments with a password.\n" +
      "Enterprise customers will also have access to audit logs allowing them to track who generated a given Sharable Link at what time and from which device.\n" +
      "\n" +
      "Check out the documentation to learn more.\n" +
      "\n",
    date: 1671736995280,
  };

  return (
    <div className="p-6">
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
      <p className="text-[80px] font-bold leading-none py-12">{change.name}</p>
      <div className="text-lg">{change.description}</div>
    </div>
  );
}
