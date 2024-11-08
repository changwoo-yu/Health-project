"use client";
import useFetch from "@/hooks";

const TestApi = () => {
  const { data, loading, error } = useFetch("/api");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default TestApi;
