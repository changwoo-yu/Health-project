"use client";
import useFetch from "@/hooks";

const TestApi = () => {
  const { loading, error } = useFetch("/api");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
    </div>
  );
};

export default TestApi;
