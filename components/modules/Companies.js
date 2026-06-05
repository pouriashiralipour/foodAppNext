import styles from './Companies.module.css';

import SpaceX from '../icons/SpaceX';
import Tesla from '../icons/Tesla';
import Apple from '../icons/Apple';
import Binance from '../icons/Binance';

export default function Companies() {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}
