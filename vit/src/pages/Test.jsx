import React from "react";
import { mintTokenContract } from "../contracts";
import { useState } from "react";

const Test = ({ account }) => {
  const [newCard, setNerCard] = useState();

  return (
    <div>
      (newCard ? (<div>new Card</div>) : (<p>let's mint new Card!</p>))
    </div>
  );
};

export default Test;
