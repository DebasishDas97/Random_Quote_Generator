import Tags from "../components/Tags";
import Quotes from "../components/Quotes";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../store/quotesSlice.jsx";
import { AppDispatch } from "../store/store";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {tag} = useSelector((state:any) => state.quotes)

  const getQuotes = () => {
    if(tag && tag!== "Choose a Tag for quotes"){
      dispatch(fetchQuotes(tag))
    } else {
      dispatch(fetchQuotes(""));
    }
  };

  return (
    <>
      <div className="text-center">
        <Quotes />
        <Tags />
        <button
          onClick={getQuotes}
          className="bg-[#009C51] shadow-shadowCustom mt-16 px-9 py-2 text-white text-3xl rounded-2xl"
        >
          Next Quote
        </button>
      </div>
    </>
  );
};

export default Home;
