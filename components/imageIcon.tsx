import Image from 'next/image';

export default function IconComp({ path }: { path: string }) {
  return (
    <>
      <Image
        src={path}
        alt='weather-icon'
        width={24}
        height={24}
        className='block object-cover object-center'
      />
    </>
  );
}
