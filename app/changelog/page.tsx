import dayjs from "dayjs";
import Link from "next/link";

export default function Changelog() {
  const changelog = [
    {
      name: "v0.1.2",
      description:
        "Comments on Vercel Preview Deployments are now generally available giving you a centralized review workflow for rapid iteration. We have also added full support for GitLab and BitBucket integrations in addition to GitHub.\n" +
        "\n" +
        "All Pro and Enterprise teams will have the ability to use comments on their Preview Deployments, by default, for free.\n" +
        "\n" +
        "Check out the documentation to learn more.\n" +
        "\n",
      date: 1671736995280,
    },
    {
      name: "v0.1.3",
      description:
        'You can now view (GET) the security feature enablement status for all repositories in your organization using the "list organization repositories" endpoint in the REST API for the following security features:\n' +
        "\n" +
        "GitHub Advanced Security\n" +
        "Secret scanning\n" +
        "Push protection\n" +
        'Previously, you had to retrieve a list of repos and call the "get a repository" endpoint for each repository ID to accomplish this task.\n' +
        "\n" +
        "This change is intended to make it easier to audit enablement status for compliance purposes and for those customers who build external dashboards.",
      date: 1671736995280,
    },
    {
      name: "v0.1.4",
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
    },
    {
      name: "v0.1.4",
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
    },
    {
      name: "v0.1.4",
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
    },
    {
      name: "v0.1.4",
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
    },
  ];

  return (
    <div className="ml-[50px] mr-[20px]">
      <p className="text-[32px] font-semibold pt-[50px] pb-[17px] border-b border-solid border-[#EAEAEA]">
        Changelog
      </p>
      <div className="mt-8">
        {changelog.map((change) => (
          <div className="flex flex-col sm:flex-row justify-between mb-12">
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
            <div className="grow-[2] lg:grow-[5] basis-0 flex justify-center">
              <p className="lg:w-[75%]">{change.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
