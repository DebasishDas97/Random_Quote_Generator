import { quotesData } from "../components/Quotes";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/bookmarksSlice";
import { useState } from "react";

interface RootState {
  bookmarks: quotesData[];
}

const Bookmark = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state: RootState) => state.bookmarks);

  const handleRemove = (id: any) => {
    dispatch(remove(id));
  };

  if (quotes.length === 0) {
    return (
      <h1 className="text-[#D05252] text-center text-3xl">
        There is no quotes in your Fav list.∅
      </h1>
    );
  }

  return (
    <div className="pb-10">
      {quotes.map((quote: quotesData) => (
        <section
          key={quote._id}
          className="bg-[#D05252] mt-10  pt-7 md:w-[750px] w-[350px] pb-7 mx-auto relative rounded-xl min-h-[300px] h-auto text-white"
        >
          <div className="flex mx-auto items-center justify-center flex-col px-7">
            <h1 className="md:text-[1.9rem] text-[1.5rem] text-left min-h-[120px] h-auto">
              {quote.content}
            </h1>
            <div className="w-full flex mt-20 justify-around items-center">
              <div></div>
              <p className="text-[22px] font-[700] leading-[38px] tracking-[1px]">
                -{quote.author}
              </p>
              <MdDeleteForever
                onClick={() => handleRemove(quote._id)}
                className="text-2xl cursor-pointer active:animate-bounce"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Bookmark;
