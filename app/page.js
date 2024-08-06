"use client";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContentHorztl from "./components/ContentHorztl/ContentHorztl";
export default function Home() {
  return (
    <main>
      <div className="header">
        <Header />
      </div>
      <div className="content_horizontal">
        <ContentHorztl />
      </div>
      <div className="footer">
        {" "}
        <Footer />
      </div>
    </main>
  );
}
