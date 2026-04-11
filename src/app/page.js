import Heder from "@/Components/Pages/Home/Header";
import Thrusted from "@/Components/Pages/Home/Thrusted";
import TrendingApps from "@/Components/Pages/Home/TrendingApps";

export default function Home() {
  return (
    <div>
      <Heder />
      <Thrusted />
      <TrendingApps from="homepage" />
    </div>
  );
}
