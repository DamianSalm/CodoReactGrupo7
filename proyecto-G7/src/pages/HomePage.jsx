//import { useState, useEffect } from "react";
import Banner from '../components/bannerComponent/Banner';
import Collection from '../components/CollectionComponent/Collections';
import Slider from '../components/CollectionComponent/Slider';

const HomePage = () => {

  return(

    <>
      <Banner/>
      <Collection/>
      <Slider/>
    </>
  )
};

export default HomePage;