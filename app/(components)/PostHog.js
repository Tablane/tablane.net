"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PostHog() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== undefined) posthog.capture("$pageview");
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== undefined)
      posthog.init("phc_qdnUk6V672Fj9dotrGxne2N1LqyW5Gljftm6HcxvMIm", {
        api_host: "https://eu.posthog.com",
      });
  }, []);

  return <></>;
}
