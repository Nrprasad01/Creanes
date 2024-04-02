import React from 'react'
import HeaderSelect from '../headerSelection/HeaderSelect'
import AllData from '../AllData/AllData'
import Footer from '../Footer/Footer'

const LandingPage = () => {
    return (
        <>
            <div>
                {
                    <>
                        <HeaderSelect />
                         <AllData />
                        {/* <Footer /> */}
                    </>
                }
            </div>
        </>
    )
}

export default LandingPage
