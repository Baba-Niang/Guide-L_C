import GuideClient from "./GuideClient";

/**
 * GitHub Pages / Next.js App Router entry point.
 * Keep the route itself as a Server Component and isolate browser state
 * (Zustand, localStorage, keyboard shortcuts, animations) in GuideClient.
 */
export default function Page() {
  return <GuideClient />;
}
