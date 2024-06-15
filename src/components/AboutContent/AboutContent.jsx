import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="flex flex-col gap-3 p-3 text-red-400">
      <Link href={"/about/history"}>History</Link>
      <Link href={"/about/mission"}>Mission</Link>
    </div>
  );
};

export default AboutContent;
