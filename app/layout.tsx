import React from "react";

export const metadata = {
  title: "Agentic RAG Assistant",
  description: "Self-correcting document intelligence assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
