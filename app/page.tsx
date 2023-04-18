import { Nanum_Gothic } from 'next/font/google'
import {NextFont} from "next/dist/compiled/@next/font";
import PoketmonList from "@/app/components/PoketmonList";
import SearchBar from "@/app/components/SearchBar";

const gothic: NextFont = Nanum_Gothic({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
});

export default function Home() {
  return (
    <div className={gothic.className}>
        <SearchBar />
        <PoketmonList />
    </div>
  )
}
