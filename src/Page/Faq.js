import React from "react";
import { useEffect } from "react";
import AppBase from "../components/AppBase";
import FrequentlyAskedQuestions from "../components/HomePage/FrequentlyAskedQuestions";
function Faq(props) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AppBase>
      <FrequentlyAskedQuestions />
    </AppBase>
  );
}

export default Faq;
