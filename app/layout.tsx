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
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-900 text-slate-100 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
