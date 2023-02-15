import { fetchTags } from "../store/tagsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import React, { useEffect } from "react";
import { fetchQuotes } from "../store/quotesSlice.jsx";

export interface TagData {
  dateAdded: string;
  dateModified: string;
  name: string;
  quoteCount: number;
  slug: string;
  _id: string;
}

const Tags = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: tags } = useSelector((state: RootState) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  const showTagQuote = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(fetchQuotes(e.target.value));
  };

  return (
    <div className="md:my-14 my-10 mx-auto relative h-1 flex items-center justify-center gap-[.5em] p-[.5em] rounded-3xl outline-none w-[20em]">
      <select
        onChange={(e) => showTagQuote(e)}
        className={`absolute m-0 p-0 list-none max-h-60 cursor-pointer h-12 rounded-3xl pl-5 w-full left-0 top-[calc(100%+.25em)] bg-[#D9D9D9] z-10 outline-none uppercase`}
      >
        <option>Choose a Tag for quotes</option>

        {tags.map((tag: TagData) => {
          return (
            <option
              value={tag.name}
              key={tag._id}
              className="p-4 cursor-pointer uppercase rounded-lg active:bg-[#D05252] active:text-white"
            >
              {tag.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Tags;
