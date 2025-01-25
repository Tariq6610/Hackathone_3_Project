const SkeletonDetailProductPage = () => {
  return (
    <div className="min-h-[530px] flex flex-col items-center xl:flex xl:flex-row gap-[14px]">
      <div className="flex flex-col-reverse items-center xl:flex xl:flex-row gap-[14px]">
        <div className="flex xl:flex-col gap-[10px]">
          <div className="md:w-[152px] md:h-[167px] w-[120px] h-[140px] rounded-[20px] bg-gray-300 animate-pulse"></div>
          <div className="md:w-[152px] md:h-[167px] w-[120px] h-[140px] rounded-[20px] bg-gray-300 animate-pulse"></div>
          <div className="md:w-[152px] md:h-[167px] md:block hidden rounded-[20px] bg-gray-300 animate-pulse"></div>
        </div>
        <div className="md:w-[444px] md:h-[524px] w-full h-[350px] rounded-[20px] bg-gray-300 animate-pulse"></div>
      </div>

      <div className="flex-1 h-full">
        <div className="max-w-[90%]">
          <div className="h-[30px] w-[200px] bg-gray-300 animate-pulse mb-[10px]"></div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="w-[140px] h-[20px] flex gap-[8px]">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-[50px] h-[10px] bg-gray-300 animate-pulse"></div>
          </div>

          <div className="flex gap-[12px] items-center">
            <div className="w-[60px] h-[24px] bg-gray-300 animate-pulse"></div>
            <div className="w-[60px] h-[24px] bg-gray-300 animate-pulse"></div>
          </div>

          <div className="h-[20px] w-full bg-gray-300 animate-pulse mb-[10px]"></div>

          <p className="h-[16px] w-[150px] bg-gray-300 animate-pulse mb-[10px]"></p>

          <div className="flex gap-[16px] mb-[20px]">
            <div className="w-[32px] h-[32px] bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-[32px] h-[32px] bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-[32px] h-[32px] bg-gray-300 rounded-full animate-pulse"></div>
          </div>

          <hr className="my-[14px]" />

          <p className="h-[16px] w-[150px] bg-gray-300 animate-pulse mb-[10px]"></p>

          <div className="flex gap-[5px] md:gap-[12px] mb-[20px]">
            <div className="w-[40px] h-[40px] bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-[40px] h-[40px] bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-[40px] h-[40px] bg-gray-300 rounded-full animate-pulse"></div>
          </div>

          <hr className="my-[14px]" />

          <div className="flex gap-[16px] mb-[20px]">
            <div className="w-[170px] h-[52px] bg-gray-300 rounded-[62px] animate-pulse"></div>
            <div className="w-[150px] h-[52px] bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetailProductPage;
