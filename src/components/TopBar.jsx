
import React from 'react'

function TopBar() {
    return <div>
            <div className="text-xl font-semibold flex pt-5 pb-5">
                Payouts
                <div className="flex pl-4 pt-2 ">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <div className="text-sm pl-2 text-gray-800">How it works</div>
                </div>


                <div className="flex justify-center items-center">
    <div className="relative lg:ml-96">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className=" w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
            type="search" 
            className="px-12 text-sm py-2 w-full lg:w-96 h-10 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" 
            placeholder="Search features, tutorials, guides..."
        />
    </div>
</div>



                <div className="flex h-10 ml-auto mr-4 justify-end gap-4">
                        <div className=" cursor-pointer rounded-full w-10 bg-gray-300 h-10 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D"></path></svg>
                        </div>
                        <div className="cursor-pointer rounded-full w-10 bg-gray-300 h-10 flex items-center justify-center">
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.11092 8.50209C7.51563 9.15823 6.48437 9.15823 5.88908 8.50209L0.615075 2.68901C-0.259446 1.7251 0.424491 0.181107 1.72599 0.181107L12.274 0.181108C13.5755 0.181108 14.2594 1.7251 13.3849 2.68901L8.11092 8.50209Z" fill="#4D4D4D"></path></svg>
                        </div>
                </div>
            </div>
    </div>
}

export default TopBar