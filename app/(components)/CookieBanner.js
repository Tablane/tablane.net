"use client";

import posthog from "posthog-js";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(
      !(posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing())
    );
  }, []);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShow(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShow(false);
  };

  if (!show) return <></>;
  return (
    <div className="cookie-banner bg-[#414042] h-[130px] md:h-[80px] w-full fixed bottom-0 text-sm text-white p-4 px-12 flex flex-col md:flex-row justify-between items-center">
      <p>
        We use tracking cookies to understand how you use the product and help
        us improve it.
      </p>
      <div className="flex-shrink-0 md:ml-8">
        <button
          type="button"
          onClick={acceptCookies}
          className="bg-[#475eb8] p-3 rounded mr-4"
        >
          Accept cookies
        </button>
        <button type="button" onClick={declineCookies} className="">
          Decline cookies
        </button>
      </div>
    </div>
  );
}
