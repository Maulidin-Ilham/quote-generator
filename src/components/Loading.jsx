/* eslint-disable react/prop-types */
function Loading({ loading }) {
  return (
    <>
      {loading && (
        <div
          role="status"
          className="space-y-4 animate-pulse w-full h-60 flex flex-row justify-center items-center"
        >
          <div className="w-full px-8">
            <div className="h-3 bg-[#e5c3ad] rounded-full  w-full mb-4 animate-pulse"></div>
            <div className="h-3 bg-[#e5c3ad] rounded-full  w-full mb-4 animate-pulse"></div>
            <div className="h-3 bg-[#e5c3ad] rounded-full  w-full mb-4 animate-pulse"></div>
            <div className="h-3 bg-[#e5c3ad] rounded-full  w-full mb-4 animate-pulse"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Loading;
