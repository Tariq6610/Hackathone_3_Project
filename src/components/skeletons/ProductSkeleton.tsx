const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="md:w-[270px] w-[198px] min-h-[350px] group shadow-lg animate-pulse">
      {/* Image Skeleton */}
      <div className="md:w-[270px] w-[198px] bg-gray-200 overflow-hidden aspect-square mb-[16px] relative h-[250px] flex justify-center items-center rounded">
        <div className="bg-gray-300 w-full h-full"></div>
        {/* Percent Off Badge Placeholder */}
        <div className="w-[55px] h-[26px] bg-gray-300 absolute top-[12px] left-[12px] rounded"></div>
        {/* Wishlist Icon Placeholder */}
        <div className="absolute top-[12px] right-[12px] w-[34px] h-[76px] flex flex-col justify-center items-center">
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </div>
        {/* Add to Cart Button Placeholder */}
        <div className="absolute bottom-0 w-full flex justify-center items-center">
          <div className="w-7 h-7 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col gap-[8px]">
        {/* Title Placeholder */}
        <div className="bg-gray-300 h-[24px] rounded w-3/4"></div>
        <div className="bg-gray-300 h-[24px] rounded w-1/2"></div>

        {/* Rating Skeleton */}
        <div className="flex gap-[8px] items-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-gray-300 w-[20px] h-[20px] rounded"
              ></div>
            ))}
          <div className="bg-gray-300 h-[20px] w-[30px] rounded"></div>
        </div>

        {/* Price Section Skeleton */}
        <div className="flex gap-[12px] items-center">
          <div className="bg-gray-300 h-[28px] w-[50px] rounded"></div>
          <div className="bg-gray-300 h-[20px] w-[60px] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
