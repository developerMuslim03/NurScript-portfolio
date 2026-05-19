import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/shared/background-blobs";

export const metadata: Metadata = {
  title: "NurScript | Team",
  description: "Senior Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>

          <BackgroundBlobs />
        </ThemeProvider>
      </body>
    </html>
  );
}