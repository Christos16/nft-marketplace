import React from "react";



const TopSection = () => {
    return (
        <main className="text-gray-500">
            <section className="bg-secondary-500 poster pt-4 relative text-opacity-60 text-white sm:px-4">
                <div className="absolute bg-secondary-500 h-full inset-0 w-6/12 z-0 md:w-5/12 lg:w-4/12"></div>
                {/* <div className="container mx-auto relative">
                    <nav className="flex flex-wrap items-center px-4 py-2"> <a href="#" className="font-bold gap-2 hover:text-gray-300 inline-flex items-center leading-none mr-4 text-3xl text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.142 40" width="1.5em" height="1.5em" fill="currentColor">
                        <path data-name="Path 7167" d="M20 40a20.005 20.005 0 0 1-7.785-38.428 19.983 19.983 0 0 1 21.927 4.286L29.895 10.1a14 14 0 1 0 0 19.79l4.247 4.247A19.937 19.937 0 0 1 20 40Z" />
                        <path data-name="Path 7168" d="M20 14a6 6 0 1 1-6 6 6 6 0 0 1 6-6Z" />
                    </svg><span className="uppercase">NFT Origin</span></a>
                        <button className="hover:bg-primary-500 hover:text-white ml-auto px-3 py-2 rounded text-white lg:hidden" data-name="nav-toggler" data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"className.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}' data-pg-ia-apply="$nav [data-name=nav-toggler]"> <span className="block border-b-2 border-current my-1 w-6"></span> <span className="block border-b-2 border-current my-1 w-6"></span> <span className="block border-b-2 border-current my-1 w-6"></span>
                        </button>
                        <div className="flex-1 hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto" data-name="nav-menu">
                            <div className="flex flex-col ml-auto lg:flex-row"> <a href="#" className="font-medium hover:text-gray-300 py-2 text-opacity-60 text-white lg:p-4 xl:px-6">Home</a><a href="#" className="font-medium hover:text-gray-300 py-2 text-opacity-60 text-white lg:p-4 xl:px-6">Artists</a><a href="#" className="font-medium hover:text-gray-300 py-2 text-opacity-60 text-white lg:p-4 xl:px-6">Drops</a><a href="#" className="font-medium hover:text-gray-300 py-2 text-opacity-60 text-white lg:p-4 xl:px-6">Marketplace</a><a href="#" className="font-medium hover:text-gray-300 py-2 text-opacity-60 text-white lg:p-4 xl:px-6">Community</a>
                            </div>
                            <a href="#" className="bg-gradient-to-t bg-primary-500 font-bold from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400">Join Now</a>
                        </div>
                    </nav>
                </div> */}
                <div class="container mx-auto pb-4 pt-16 px-4 relative">
                    <div class="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
                        <div class="px-4 w-full lg:w-6/12 xl:w-5/12">
                            <div class="-ml-4 bg-secondary-500 p-4 rounded-2xl w-10/12 sm:-ml-6 sm:p-6 md:w-7/12 lg:w-full"> <a href="#" class="block group overflow-hidden relative rounded-xl"><img src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxfHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTYzNjUwNTg4OA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" class="w-full" alt="..." width="600" height="600" /><div class="absolute bg-opacity-10 bg-white bottom-0 flex group-hover:bg-opacity-20 inset-x-0 items-center justify-between p-4 text-white sm:px-6">
                                <h2 class="font-bold">Digitalized Zeus</h2>
                                <span class="italic opacity-50">by Kingsah82</span>
                            </div></a>
                            </div>
                        </div>
                        <div class="mx-auto px-4 w-full lg:w-6/12">
                            <h1 class="font-bold leading-tight mb-2 text-4xl text-black-700 md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl 2xl:leading-tight 2xl:text-7xl">Discover rare digital arts and collect NFTs</h1>
                            <p class="font-light  text-gray-700 mb-12 text-xl">Rapidly growing marketplace for rarest NFTs.</p>
                            <div class="flex flex-wrap gap-4 items-center"> <a style={{ border: "1px solid" }} href="#" class="  text-black font-bold from-gray-800 hover:bg-gray-900 hover:from-gray-900 hover:to-gray-800 inline-block px-12 py-2 rounded to-gray-700">Explore</a>
                                <a href="#" class="bg-gradient-to-t bg-gray-200 bg-gray-900 font-bold from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-12 py-2 rounded text-white to-primary-400">Create</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TopSection