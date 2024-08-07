// "use client";

// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import ContentHorztl from "./components/ContentHorztl/ContentHorztl";
// export default function Home() {
//   return (
//     <main>
//       <div div className="home">
//         <div className="header">
//           <Header />
//         </div>
//         <div className="content_horizontal">
//           <ContentHorztl />
//         </div>
//       </div>
//       <div className="footer">
//         {" "}
//         <Footer />
//       </div>
//     </main>
//   );
// }
// app/Home.js
// app/page.js
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import ComponentHorztl from "./components/ContentHorztl/ContentHorztl";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    // Transition after 2 seconds (or any desired time) to trigger exit animation
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence>
        {showHeader ? (
          <Header key="header" />
        ) : (
          <ComponentHorztl key="component" />
        )}
      </AnimatePresence>
    </div>
  );
}
