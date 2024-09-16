export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-light-orange-50 h-full relative z-10  border-2 border-black overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}
