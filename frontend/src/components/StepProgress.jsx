import React from 'react'
import { shimmerStyle } from '../assets/dummyStyle'
import { Check } from 'lucide-react'

const StepProgress = ({progress}) => {
  return (
    <>
    <style>{shimmerStyle}</style>

    <div className='relative w-full h-3 bg-slate-100 overflow-hidden rounded-full border border-slate-200'>

        {/* Track glow */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 animate-pulse opacity-60' />

        {/* MAIN PROGRESS BAR */}
        <div
          className='relative h-full bg-gradient-to-r from-[#3B5BDB] via-[#5C7CFA] to-[#3B5BDB]
          animate-flow bg-[length:200%_100%] transition-all duration-700 ease-out rounded-full overflow-hidden
          animate-pulse-glow'
          style={{ width: `${progress}%`}}
        >
            {/* Shimmer overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer'/>

            {/* Bubbles */}
            <div className='absolute inset-0 opacity-70'>
              {[...Array(8)].map((_,i) => (
                <div key={i}
                  className='absolute top-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bubble shadow-sm'
                  style={{
                    left: `${(i + 1) * 12}%`,
                    animationDelay: `${i * 0.25}s`,
                    transform: "translateY(-50%)"
                  }}
                />
              ))}
            </div>
        </div>

        {/* Leading glow dot */}
        {progress > 0 && (
          <div
            className='absolute top-0 h-full w-6 bg-gradient-to-r from-transparent via-white/60 to-white/20 blur-sm'
            style={{ left: `${Math.max(0, progress - 4)}%` }}
          />
        )}
    </div>

    <div className='flex justify-between items-center mt-2.5'>
      <div className='text-xs font-semibold text-slate-500'>
         {progress < 25 ? "Getting Started" : progress < 50 ? "Making Progress" : progress < 75 ? "Almost There" : "Nearly Completed"}
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-xs font-bold text-[#3B5BDB]'>{progress}%</span>
        {progress === 100 && (
          <div className='w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center'>
            <Check size={11} className='text-white'/>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default StepProgress
