import React from "react";
import { useQuery } from "@apollo/client";

const Home = () => {
  //const { loading, data } = useQuery(QUERY_SCORES);
  const scores = []?.scores || [];
  return (
    <main>
      <div className="flex-row justify-center">
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ThoughtForm />
        </div> */}
        
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ScoresList scores={scores} title="Scores" />
          )} */}
        </div>
      </div>
    </main>
  );
};
export default Home;
