import React from 'react'

const Home = () => {
  return (
    <div>
    <section class="w-full h-[73%] medium:h-fit flex justify-end px-40">
            
            <div class=" large:w-full  flex medium:flex-col-reverse medium:justify-center medium:gap-8 medium:text-center medium:h-full justify-between items-center h-full">
                <div class="flex flex-col items-start gap-14 medium:items-center  ">
                    <img src="PaytmAsseests/asset 2.avif" alt="" class="w-24"/>
                    <div class="flex flex-col gap-6 ">
                        <p class="text-6xl font-bold w-[600px] medium:w-full">Everything you need for a Website</p>
                        <p class="text-lg font-medium w-[450px] medium:w-full ">Buy a domain, get online in minutes.
                        In about two minutes with Airo, our AI powered experience. Try it free to preview your Coming Soon site. </p>
                    </div>
                    <button class="flex justify-center items-center gap-3 bg-black text-white px-10 py-3 rounded-3xl hover:bg-white hover:text-black border hover:border  border-black ">
                        <p class="text-base font-medium">Download  App</p>
                        
                        <p class="">+</p>
                   </button>
                </div>
                <div class="large:w-full medium:w-[30%] medium:flex medium:justify-center medium:items-center ">
                    <img class=" w-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-otMDyGA_EUjGIfrEz9Az7Rv3fbcr5eCRw&s"/>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home