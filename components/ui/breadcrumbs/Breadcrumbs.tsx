import styles from "./breadcrumbs.module.scss";

type Props = {
  path: string;
};

export interface IBreadcrunmb {
  label: string;
  path: string;
}

const breadcrumbs = ["Женщины", "Верхняя одежда", "Тренч"];

export const Breadcrumbs = ({ path }: Props) => {
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => {
        if (index !== breadcrumbs.length - 1) {
          return (
            <div style={{ display: "flex" }}>
              <div>{`${breadcrumb}`}</div>
              <div style={{ marginLeft: 10, marginRight: 10 }}>|</div>
            </div>
          );
        } else {
          return (
            <div style={{ textDecoration: "underline" }}>{`${breadcrumb}`}</div>
          );
        }
      })}
    </div>
  );
};
