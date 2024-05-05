import React from 'react';
import s from './select.module.scss';
import classNames from 'classnames';

type Props = {
  color: string;
  options: {
    value: string;
    name: string;
  }[];
  value: string;
  onChange: any;
};
export const Select = ({ color, options, onChange, value }: Props) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{ backgroundColor: color }}
      className=" p-[10px] w-11/12 max-[470px]:w-full pl-[12px] border-[1px]
            focus:border-black-200
            h-[44px]
            text-[12px] font-medium
             border-backBazaLogo hover:border-black-200 active:border-black-200
             uppercase
             "
    >
      {options.map((o) => (
        <option
          className={classNames('uppercase flex m-[14px] h-[40px] p-[14px] font-medium text-[12px]', s.options)}
          value={o.value}
        >
          {o.name}
        </option>
      ))}
    </select>
  );
};
