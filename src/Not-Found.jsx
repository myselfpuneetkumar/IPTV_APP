 
//  import tailwindcss from "@tailwindcss/vite";
// import './Tailwind.css'

import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 dark:bg-gray-950 dark:text-white" style={{border:'2px solid black',margin:'20px', backgroundColor:'black',color:'white'}}>
            <h1 className="text-8xl font-bold">404</h1>

            <h2 className="mt-4 text-2xl font-semibold">
                Page Not Found
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
                Sorry, the page you're looking for doesn't exist. <br /> click on Home Page......
            </p>

            <Link to='/'
           
                className="mt-6 rounded-sm  bg-blue-600 px-10 py-3 text-white hover:bg-blue-700" style={{backgroundColor:'blue'}}
            >
                Go Home
            </Link>
        </div>
    );
}