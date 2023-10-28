/* eslint-disable react/no-unescaped-entities */

import useFetchQuote from "./useFetchQuote";

import Button from "./Button";
import Border from "./Border";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Content() {
  const { quote, handleClick, loading } = useFetchQuote();

  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
      <div
        key={quote?.text}
        className="bg-[#fae8d9] p-6 w-[330px] md:w-[500px] flex flex-col items-center rounded-md shadow-lg"
      >
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="h-16 w-16 mt-5 text-[#804b28]"
            />
            <h1 className="mt-5 text-center text-2xl font-semibold">
              "{quote?.text}"
            </h1>
            <Border />
            <h2 className="mt-6 text-lg font-medium">
              -{" "}
              {quote?.author.substring(0, quote.author.indexOf(",")) ||
                "Unknown"}{" "}
            </h2>

            <div className="flex flex-row justify-center  w-full h-full items-end mt-5 mb-5">
              <Button handleClick={handleClick} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
