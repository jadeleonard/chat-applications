export default function Navbar(){
    return(
        <div className='flex max-w-screen-xl mx-auto p-2 justify-between'>
                <div className="logo text-3xl font-bold mx-auto">Logo</div>
            <ul className="hidden sm:inline-flex gap-4 mx-auto">
                <li className="text-black hover:text-blue-400 transition duration-500">
                    Home
                </li>
                <li className="text-black hover:text-blue-400 transition duration-500">
                    Sign in
                </li>
                <li className="text-black hover:text-blue-400 transition duration-500">
                    Sign up
                </li>
                <li className="text-black hover:text-blue-400 transition duration-500">
                    My Profile
                </li>
            </ul>

        </div>
    )
}