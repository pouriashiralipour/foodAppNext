import Banner from '../modules/Banner';
import Attributes from '../modules/Attributes';
import styles from './HomePage.module.css';
import Definition from '../modules/Definition';
import Companies from '../modules/Companies';
import Instruction from '../modules/Instruction';
import Guide from '../modules/Guide';
import Restrictions from '../modules/Restrictions';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}
