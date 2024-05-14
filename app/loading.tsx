import { twMerge } from 'tailwind-merge';
import Logo from '@shared/assets/icons/bazaMainLogo.svg';

export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        flex: '1 1 100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className={twMerge('bg-black')}
    >
      <Logo className="animate-pulse animate-ease-in duration-[2000]" />
    </div>
  );
}
