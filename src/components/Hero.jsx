import * as React from "react";
const Hero = () => {
  return (
    <div className="bg-red-300 flex flex-col items-center pb-10">
      <div className="self-stretch w-full mt-1 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
            <div className="  bg-pink-400 flex flex-col items-stretch w-full my-auto px-4 py-12 max-md:max-w-full max-md:mt-10">
              <div className="justify-center  text-white text-6xl font-extrabold leading-[70px] mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
                Where Comfort <br />
                Meets <br />
                Convenience.
              </div>
              <div className="justify-center text-white text-center text-xl mt-8 mb-32 max-md:max-w-full max-md:mb-10">
                Live close to your college or workplace.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch  bg-yellow-200 w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="images/hero.jpg"
              alt="hero"
              className="aspect-[0.75]  rounded- object-contain object-center  w-full overflow-hidden grow max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:mt-10">
              <div className="flex-col justify-center text-white text-2xl font-bold relative w-full overflow-hidden aspect-[2.80327868852459] pl-4 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eeacba27e3186c1a3afa1cbcba50e9396379595f9391de11f47bbdffdf61aab?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                Modern Student <br />
                Housing
              </div>
              <div className="flex-col justify-center text-white text-2xl font-bold relative w-full overflow-hidden aspect-[2.80327868852459] mt-24 pl-4 pr-16 pt-5 pb-14 items-start max-md:mt-10 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8724c60f3e96aad282b4df579652f5aaec1e97bee0635b2a5adbf2c0baaaf8?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                Co-living for <br />
                Professionals
              </div>
              <div className="flex-col justify-center text-white text-2xl font-bold relative w-full overflow-hidden aspect-[2.80327868852459] mt-24 pl-4 pr-16 pt-5 pb-12 items-start max-md:mt-10 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/999305925044d1fc333464ec0a242b6215e725a3a2c52ba174be4f90fcdf5d77?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                Managed
                <br />
                Apartments
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[1236px] justify-between gap-5 mt-14 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="flex items-stretch gap-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23354ae21f08aa48a462200fee468c7081a3755762a8157e3f82ff91638bfa7b?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&"
            className="aspect-[1.17] object-contain object-center w-[77px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="justify-center text-white text-center text-3xl w-[317px] mt-6 self-start">
            24+ Cities
          </div>
        </div>
        <div className="flex items-stretch gap-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f40b6761539c3343823d6e2f3a2a09dc2b69c2c725a1472a4b35c8e278e703cd?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&"
            className="aspect-[1.48] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="justify-center text-white text-center text-3xl grow whitespace-nowrap mt-5 self-start">
            450+ Residencies
          </div>
        </div>
        <div className="flex items-stretch gap-1 mt-1">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92b17c28e17f04f6d7e89ea1ca99826523b66a0b37aea68b52e2830460c18772?apiKey=c316669a47ea4ea5bc31bbe9adfe023a&"
            className="aspect-[1.23] object-contain object-center w-[81px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="justify-center text-white text-center text-3xl self-center w-[317px] my-auto">
            70,000+ Beds
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
