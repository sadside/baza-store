import { Dialog, DialogContent, DialogHeader } from '@shared/ui/shadcn/ui/dialog';
import { useUnit } from 'effector-react';
import { $isVisible, contactsModalChanged } from '@widgets/contacts-modal/model/contact-modal';
import Logo from '@shared/assets/logo.svg';
import { Button } from '@shared/theme/button';
import Link from 'next/link';

export const ContactsModal = () => {
  const isVisible = useUnit($isVisible);

  return (
    <Dialog open={isVisible} onOpenChange={(value) => contactsModalChanged(value)}>
      <DialogContent className="max-w-[600px] flex flex-col items-center py-[80px] px-[40px]">
        <Logo />
        <p className="text-center text-black-400 text-[12px] mb-5 mt-10">
          Если у вас появились дополнительные вопросы, свяжитесь с нами удобным способом.
        </p>
        <div className="flex gap-5 justify-center items-center mb-10 flex-wrap">
          <a
            href="tel:89228865945"
            className="px-[30px] py-2.5 flex items-center justify-center bg-black-50 text-black-300 uppercase font-semibold text-[12px] text-nowrap"
          >
            +7 (922) 886-59-45
          </a>
          <a
            href="tel:89228865945"
            target="_blank"
            className="px-[30px] py-2.5 flex items-center justify-center bg-black-50 text-black-300 uppercase font-semibold text-[12px]"
          >
            TELEGRAM
          </a>
          <a
            href="mailto:info@thebaza.ru"
            className="px-[30px] py-2.5 flex items-center justify-center bg-black-50 text-black-300 uppercase font-semibold text-[12px]"
          >
            INFO@THEBAZA.RU
          </a>
        </div>
        <Link href="/" className="w-[300px]">
          <Button.Primary className="w-[300px]">В магазин</Button.Primary>
        </Link>
      </DialogContent>
    </Dialog>
  );
};
