import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  'use client'
  const user = auth.currentUser
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user);
  //     return NextResponse.redirect(new URL("/dashboard", request.url));
  //   } else {
  //     return NextResponse.next()
  //   }
  // });
  if(user){
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.redirect(new URL("/dashboard", request.url));
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup"],
};
