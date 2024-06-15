import Link from "next/link";

const History = () => {
  return (
    <div>
      <h2>History page</h2>
      <Link className="text-red-500" href={"/about/history/vision"}>
        Vision
      </Link>
    </div>
  );
};

export default History;
