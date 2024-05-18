import './App.css'
import star from './assets/star.svg'
import heart from './assets/heart.svg'

const CardsComponent = ({ data }) => {
  return (
    <>
      <div className='w-full h-[429px] relative'>
        <div className='w-full h-[308px] left-0 top-0 absolute bg-zinc-400 rounded-xl'>
          {/* image 들어가는 부분 */}
        </div>

        {/* 뱃지. 삼항 연산자로 '게스트 선호'가 표시되어야 하는 경우에만 표시*/}
        <div className='shadow px-2 py-1.5 left-[16px] top-[16px] absolute bg-white rounded-[43px] justify-start items-start gap-2.5 inline-flex'>
          <div className="text-neutral-800 text-sm font-['SF Pro']">게스트 선호</div>
        </div>

        <div className='w-6 h-6 left-[284px] top-[16px] absolute'>
          <img className='heart' src={heart} />
        </div>
        <div className='left-0 top-[324px] absolute flex-col justify-start items-start gap-2 inline-flex'>
          <div className='flex-col justify-start items-start gap-1 flex'>
            <div className="text-neutral-800 text-sm font-normal font-['SF Pro']">{data.title}</div>
            <div className="text-zinc-600 text-sm font-normal font-['SF Pro']">{data.distance}</div>
            <div className="text-zinc-600 text-sm font-normal font-['SF Pro']">
              {data.available}
            </div>
          </div>
          <div className='justify-start items-center gap-1 inline-flex'>
            <span className="text-neutral-800 text-sm font-['SF Pro']"></span>
            <span className="text-neutral-800 text-sm font-normal font-['SF Pro']">
              {data.pricePerDay}
            </span>
            <span className="text-neutral-800 text-sm font-normal font-['SF Pro']"></span>
            <div className='w-0.5 h-0.5 bg-zinc-600 rounded-full' />
            <div className="text-zinc-600 text-sm font-normal font-['SF Pro']"></div>
          </div>
        </div>
        <div className='left-[235px] top-[324px] absolute justify-end items-center gap-1 inline-flex'>
          <img className='star' src={star} />
          <div className="text-neutral-800 text-sm font-normal font-['SF Pro']">{data.rate}</div>
          {/* <div className="text-neutral-800 text-sm font-normal font-['SF Pro']">리뷰 개수</div> */}
        </div>
        <div className='w-[49px] h-1.5 left-[138px] top-[294px] absolute'>
          <div className='w-[49px] left-0 top-0 absolute'>
            <div className='w-1.5 h-1.5 left-0 top-0 absolute bg-white rounded-full' />
            <div className='w-1.5 h-1.5 left-[11px] top-0 absolute bg-neutral-200 rounded-full' />
            <div className='w-1.5 h-1.5 left-[22px] top-0 absolute bg-neutral-200 rounded-full' />
            <div className='w-1.5 h-1.5 left-[33px] top-0 absolute bg-neutral-200 rounded-full' />
            <div className='w-1 h-1 left-[45px] top-[1px] absolute bg-neutral-200 rounded-full' />
          </div>
        </div>
      </div>
    </>
  )
}
export default CardsComponent
