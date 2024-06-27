import Navbar from '@/components/navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='mx-auto min-h-screen w-full p-4 py-0 sm:container'>
        <Navbar />
        {children}
        <h1>Footer</h1>
      </main>
    </>
  );
};

export default Layout;
