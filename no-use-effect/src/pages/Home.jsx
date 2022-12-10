import React from "react";
import { useLoaderData, Await } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <React.Suspense fallback={<p>Loading data...</p>}>
      <Await resolve={data.result} errorElement={<p>Error loading data</p>}>
        {(result) => <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Await>
    </React.Suspense>
  );
};

export default Home;
