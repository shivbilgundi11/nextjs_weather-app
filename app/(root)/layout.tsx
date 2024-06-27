interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='mx-auto min-h-screen w-full p-4 py-0 sm:container'>
        <h1>Nav Menu</h1>
        {children}
        <h1>Footer</h1>
      </main>
    </>
  );
};

export default Layout;
