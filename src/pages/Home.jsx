import Apply from "../components/Apply";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Partnership from "../components/Partnership";
import Questions from "../components/Questions";
import Prices from "../components/Prices";

export default function Home() {
  return (
    <main className="grow">
        <Hero/>
        <Apply/>
        <Partnership/>
        <Features/>
        <Prices/>
        <Questions/>
    </main>
  )
}
