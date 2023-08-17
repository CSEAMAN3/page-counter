import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.github.com/repos/CSEAMAN3/page-counter", { next: { revalidate: 5 } });
  const data = await res.json();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-[6rem]">{data.stargazers_count}</main>
  );
}
