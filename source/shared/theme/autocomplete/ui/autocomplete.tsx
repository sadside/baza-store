import { Input } from '@shared/theme/input/ui/input';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from '@/components/loader/Loader';
import { useGate, useUnit } from 'effector-react';
import { ReactNode, useRef } from 'react';
import { CircleAlert, CrossIcon, HomeIcon } from 'lucide-react';
import { AutocompleteModel } from '@shared/theme/autocomplete/model/autocomplete-model';

interface AutocompleteProps {
  className?: string;
  placeholder?: string;
  model: AutocompleteModel;
}

export const Autocomplete = ({ placeholder, className, model }: AutocompleteProps) => {
  const variants = {
    visible: {
      scale: 1,
      opacity: 1,
    },
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
  };

  const ref = useRef(null);

  const { $status, $isVisible, $suggestions, $inputValue, inputChanged, itemSelected, outsideClicked, gate } = model;

  const effectStatus = useUnit($status);
  const isVisible = useUnit($isVisible);
  const suggestions = useUnit($suggestions);
  const inputValue = useUnit($inputValue);

  const icon: Record<'initial' | 'pending' | 'done' | 'fail', ReactNode> = {
    initial: <HomeIcon className="h-[18px] w-[27px]" color="#7e7e7f" />,
    pending: <Loader height={18} width={27} />,
    done: <HomeIcon className="h-[18px] w-[27px]" />,
    fail: <CircleAlert className="h-[18px] w-[27px]" />,
  };

  useGate(gate);

  return (
    <div className={twMerge('relative w-[425px]', className)} ref={ref}>
      <Input
        placeholder={placeholder}
        className="pr-[43px] w-full"
        value={inputValue}
        onChange={(event) => inputChanged(event.target.value)}
      />
      <div className="absolute top-[13px] right-3">{icon[effectStatus]}</div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ ease: 'easeOut', duration: 0.3, type: 'spring' }}
            variants={variants}
            className="bg-white w-full absolute top-[60px] border border-black-50 z-10"
          >
            {suggestions?.map((suggestion) => (
              <div
                key={suggestion}
                className="text-[12px] min-h-11 py-3 flex items-center ext-wrap px-3 hover:bg-black-5 bg-white cursor-pointer transition-all duration-500 hover:font-semibold overflow-x-hidden"
                onClick={() => itemSelected(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
