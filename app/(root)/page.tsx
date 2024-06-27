import { ThemeToggle } from '@/components/theme-toggler';

export default function Page() {
  return (
    <>
      <div className='flex items-center justify-center gap-4'>
        <h1>Hello World...!</h1>
        <ThemeToggle />
      </div>
    </>
  );
}
