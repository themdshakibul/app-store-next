const appPromis = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const AppsDetailsPage = async ({ params }) => {
  const apps = await appPromis();
  console.log(apps);

  const { appId } = await params;
  console.log(appId, "params");




  
  return (
    <div>
      <h2>Aps Details page</h2>
    </div>
  );
};

export default AppsDetailsPage;
