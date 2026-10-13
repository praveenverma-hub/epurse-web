"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

// Same shape the app's parseInviteLink accepts (i = invite id, t = token, k = key).
const looksLikeInvite = (hash: string) =>
  /[#&]i=[0-9a-f-]{36}(&|$)/i.test(hash) && /[#&]t=[\w-]{20,}(&|$)/.test(hash) && /[#&]k=[\w-]{20,}(&|$)/.test(hash);

// The fragment as the page LOADED: later hash changes (the layout's "Skip to content"
// link sets #main-content) must not replace the invite.
const loadedHash = typeof window === "undefined" ? null : window.location.hash;
const noChanges = () => () => {};

export default function JoinInvite() {
  // null while prerendering — the fragment only exists in the browser.
  const hash = useSyncExternalStore(noChanges, () => loadedHash, () => null);
  const appUrl = hash && looksLikeInvite(hash) ? `epurse://join${hash}` : null;

  useEffect(() => {
    // One automatic try; the button covers browsers that want a tap first.
    if (appUrl) window.location.href = appUrl;
  }, [appUrl]);

  if (hash !== null && !appUrl) {
    return (
      <div className="join__card">
        <h1>Invite Link Incomplete</h1>
        <p className="join__warn">This link is missing part of the invite. Ask someone in the group for a new one.</p>
      </div>
    );
  }

  return (
    <div className="join__card">
      <h1>Join a Shared Group</h1>
      <p>Open this invite in ePurse to join the group.</p>
      <a className="join__btn join__btn--primary" href={appUrl ?? undefined} aria-disabled={!appUrl}>Open in ePurse</a>
      <Link className="join__btn join__btn--secondary" href="/#download">Get ePurse</Link>
      <p className="join__note">
        Already have it? If nothing happens, copy this page&apos;s address and paste it in
        ePurse → Groups → Join.
      </p>
    </div>
  );
}
