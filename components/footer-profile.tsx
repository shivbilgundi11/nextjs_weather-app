import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function FooterProfile() {
  return (
    <Avatar className='flex items-center justify-center'>
      <AvatarImage
        src={'/assets/shivbilgundi.jpg'}
        alt='mypic'
        className='h-7 w-7 rounded-full'
      />
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  );
}
