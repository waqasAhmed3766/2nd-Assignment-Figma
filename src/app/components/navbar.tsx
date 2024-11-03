import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-[#252B42] h-full w-full text-white max-w-6xl mx-auto'>

        <nav className='w-full h-[91px] flex py-[20px]'>
            <div className='ml-[50px] font-bold'><Link href="#!">BrandName</Link></div>

            <div className='ml-[150px] space-x-8'>
                <Link href="/home">Home</Link>
                <Link href="/product">Product</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/contact">Contact</Link>
            </div>

            <div className='ml-[300px] space-x-5 font-bold'>
                <Link href="/login" className=' hover:bg-blue-500 p-3 rounded-l'>LogIn</Link>
                <Link href="/joinus" className=' hover:bg-blue-500 p-3 rounded-l'>JoinUS</Link>
            </div>
        </nav>
{/* /* *********************************************************************************************************** */ }

        
            <div className="flex justify-center items-center h-[1028] w-[1046] pb-[80px] flex-col">

                <div className="w-[701px] h-[496px] flex text-center flex-col gap-[40px] pt-[40px] pb-[40px]">
                    <h5 className='text-blue-500'>
                        welcome
                    </h5>

                    <h2 className='font-bold text-5xl justify-center items-center'>
                            Selling on the <br /> internet like a pro
                    </h2>

                    <p className='font-[400px]'>We know how large objects will act, but things on a <br />
                    small scale just do not act that way.</p>

{/* *************************************************************************************************************** */}

                    <div className="flex justify-center items-center text-center flex-row gap-x-3">

                        <button className='h-[52px] w-[150px] rounded pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white border-2 border-[#23A6F0] text-sm'>
                                    Get Quote Now
                        </button>

                        <button className='h-[52px] w-[150px] rounded pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white   border-2 border-[#23A6F0] text-sm'>
                            Learn More
                        </button>
                        
                    </div>
                    
                </div>
{/* ****************************************************************************************/}
                <div className="h-[292px] w-[1046px] flex flex-row gap-[30px] mb-[100px]">
                        <div className="w-[328px] pt-[35px] pb-[35px] pl-[40px] pr-[40px] gap-  [20px] bg-[#FFFFFF]">
                            <div className="h-[76px] w-[70px] rounded-[10px] bg-[#FFDCD1] pt[22px] pb-[22px] pl-[19px] pr-[19px] gap-[10px]"></div>
                            <h5 className='font-bold text-[16px] text-[#252B42] mr-[122px] mt-[10px]'>training Courses</h5>

                            <hr className='w-[50px] h-[2px] bg-[#E74040] mt-[20px]'/>

                            <p className="text-[#737373] mt-[20px] font-[400] text-sm">The gradual accumulation of information about atomic and small-scale behaviour...</p>
                     </div>
{/* ************************************************************************************ */}

                     <div className="w-[328px] pt-[35px] pb-[35px] pl-[40px] pr-[40px] gap-  [20px] bg-[#FFFFFF]">
                            <div className="h-[76px] w-[70px] rounded-[10px] bg-[#B9EAA8] pt[22px] pb-[22px] pl-[19px] pr-[19px] gap-[10px]"></div>
                            <h5 className='font-bold text-[16px] text-[#252B42] mr-[122px] mt-[10px]'>2,769 online courses</h5>

                            <hr className='w-[50px] h-[2px] bg-[#E74040] mt-[20px]'/>

                            <p className="text-[#737373] mt-[20px] font-[400] text-sm">The gradual accumulation of information about atomic and small-scale behaviour...</p>
                     </div>

{/* ********************************************************************************** */}
                     <div className="w-[328px] pt-[35px] pb-[35px] pl-[40px] pr-[40px] gap-  [20px] bg-[#23A6F0]">
                            <div className="h-[76px] w-[70px] rounded-[10px] bg-[#FFFFFF] pt[22px] pb-[22px] pl-[19px] pr-[19px] gap-[10px]"></div>
                            <h5 className='font-bold text-[16px] text-[#252B42] mr-[122px] mt-[10px]'>training Courses</h5>

                            <hr className='w-[50px] h-[2px] bg-[#E74040] mt-[20px]'/>

                            <p className="text-[#FFFFFF] mt-[20px] font-[400] text-sm">The gradual accumulation of information about atomic and small-scale behaviour...</p>
                     </div>
  {/* **************************************************************** */}
                    </div>
            </div>        
        </div>

  )
}

