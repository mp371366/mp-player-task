import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCovers, selectCover } from '../Player/playerSlice';
import { default as SlickSlider } from 'react-slick';
import Logo from '../Logo/Logo';
import _ from 'lodash';
import './Slider.css';

const Slider: React.FunctionComponent = () => {
  const covers = useSelector(selectCovers);
  const cover = useSelector(selectCover);
  const ref = useRef<SlickSlider>(null);

  useEffect(() => {
    if (cover === undefined) {
      return;
    }

    const idx = _.findIndex(covers, ['id', cover.id]);

    if (idx >= 0) {
      ref.current?.slickGoTo(idx);
    }
  }, [covers, cover]);

  if (cover === undefined) {
    return null;
  }

  const settings = {
    accessibility: false,
    centerMode: true,
    centerPadding: '0px',
    speed: 500,
    buttons: false,
    arrows: false,
    draggable: false,
    slidesToShow: 3,
  };

  return (
    <div className="Slider">
      <SlickSlider ref={ref} {...settings}>
        {covers.map(({ id, image, author, title }) => (
          <div key={id} className="Slider-div">
            <img
              className="Slider-image"
              src={process.env.PUBLIC_URL + image}
              alt={`${author} - ${title}`}
            />
            {id === cover.id && <Logo />}
          </div>
        ))}
      </SlickSlider>
      <h2 className="font-bold">
        {cover.title}
      </h2>
      <p className="font-uppercase">
        {cover.author}
      </p>
    </div>
  );
}

export default Slider;
