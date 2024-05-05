'use client';

import { useEffect } from 'react';
import styles from './TextBlock.module.scss';

type Props = {
  title: string;
  text: string;
  type?: 'list' | 'p';
};

export const TextBlock = ({ title, text, type = 'p' }: Props) => {
  useEffect(() => {}, []);

  const paragraphs = text.split('\n');

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      {type == 'p' && paragraphs.map((paragraph) => <p>{paragraph}</p>)}
      {type == 'list' && (
        <ul>
          {paragraphs.map((paragraph) => (
            <li>{paragraph}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
