import classNames from 'classnames/bind';
import styles from '@shared/ui/button/ui/variants/styles/count.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import { Loader } from '@/components/loader/Loader';
import { BUTTON_VARIANTS } from '@/source/shared/ui/button/ui/button-wrapper';

export interface countProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
  value?: number;
  plusAction?: () => void;
  minusAction?: () => void;
  minusNotAllowed?: boolean;
  plusNotAllowed?: boolean;
}

const cx = classNames.bind(styles);

export const Count = ({
  loading,
  value,
  plusAction,
  minusAction,
  minusNotAllowed,
  plusNotAllowed,
  ...props
}: countProps) => {
  const [focused, setIsFocused] = useState(false);

  const buttonCls = cx({
    wrapper: true,
    focused,
  });

  const actionPlusCls = cx({
    action: true,
    plusNotAllowed,
    loading,
  });

  const actionMinusCls = cx({
    action: true,
    minusNotAllowed,
    loading,
  });

  const handlePlusCLick = () => {
    if (!plusNotAllowed && !loading)
      if (plusAction) {
        plusAction();
      }
  };

  const handleMinusCLick = () => {
    if (!minusNotAllowed && !loading)
      if (minusAction) {
        minusAction();
      }
  };

  return (
    //@ts-ignore
    <div className={buttonCls} {...props} tabIndex={0}>
      {/*{count}*/}
      <div className={styles.actions}>
        <div className={actionMinusCls} onClick={minusAction} tabIndex={0}>
          -
        </div>
        <div className={styles.value}>
          {loading ? <Loader variant={BUTTON_VARIANTS.SECONDARY} height={30} width={30} /> : value}
        </div>
        <div className={actionPlusCls} onClick={handlePlusCLick} tabIndex={0}>
          +
        </div>
      </div>
    </div>
  );
};

// <Loader height={44} width={44} variant={BUTTON_VARIANTS.PRIMARY} />
