import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Base/Header';
import { BarChart2, Clock, Settings } from 'react-feather';
import Banner from '../components/Banner';

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <Header
        primaryItems={[
          {
            icon: <BarChart2 />,
            text: 'Analytics',
            to: { pathname: '/analytics' },
          },
          {
            icon: <Clock />,
            text: 'History',
            to: { pathname: '/history' },
          },
        ]}
      />
    </div>
  );
};

export default Home;
