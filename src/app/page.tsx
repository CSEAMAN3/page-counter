import Image from "next/image";
import { kv } from "@vercel/kv";

export default async function Home() {
  // see how many people like us on git hub
  const res = await fetch("https://api.github.com/repos/CSEAMAN3/page-counter", { next: { revalidate: 5 } });
  const data = await res.json();
  // console.log(data);

  // see how many times the page has been viewed
  const pageViews = await kv.incr("views");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-[6rem]">{pageViews}</p>
      <span className="text-[2rem]">🎃{data.stargazers_count}</span>
    </main>
  );
}
