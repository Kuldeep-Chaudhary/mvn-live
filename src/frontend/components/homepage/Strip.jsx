
import React, { useCallback, useState } from "react";
import { API_URL } from "../../../config/config";
import CustomModal from "../../../common/Modal";
import { useLocation } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Strip = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { pathname } = useLocation();

  const isHideModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  const swiperSettings = {
    modules: [Pagination, Autoplay],
    pagination: { clickable: true },
    autoplay: { delay: 3000 },
    loop: true,
  };

  const stripImages = [
    {
      desktop: `/strip/strip-desktop-1.jpg`,
      mobile: `/strip/strip-mobile-1.jpg`,
    },
    {
      desktop: `/strip/strip-desktop-2.jpg`,
      mobile: `/strip/strip-mobile-2.jpg`,
    },
  ];

  return (
    <>
      <section
        className={`section strip_section pt_sm_0 ${pathname.includes('mvn-mall') ? 'pt-4' : ''}`}
        onClick={() => setIsShowModal(true)}
        style={{ cursor: "pointer" }}
      >
        <Swiper {...swiperSettings}>
          {stripImages.map((img, index) => (
            <SwiperSlide key={index}>
              <picture>
                <source media="(min-width: 768px)" srcSet={img.desktop} />
                <img
                  src={img.mobile}
                  alt={`mvn strip image ${index + 1}`}
                  className="img-fluid w-100"
                  loading="lazy"
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <CustomModal
        type="enquire"
        hide={isHideModal}
        show={isShowModal}
        projectName="MVN Mall Dwarka Expressway"
      />
    </>
  );
};

export default Strip;
