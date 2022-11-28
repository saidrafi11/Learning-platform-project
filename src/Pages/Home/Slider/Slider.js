import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/black-friday-sale-modern-banner-with-text-soace_1017-34852.jpg?w=1380&t=st=1669645466~exp=1669646066~hmac=8650e472a8d62c7d6f219d38cf483752cb385e3e3b2b9a076e18033425a52ac8" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/neon-style-black-friday-sale-banner-design_1017-34726.jpg?w=900&t=st=1669645527~exp=1669646127~hmac=78bd99bad363ce3b512ba460fa312430e289374e06dbaf9baf959e7be9d79970" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-with-abstract-dots_1361-2915.jpg?w=900&t=st=1669645570~exp=1669646170~hmac=701a0d0fc29044f0f1c2db75b3b59ad1a02ac1e67f338d8d29f47747ed06a473" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-psd/social-media-banner-special-offer-super-sale-template-up-50_220664-2996.jpg?w=1380&t=st=1669645937~exp=1669646537~hmac=0afb05cee61cea6e9066b558fb144627cb6446c57fe020316a01979df3e3aa0d" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;