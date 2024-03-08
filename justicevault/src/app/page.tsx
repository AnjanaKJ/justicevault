'use client';
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="root">
        <Header/>

        <Features/>
       
       <Footer/>
      </div>
    </>
  );
}
