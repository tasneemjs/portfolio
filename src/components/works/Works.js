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
    weblink:'http://ofa-support.com/taxi_department/',
    description:
      'Designed and developed the website for Hinomaru Taxi. They operates with the concept of safety, security and community-based. They also carry out staff training aimed at kindness and politeness.  ',
  },
  {
    category: 'frontend',
    id: 'w2',
    title: 'Miyadora Gassyuku Plan',
    image: 'Web2.png',
    weblink:'http://www.miyadora.jp/gasshuku/gasshuku_plan.html',
    description:
      'Designed and developed the website for Miyadora Gassyuku. They are a driving training provider for the students who wants to get a job outiside of the prefecture.',
  },
  {
    category: 'frontend',
    id: 'w3',
    title: 'Miyadora Luxury Plan',
    image:'Web3.png',
    weblink:'http://www.miyadora.jp/luxury/luxury_plan.html',
    description:
      'Designed and developed the website for Miyadora Luxury. They are affiliated with the finest resort accommodations where you can fully enjoy the nature of Miyazaki, and you can obtain a drivers license as if you were traveling or sightseeing.',
  },
  {
    category: 'frontend',
    id: 'w4',
    title: 'OFA Support BASEBALL ACADEMY Miyazaki Supported by Yomiuri GIANTS',
    image:'Web4.png',
    weblink:'https://ofa-baseball-miyazaki.com/',
    description:
      'OFA Support BASEBALL ACADEMY Miyazaki Supported by Yomiuri GIANTS in collaboration with the Yomiuri Giants Academy, we aim to foster the healthy development of children through baseball and expand the baseball world. The target is from infants to elementary school students, and we have prepared a wide range of contents from practice that even beginners can enjoy without difficulty to technical guidance aiming at a higher level.',
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