import Image from "next/image";
import {HomeIcon, PlusIcon, SearchIcon, StarIcon} from "@heroicons/react/solid"
import {signIn, signOut, useSession} from "next-auth/client";
import { useRouter } from "next/router";


function Header() {
const [session] = useSession ();
const router = useRouter();

    return (
        <header className="sticky bg-[#040714] top-0 z-[1000] flex 
        items-center px-10 h-[72px] md:px-12">
            <Image src="/images/logo.svg" width={80} height={80}
            className="cursor-pointer"
            onClick={() => router.push("/")}
            />
            {session && (
                <div className="hidden ml-10 md:flex items-center 
                space-x-6">
                    <p className="header-link group">
                        <HomeIcon className="h-4" />
                        <span className="span">Home</span>
                    </p>
                    <p className="header-link group">
                        <SearchIcon className="h-4" />
                        <span className="span">Search</span>
                    </p>
                    <p className="header-link group">
                        <PlusIcon className="h-4" />
                        <span className="span">Watchlist</span>
                    </p>
                    <p className="header-link group">
                        <StarIcon className="h-4" />
                        <span className="span">Originials</span>
                    </p>
                    <p className="header-link group">
                        <img src="/images/movie-icon.svg" alt=""
                        className="h-5" />
                        <span className="span">Movies</span>
                    </p>
                    <p className="header-link group">
                        <img src="/images/series-icon.svg" alt=""
                        className="h-5" />
                        <span className="span">Series</span>
                    </p>
                </div>              
            )}  
            {!session ? (
                 <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide 
                 hover:bg-white hover:text-black transition duration-200" 
                 onClick={signIn}
                 > 
                   Login
                 </button> 
            ) : (
                <img src={session.user.image} className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
                onClick={signOut}
                />
            )}
            
        </header>
    )
}

export default Header;

