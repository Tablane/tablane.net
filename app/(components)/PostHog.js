"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PostHog() {
  const pathname = usePathname();

  posthog.init("phc_qdnUk6V672Fj9dotrGxne2N1LqyW5Gljftm6HcxvMIm", {
    api_host: "https://eu.posthog.com",
  });

  useEffect(() => {
    posthog.capture("$pageview");
  }, [pathname]);

  return <></>;
}
