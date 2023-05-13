import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='text-2xl py-2'>
            <div className="flex justify-between">
                <div>
                    <h1 className='font-babylonica text-[60px] font-extrabold text-yellow-600'><a href="/">Aspasht</a></h1>
                </div>
                <div className='flex gap-5 font-righteous font-extralight text-yellow-500'>
                    <NavLink to='/blogs' >Blog</NavLink>
                    <NavLink to='/research'>Research</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar