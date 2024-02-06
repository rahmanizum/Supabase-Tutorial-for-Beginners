import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import BookCard from "../components/BookCard.jsx";
const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [libraryData, setLibraryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("library").select();
      if (error) {
        setFetchError(error.message);
        setLibraryData(null);
      } else {
        setLibraryData(data);
        setFetchError(null);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {!fetchError && (
        <div className="smoothies">
          <div className="smoothie-grid">
          {libraryData.map((ele) => <BookCard  key={ele.id} book={ele}/>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
