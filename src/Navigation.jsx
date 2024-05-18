import './App.css'
import group from './assets/Group.svg'
import logo from './assets/logo.png'
import language from './assets/language.svg'
import frame from './assets/frame.svg'

const Navigation = () => {
  return (
    <>
      <div className='h-[165px]'>
        <div className='w-full h-[81px] relative bg-white border border-neutral-200 flex flex-row justify-around items-center px-12'>
          <div className='w-1/3 h-8 justify-start items-center inline-flex pl-10'>
            <img className='w-[102px] h-8' src={logo} />
          </div>

          <div className='w-1/3 pl-7 pr-2 py-2 bg-white rounded-[500px] shadow border border-gray-200 justify-around items-center gap-6 inline-flex'>
            <div className='justify-start items-center gap-4 flex'>
              <button className="text-neutral-800 text-[13px] font-['SF Pro']">Anywhere</button>
              <div className='w-6 rotate-90 border border-gray-200'></div>
              <div className="text-neutral-800 text-[13px] font-['SF Pro']">Any week</div>
              <div className='w-6 rotate-90 border border-gray-200'></div>
              <div className="text-neutral-800 text-[13px] font-['SF Pro']">Add guests</div>
            </div>
            <div className='w-8 h-8'>
              <div className='w-8 h-8 bg-rose-500 rounded-full'>
                <img className='heart' src={group} />
              </div>
            </div>
          </div>

          <div className='w-1/2 h-[63px] px-1.5 absolute top-[81px] bg-white rounded-[500px] border border-neutral-300 justify-start items-center gap-px inline-flex'>
            <div className='w-[209px] px-6 py-3.5 bg-white rounded-tl-[500px] rounded-bl-[500px] flex-col justify-center items-start gap-1 inline-flex'>
              <div className="text-neutral-800 text-xs font-['SF Pro']">Where</div>
              <div className="text-neutral-500 text-sm font-normal font-['SF Pro']">
                Search destinations
              </div>
            </div>
            <div className='w-[25px] h-[0px] origin-top-left rotate-90 border border-neutral-300'></div>
            <div className='w-[129px] px-6 py-3.5 bg-white flex-col justify-start items-start gap-1 inline-flex'>
              <div className="text-neutral-800 text-xs font-['SF Pro']">Check-in</div>
              <div className="text-neutral-500 text-sm font-normal font-['SF Pro']">Add dates</div>
            </div>
            <div className='w-[25px] h-[0px] origin-top-left rotate-90 border border-neutral-300'></div>
            <div className='w-[129px] px-6 py-3.5 bg-white flex-col justify-center items-start gap-1 inline-flex'>
              <div className="text-neutral-800 text-xs font-['SF Pro']">Check-out</div>
              <div className="text-neutral-500 text-sm font-normal font-['SF Pro']">Add dates</div>
            </div>
            <div className='w-[25px] h-[0px] origin-top-left rotate-90 border border-neutral-300'></div>
            <div className='w-[209px] px-6 py-3.5 bg-white flex-col justify-center items-start gap-1 inline-flex'>
              <div className="text-neutral-800 text-xs font-['SF Pro']">Who</div>
              <div className="text-neutral-500 text-sm font-normal font-['SF Pro']">Add guests</div>
            </div>
            <div className='w-12 h-12 relative'>
              <div className='w-12 h-12 left-0 top-0 absolute bg-rose-500 rounded-full' />
              <div className='w-[9px] h-[9px] left-[18px] top-[18px] absolute rounded-full border-2 border-white' />
              <div className='w-[9px] h-[0px] left-[33px] top-[31.50px] absolute origin-top-left rotate-[-135deg] border-2 border-white'></div>
            </div>
          </div>

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
