import { SelectUnit } from '@/components/select-unit';

export default function Page() {
  return (
    <>
      <div className='w-full h-auto sm:container mx-auto mt-3 flex items-center justify-end'>
        <SelectUnit />
      </div>
      <div className='mx-auto grid min-h-[80vh] w-full grid-cols-1 gap-3 bg-grayShade p-3 sm:container dark:bg-inherit sm:p-4 md:grid-cols-5 md:gap-5 md:p-5 xl:grid-cols-6'>
        {/* -----Left-Column----- */}
        <div className='h-full w-full rounded-xl bg-white dark:bg-background dark:bg-darkVoilet md:col-span-3 xl:col-span-4'>
          <div className='w-full h-[350px] temp-bg border-2 rounded-2xl text-black flex items-center justify-center'>
            <h1 className='text-2xl font-semibold'>26 C</h1>
          </div>
        </div>

        {/* -----Right-Column----- */}
        <div className='h-[400px] w-full rounded-xl bg-white dark:bg-darkVoilet md:col-span-2 xl:col-span-2'></div>
      </div>
    </>
  );
}
