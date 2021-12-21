import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Header from '../components/Base/Header';
import { BarChart2, Clock, Settings } from 'react-feather';

import Footer from '../components/Footer/Footer';
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Header />
      <Main />
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-black col-start-1 col-end-4 ">04</div>
        <div className="border border-black   ...">01</div>
        <div className="border border-black   ...">02</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black   ...">01</div>
        <div className="border border-black   ...">02</div>
        <div className="border border-black  ...">03</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
