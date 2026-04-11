import reatingImage from "../../assets/icon-ratings.png";
import downloadImage from "../../assets/icon-downloads.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppCard = ({ app }) => {
  return (
    <section>
      <Link
        href={`/apps/${app.id}`}
        className="card flex flex-col h-full card-body bg-base-200 border border-gray-300 hover:border-cyan-500 space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-cyan-100 cursor-pointer"
      >
        <Image
          src={app.image}
          alt={app.title}
          width={80}
          height={80}
          className="rounded-xl object-contain w-full"
        />

        <h4 className="text-3xl font-semibold">{app.title}</h4>

        <div className="flex items-center justify-between mt-auto pt-4">
          <button className="btn flex items-center gap-2 text-green-500">
            <Image src={downloadImage} alt="" className="w-4 h-4" />
            {app.downloads}
          </button>
          <button className="btn flex items-center gap-2 text-orange-500">
            <Image src={reatingImage} alt="" className="w-4 h-4" />
            {app.ratingAvg}
          </button>
        </div>
      </Link>
    </section>
  );
};

export default AppCard;
