import Image from 'next/image';

export default function WeatherIcon({ id }: { id: string }) {
  const imageUrl = `https://openweathermap.org/img/wn/${id}@2x.png`;
  return (
    <>
      <Image
        src={imageUrl}
        alt='weather-icon'
        width={48}
        height={48}
        className='block object-cover object-center'
      />
    </>
  );
}
