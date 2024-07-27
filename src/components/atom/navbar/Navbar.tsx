import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="fixed z-50 bg-white navbar shadow-lg top-0">
            <div className="w-full px-6 mx-auto sm:px-16 max-w-7xl">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">Logo</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quiz">Quiz</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar