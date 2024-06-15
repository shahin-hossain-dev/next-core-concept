import { NextResponse } from "next/server";

// redirect method--------------------->
/* export function middleware(request) {
    //redirect method holo config er moddhe matcher url e jodi client hit kore tahole take redirect kore /about page e niye jabe
  return NextResponse.redirect(new URL("/about", request.url));
} */

//rewrite method------------------->
/* export function middleware(request) {
//rewrite method দিয়ে যদি ক্লাইন্ট config er moddhe matcher: '/user-profile' এ হিট করে তাহলে তাকে ঐ রাউটে রেখে, '/about/history' রাউটের data গুলো দেখাবে।
  return NextResponse.rewrite(new URL("/about/history", request.url));
} */

//=> matcher use না করে এইভাবে condition দেয়া যায়।  ----------------->
/* export function middleware(request) {
  //   console.log(request.url.split("/")[3] === "user-profile");
  if (request.nextUrl.pathname.startsWith("/user-profile"))
    return NextResponse.rewrite(new URL("/about/history", request.url));
} */
// export function middleware(request) {
//   return NextResponse.rewrite(new URL("/about/history", request.url));
// }

/* export const config = {
  matcher: ["/user-profile", "/about"], // এই ভাবে multiple matcher দেয়া যায়।
}; */

/* export const config = {
  matcher: "/user-profile",
};
 */

export function middleware(request) {
  //user check
  /* const user = false;
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  } */
  // cookie check

  const coo = "master-cookie"; //fake cookie

  const cookie = request.cookies.get("token"); //fake cookie

  if (!cookie || cookie.value !== coo) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/contact", "/dashboard"],
};
