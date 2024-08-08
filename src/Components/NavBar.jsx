import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
// import { IoCartSharp } from "react-icons/io5";

export default function NavBar() {
    const cartItems = useSelector((state) => state.cartItem)

    return (
        <>
            <div className='navBar'>
                <NavLink to='.' className='heading-shopee'>
                    Shopee
                </NavLink>
                <NavLink to='cart' className='cart-image'>
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25619.png' alt={'CartImage'} className='img' />
                    {/* <IoCartSharp className='img' /> */}
                    <p className='cart-image-items'>
                        {cartItems.reduce(
                            (accumulator, currentItem) => accumulator + currentItem.quantity,
                            0
                        )}
                    </p>
                </NavLink>
            </div>
            <Outlet />
        </>

    )
}




// const {rtaResponse} = useSelector((state) => state.rtaSlice)

// export const config = {
//     documents: {
//         RTA_Summary: 'https://halliburtoncompanydev.appiancloud.com/suite/webapi/viewDocument/1223766',
//         RTA_PLF: 'https://halliburtoncompanydev.appiancloud.com/suite/webapi/viewDocument/1223766',
//     },
//     links: {
//         CWI_RTA: `https://cwiprod.corp.halliburton.com/cwi/View.jsp?type=Rta&revision=&name=${rtaResponse.rtaNumber}`,
//         CWI_Referencepart: `https://cwiprod.corp.halliburton.com/cwi/View.jsp?type=Part&name=${rtaResponse.sapNumber}&revision-lastReleased`,
//         DSD_deeplink: `http://azusentprod108.corp.halliburton.com:8085/Enterprise/AMSInfo.jsp?partnumber=${rtaResponse.sapNumber}`,
//         Enovia: 'https://enterprise.corp.halliburton.com/3dspace/common/emxNavigator.jsp?appName-HAL-HCT_AP'
//     }
// }