import WorkList from './WorkList';

import Workcover from './img/work-cover.png';
// import Web2 from './img/Web2.png';
// import Web3 from './img/Web3.png';
const Work_Data = [
  {
    category: 'frontend',
    id: 'w1',
    title: 'OFA Hinomaru Taxi',
    image:'Web1.png',
    description:
      'We operate with the concept of safety, security and community-based. We also carry out staff training aimed at kindness and politeness. ',
  },
  {
    category: 'frontend',
    id: 'w2',
    title: 'Miyadora Gassyuku Plan',
    image: 'Web2.png',
    description:
      'A training camp website',
  },
  {
    category: 'frontend',
    id: 'w3',
    title: 'Miyadora Gassyuku Plan',
    image:'Web3.png',
    description:
      'We have prepared a slightly luxurious license acquisition plan that will satisfy our customers.We are affiliated with the finest resort accommodations where you can fully enjoy the nature of Miyazaki, and you can obtain a drivers license as if you were traveling or sightseeing.',
  },
];

function Works() {
  return (
<section >
  <img src={Workcover} style={{ width: '-webkit-fill-available' }} alt="Cover"/>
  <div className="container">       
    <WorkList  workslists={Work_Data} />
  </div>
</section>

  );
}

export default Works;