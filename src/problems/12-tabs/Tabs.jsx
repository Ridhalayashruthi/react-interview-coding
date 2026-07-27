import { useState } from 'react';
import './Tabs.css';

const tabs = [
  {
    id: 1,
    title: 'HTML',
    content: 'HTML is used to structure web pages.',
  },
  {
    id: 2,
    title: 'CSS',
    content: 'CSS is used to style web pages.',
  },
  {
    id: 3,
    title: 'React',
    content: 'React is a JavaScript library for building user interfaces.',
  },
];

export default function Tabs() {
  const [active, setActive] = useState(1);
  const handleTabActivity = (id) => {
    if (active !== id) {
      setActive(id);
    }
  };
  const selectedTab = tabs.find((tab) => tab.id === active);
  return (
    <div className='container'>
      <div className='tabs'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={active === tab.id ? 'active' : ''}
            onClick={() => handleTabActivity(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className='content'>
        {selectedTab && <p>{selectedTab.content}</p>}
      </div>
    </div>
  );
}
