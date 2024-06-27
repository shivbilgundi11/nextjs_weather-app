import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function FooterProfile() {
  return (
    <Avatar className='flex items-center justify-center'>
      <AvatarImage
        src={'https://avatars.githubusercontent.com/u/101513013?v=4'}
        alt='mypic'
        className='h-7 w-7'
      />
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  );
}
