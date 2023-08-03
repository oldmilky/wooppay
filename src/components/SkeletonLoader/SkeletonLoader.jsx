import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ className, ...rest }) => {
  return (
    <Skeleton
      {...rest}
      baseColor="#15141B"
      highlightColor="#201E2C"
      className={className}
    />
  );
};

export default SkeletonLoader;
