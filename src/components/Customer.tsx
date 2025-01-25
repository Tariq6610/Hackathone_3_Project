
const Customer = () => {
  return (
    <div className="max-w-[1440px] 2xl:px-[100px] mx-auto xl:px-[50px] px-[16px] mt-[80px] mb-[80px]">
      <div className="flex justify-between items-center mb-[40px]">
        <h1 className="font-bold md:text-[48px] text-[28px] leading-8 tracking-tight">
          OUR HAPPY CUSTOMERS
        </h1>
        <div>
          <img src="home/nextAndBack.png" alt="" />
        </div>
      </div>
      <div className="flex gap-[20px] overflow-x-scroll overflow-y-hidden">
        <div className="w-[400px] flex-shrink-0 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img className="object-contain" src="/Frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Sarah M.</h1>
            <img className="object-contain" src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;I&apos;m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I&apos;ve bought has exceeded my expectations.&quot;
            </p>
          </div>
        </div>
        <div className="w-[400px] flex-shrink-0 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img className="object-contain" src="/Frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Alex K.</h1>
            <img className="object-contain" src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;
            </p>
          </div>
        </div>
        <div className="w-[400px] flex-shrink-0 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img className="object-contain" src="/Frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>James L.</h1>
            <img className="object-contain" src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer