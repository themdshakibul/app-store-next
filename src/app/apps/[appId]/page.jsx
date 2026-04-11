import downloadImage from "../../../assets/icon-downloads.png";
import reatingImage from "../../../assets/icon-ratings.png";
import reviewImages from "../../../assets/icon-review.png";
import Image from "next/image";
import RatingsChart from "@/Components/Ui/RatingsChart";
import InstallBtn from "@/Components/Ui/InstallBtn";

const appPromis = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const AppsDetailsPage = async ({ params }) => {
  const apps = await appPromis();
  const { appId } = await params;
  const app = apps.find((app) => app.id === Number(appId));

  const totalRating = app.ratings.reduce((sum, itm) => sum + itm.count, 0);

  return (
    <section>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-12 border-b pb-5 border-gray-300">
          {/* App Icon */}
          <div className="bg-base-300 p-5 rounded-2xl">
            <Image
              width={40}
              height={40}
              src={app.image}
              alt={app.title}
              className="w-64 h-64 rounded-3xl object-cover"
            />
          </div>

          <div className="flex-1 w-full">
            <div className="mb-6 space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">{app.title}</h2>
              <p className="text-lg text-success font-medium">
                {app.companyName}
              </p>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Stats Grid */}
            <div className="flex flex-wrap items-center gap-10 md:gap-20 mb-8 text-center">
              <div>
                <Image
                  src={downloadImage}
                  alt="Downloads"
                  className="mx-auto mb-2 h-6 w-6"
                />
                <h4 className="text-xs uppercase tracking-wider text-gray-500">
                  Downloads
                </h4>
                <p className="text-2xl font-bold">{app.downloads}</p>
              </div>
              <div>
                <Image
                  src={reatingImage}
                  alt="Rating"
                  className="mx-auto mb-2 h-6 w-6"
                />
                <h4 className="text-xs uppercase tracking-wider text-gray-500">
                  Rating
                </h4>
                <p className="text-2xl font-bold">{app.ratingAvg} ★</p>
              </div>
              <div>
                <Image
                  src={reviewImages}
                  alt="Reviews"
                  className="mx-auto mb-2 h-6 w-6"
                />
                <h4 className="text-xs uppercase tracking-wider text-gray-500">
                  Reviews
                </h4>
                <p className="text-2xl font-bold">{app.reviews}</p>
              </div>
            </div>

            {/* Install Button */}
            <InstallBtn app={app} />
          </div>
        </div>

        <div className="mt-10">
          <RatingsChart ratings={app.ratings} totalRating={totalRating} />
        </div>

        <div className="space-y-5 mt-10">
          <h2 className="text-3xl font-bold">Description</h2>
          <p>{app.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AppsDetailsPage;
