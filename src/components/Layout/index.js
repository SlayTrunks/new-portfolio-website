import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
// import Home from '../components/Home'
// import Home from '../Home'


 const Layout=()=>{
return <>
<Sidebar />
<div className="page">
    <span className='tags html-top-tag'>&lt;html&gt;</span>
    <span className='tags top-tags'>&lt;body&gt;</span>

    <Outlet />

    <span className='tags bottom-tags'>&lt;body&gt;</span>
    <span className='tags html-bottom-tag'>&lt;html&gt;</span>
</div>
</>
}

export default Layout