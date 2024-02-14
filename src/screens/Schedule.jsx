import Header from '../components/Header';
import class_schedule from '../assets/class_schedule.png'

import './styles/Schedule.scss';

export default function Schedule() {
  return (
    <div className="schedule">
      <Header text={'Schedule'} />
      <main>
        <img src={class_schedule} alt="class schedule" />
      </main>
    </div>
  );
}
