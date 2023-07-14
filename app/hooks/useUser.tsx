// 'use client'

// import { UserDetails } from "@/types";
// import { User, useSessionContext, useUser } from "@supabase/auth-helpers-react";
// import { useContext, useEffect, useState } from "react";
// import { createContext } from "vm";

// type UserContextType = {
//     accessToken: string | null;
//     user: User | null;
//     userDetails : UserDetails | null;
//     isLoading : boolean;
// }

// export const UserContext = createContext<UserContextType | undefined>(
//     undefined
// )

// export interface Props{
//     [propName: string] : any
// }

// export const MyUserContextProvider = (props: Props) => {
//     const {isLoading, session, supabaseClient} = useSessionContext()
//     const Supauser = useUser()

//     const accessToken = session?.access_token ?? null
//     const [isLoadingData, setIsLoadingData] = useState(false)
//     const [userDetails, setUserDetails] = useState(null)

//     const getUserDetails = async () => {
//        return supabaseClient.from('users').select('*').single()

//     }

//     useEffect(() => {
//         if(Supauser && !isLoading && !userDetails){
//             setIsLoadingData(true)
//             getUserDetails().then(res => {
//                 console.log(res)
//             }).catch((error) => {
//                 console.log(error)
//             })

//             setIsLoadingData(false)
//         }
//         else if(!Supauser && !isLoading && !userDetails){
//             setUserDetails(null)
//         }
//     }, [Supauser, isLoading])

//     const value : UserContextType = {
//         accessToken : accessToken,
//         user: Supauser,
//         userDetails: userDetails,
//         isLoading: isLoading || isLoadingData
//     }

//     return <UserContext.Provider value={value} {...props} />;
// }

"use client";

import { useState, useEffect, createContext, useContext, use } from "react";
import {
  useUser as useSupaUser,
  useSessionContext,
  User,
} from "@supabase/auth-helpers-react";
import { UserDetails } from "@/types";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

// provder for user context
export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const getUserDetails = () => {
    return supabase.from("user").select("*").single();
  };

  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsLoadingData(true);
      getUserDetails().then((res) => {
        if (res.statusText === "fulfilled") {
          console.log(res.data);
        }
      });
      setIsLoadingData(false);
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
    }
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
  };

  return <UserContext.Provider value={value} {...props} />;
};

// hook acting as UserContext consumer
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    return new Error("useUser must be used with MyUserContextProvider");
  }

  return context;
};
