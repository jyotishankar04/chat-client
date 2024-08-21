const LoadingComponent = () => {
  return (
    <div className="w-full h-full z-50 bg-base-200 flex justify-center items-center">
      <div className="bg-base-300 flex-col gap-2  w-80 h-40 flex justify-center items-center rounded-lg">
        <div className="loading  loading-infinity scale-150 loading-lg "></div>
        <div className="card-title">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingComponent;
