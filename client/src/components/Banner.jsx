import React, { useState, useEffect } from 'react';

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    'Master of Library and Information Science - Web Developer - Institutional Repository Management ',
    // 'Web Developer  ',
    // 'Institutional Repo Management  ',
  ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // if (isDeleting) {
    //   setDelta((prevDelta) => prevDelta / 2);
    // }

    // if (!isDeleting && updatedText === fullText) {
    //   setIsDeleting(true);
    //   setDelta(period);
    // } else if (isDeleting && updatedText === '') {
    //   setIsDeleting(false);
    //   setLoopNum(loopNum + 1);
    //   setDelta(500);
    // }
  };

  return (
    <section className='banner' id='home'>
      <div className='max-w-[1640px] mx-auto'>
        <div className='min-h-[140px] md:min-h-20 lg:min-h-10 relative'>
          <div>
            <h2 className='text-2xl font-bold'>
              <span className='wrap'>{text}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
