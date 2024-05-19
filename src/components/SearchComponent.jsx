import '../App.css'
import group from '../assets/Group.svg'
import group2 from '../assets/Group2.svg'

const SSearchComponent = () => {
  return (
    <>
      <div className='w-1/3 pl-7 pr-2 py-2 bg-white rounded-[500px] shadow border border-gray-200 justify-around items-center inline-flex'>
        <div className='justify-start items-center gap-4 flex'>
          <button className="text-neutral-800 text-[13px] font-['SF Pro']">Anywhere</button>
          <div className='w-6 rotate-90 border border-gray-200'></div>
          <button className="text-neutral-800 text-[13px] font-['SF Pro']">Any week</button>
          <div className='w-6 rotate-90 border border-gray-200'></div>
          <button className="text-neutral-800 text-[13px] font-['SF Pro']">Add guests</button>
        </div>

        <div className='w-8 h-8 bg-rose-500 rounded-full'>
          <img className='heart' src={group} />
        </div>
      </div>
    </>
  )
}

const LSearchComponent = () => {
  return (
    <>
      {/* <div className='pl-7 pr-2 py-2 justify-around items-center inline-flex'>
        <span>숙소</span>
        <span>체험</span>
        <span>온라인 체험</span>
      </div> */}
      <div className='h-[63px] px-1.5 absolute top-[81px] bg-white border border-neutral-300 rounded-[500px]  justify-start items-center gap-px inline-flex'>
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
          <img src={group2} />
        </div>
      </div>
    </>
  )
}

export { SSearchComponent, LSearchComponent }
