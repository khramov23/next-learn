import {ReactNode} from "react";
import '@/app/ui/global.css'
import {inter} from "@/app/ui/fonts";


interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
