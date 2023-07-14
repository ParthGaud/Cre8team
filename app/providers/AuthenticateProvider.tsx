// import { useRouter } from "next/navigation";
// import { auth } from "@/firebase";
// import React from "react";

// interface Props {
//   children: React.ReactNode;
// }

// const AuthenticateProvider: React.FC<Props> = ({ children }) => {
//   const router = useRouter();
//   const user = auth.currentUser;

//   if (user) {
//     return router.push("/dashboard");
//   }
//   return { children };
// };
// export default AuthenticateProvider;
