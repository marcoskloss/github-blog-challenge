import { PropsWithChildren } from 'react';
import Header from '../Header';

import styles from './styles.module.css';

type Props = PropsWithChildren;

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
