import styles from './breadcrumbs.module.scss';
import Link from 'next/link';

interface Path {
  name: string;
  slug: string;
}

interface BreadcrumbsProps {
  path?: Path[];
}

export const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  return (
    <div className={styles.wrapper}>
      {path?.map((item, index) => {
        return (
          <Link className={`${index === path.length - 1 ? 'text-black' : ''}`} href={item.slug}>
            {item.name} {index !== path.length - 1 ? ' /' : null}
          </Link>
        );
      })}
    </div>
  );
};
