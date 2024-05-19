import '../App.css'

import logo from '../assets/logo.png'
import language from '../assets/language.svg'
import frame from '../assets/frame.svg'
import { LSearchComponent, SSearchComponent } from './SearchComponent'

const Navigation = () => {
  return (
    <>
      <div className='h-[170px] border border-neutral-200 px-12'>
        <div className='w-full h-[81px] relative bg-white flex flex-row justify-around items-center'>
          <div className='w-1/3 h-8 justify-start items-center inline-flex pl-10'>
            <img className='w-[102px] h-8' src={logo} />
          </div>

          <SSearchComponent />
          <LSearchComponent />

          <div className='w-1/3 h-[38px] justify-end items-center gap-6 inline-flex pr-10'>
            <div className="text-neutral-800 text-sm font-['SF Pro']">Become a Host</div>
            <button className='w-4 h-4 relative flex-col justify-start items-start flex'>
              <img src={language} />
              {/* <div className='w-4 h-4 rounded-full border border-neutral-800' /> */}
              {/* <div className='w-1.5 h-4 rounded-full border border-neutral-800' /> */}
              {/* <div className='w-4 h-[0px] border border-neutral-800'></div> */}
            </button>
            <div className='w-[90px] h-[48px] bg-white rounded-[29px] border border-gray-200 relative flex justify-around items-center'>
              <button className='flex-col justify-start items-start gap-1 inline-flex'>
                <div className='w-3.5 h-[0px] border border-neutral-800'></div>
                <div className='w-3.5 h-[0px] border border-neutral-800'></div>
                <div className='w-3.5 h-[0px] border border-neutral-800'></div>
              </button>

              <div className='w-8 h-[34px] relative'>
                <div className='w-[30px] h-[30px] left-[2px] top-[2px] absolute bg-neutral-500 rounded-full' />
                {/* <div className='w-2.5 h-2.5 left-[23px] top-[-1px] absolute bg-rose-500 rounded-full border border-white' /> */}
                <div className='w-[24.38px] h-[24.38px] left-[4.81px] top-[4.81px] absolute'>
                  <div className='w-[22.50px] h-[33.75px] left-[0.94px] top-[3.75px] absolute'>
                    <div className='w-[13.12px] h-[13.12px] left-[4.69px] top-0 absolute bg-white rounded-full' />
                    <div className='w-[22.50px] h-[22.50px] left-0 top-[11.25px] absolute bg-white rounded-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
