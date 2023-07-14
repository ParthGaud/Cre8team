import "./globals.css";
import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import SupabaseProvider from "@/app/providers/SupabaseProvider";
import {MyUserContextProvider} from "@/app/hooks/useUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoLabHub",
  description: "Find your team",
};

const font = Figtree({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <MyUserContextProvider>{children}</MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
