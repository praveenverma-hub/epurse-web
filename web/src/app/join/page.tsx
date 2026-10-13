import type { Metadata } from "next";
import JoinInvite from "./JoinInvite";
import "./join.css";

// Where a shared-group invite lands when Android didn't open the app itself
// (mobile repo: docs/SHARED_GROUP_SYNC.md §5). The invite is in the #fragment,
// which browsers never send to this server — JoinInvite reads it in the browser
// and hands it to the app as epurse://join#…
//
// The fragment holds the group's key: never add analytics or any third-party
// script to this route.
export const metadata: Metadata = {
  title: "Join a Shared Group — ePurse",
  description: "Open this invite in ePurse to join the group.",
  referrer: "no-referrer",
  robots: { index: false, follow: false },
};

export default function JoinPage() {
  return (
    <main id="main-content" className="container join">
      <JoinInvite />
    </main>
  );
}
