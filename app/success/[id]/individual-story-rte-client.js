"use client";

import dynamic from "next/dynamic";

const IndividualStoryRTE = dynamic(
  () => import("./individual-story-rte"),
  { ssr: false }
);

export default function IndividualStoryRTEClient(props) {
  return <IndividualStoryRTE {...props} />;
}
