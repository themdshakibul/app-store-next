import Link from "next/link";
import AppCard from "@/Components/Ui/AppCard";

const appPromis = async function () {
  const res = await fetch("https://app-store-next-rosy.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const TrendingApps = async ({ from }) => {
  const apps = await appPromis();

  return (
    <section>
      <div className="container mx-auto px-2">
        <header className="space-y-3 text-center mb-10">
          <h2 className="text-5xl font-bold mt-5">
            {from === "homepage" ? "Trending Apps" : "All Apps"}{" "}
          </h2>
          <p className="font-semibold ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </header>

        <div className="grid grid-cols-4 gap-10">
          {apps
            .slice(0, from === "homepage" ? 8 : apps.length)
            .map((app, ind) => {
              return <AppCard app={app} key={ind} />;
            })}
        </div>

        {/* Link to apps apges */}
        <Link href={"/apps"} className="flex items-center justify-center mt-10">
          <button className="btn bg-purple-500 text-white">All Apps</button>
        </Link>
      </div>
    </section>
  );
};

export default TrendingApps;
