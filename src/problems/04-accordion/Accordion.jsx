import React from 'react';
import './Accordion.css';

const faqs = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    question: 'What is useState?',
    answer: 'It is a Hook used to manage state.',
  },
  {
    id: 3,
    question: 'What is JSX?',
    answer: 'JSX allows you to write HTML inside JavaScript.',
  },
];

export default function Accordion() {
  const [openId, setOpenId] = React.useState(null);
  const handleShow = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <div className='container'>
      {faqs.map((faq) => (
        <div className='accordion-item' key={faq.id}>
          <h3>
            <button onClick={() => handleShow(faq.id)}>{faq.question}</button>
          </h3>

          {openId === faq.id && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
