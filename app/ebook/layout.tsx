import EbookHeader from "./components/EbookHeader";

export default function EbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Simple layout that renders children directly
  // This approach removes the Header by not including it while preserving
  // all other elements from the root layout (ThemeProvider, Footer, etc.)
  return (
    <>
      <EbookHeader />
      {children}
    </>
  );
} 