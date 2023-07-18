import { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type StatsProps = {
  text: string;
  icon: string;
};

export function Stats({ text, icon }: StatsProps) {
  return (
    <div className={styles.profileStats}>
      <img src={icon} alt="whatever" />
      <span>{text}</span>
    </div>
  );
}

// eslint-disable-next-line react/require-default-props
type CardContainerProps = { grid?: boolean } & PropsWithChildren;

function CardContainer({ grid = false, children }: CardContainerProps) {
  return (
    <div className={`${styles.card} ${grid && styles.cols}`}>{children}</div>
  );
}

function CardHeader({ children }: PropsWithChildren) {
  return <header className={styles.userHeader}>{children}</header>;
}

function CardContent({ children }: PropsWithChildren) {
  return <div className={styles.content}>{children}</div>;
}

function CardFooter({ children }: PropsWithChildren) {
  return <footer>{children}</footer>;
}

// eslint-disable-next-line import/prefer-default-export
export const Card = {
  Container: CardContainer,
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
};
