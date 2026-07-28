import React from 'react'

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <div className='w-full my-2'>
        <div className='flex flex-wrap bg-blue-50 p-1 rounded-2xl border border-blue-100'>
            {tabs.map((tab) => (
                <button key={tab.label} className={`relative flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 
                text-xs sm:text-sm font-bold rounded-xl transition-all 
                ${activeTab === tab.label
                    ? "bg-white text-[#3B5BDB] shadow-md shadow-blue-100/60"
                    : "text-slate-500 hover:text-[#3B5BDB] hover:bg-white/50"
                }`}
                    onClick={() => setActiveTab(tab.label)}>
                        <span className='relative z-10'>
                            {tab.label}

                            {activeTab === tab.label && (
                                <div className='absolute inset-0 bg-gradient-to-r from-[#3B5BDB]/8 
                                to-[#5C7CFA]/8 rounded-xl' />
                            )}
                        </span>
                </button>
            ))}
        </div>
    </div>
  )
}

export default Tabs
