"use client"; //userPathname hook generally server e run hoy, tai hook client e declare kore error ashbe.
//"use client" use kore error ke prevent kora hoyse.
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname(); // Active route er jonno usePathname hook use kora hoy
  const router = useRouter(); //onno page a navigate korar jonno useRouter hook use kora hoy

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
  ];
  const handleNavigateLogin = () => {
    router.push("/login");
  };
  return (
    <nav className="bg-slate-600 text-white py-5 px-5 flex justify-between items-center">
      <h2 className="text-3xl font-medium">Next Core</h2>
      <ul className="flex gap-3">
        {links?.map((link, idx) => (
          <li key={idx}>
            <Link
              className={pathName === link.path && "text-red-600 font-medium"}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          {/* navigate method: 1 */}
          {/* <Link href={"/about"}>
            <button className="bg-white text-black p-1 px-3 rounded-md">
              Login
            </button>
          </Link> */}

          {/* navigate method: 2 */}
          <button
            className="bg-white text-black p-1 px-3 rounded-md"
            onClick={handleNavigateLogin}
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
