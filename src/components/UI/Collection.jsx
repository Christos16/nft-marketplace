import React from "react";
import CollectionCard from "./CollectionCard";


const Collection = ({ nftCollections, setInputValue }) => {

    return (
        <section class="bg-opacity-10 bg-primary-500 pt-4 pb-24 sm:px-4">
            <div class="container mx-auto px-4">
                <div class="-mx-4 flex flex-wrap gap-2 items-center mb-6">
                    <div class="px-4 w-full md:flex-1">
                        <h2 class="capitalize font-bold text-3xl text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em" class="inline-block mb-2 mr-2 text-primary-500">
                            <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z"></path>
                        </svg><span>Hot Collectibles</span></h2>
                    </div>
                    <div class="px-4 w-full md:w-auto">
                        <form>
                            <div class="bg-white border border-gray-300 flex overflow-hidden p-1 rounded-full">
                                <input class="appearance-none flex-1 outline-none px-4 py-1 text-gray-600 w-full" placeholder="Find your next NFTs" type="text" required="" />
                                <button type="submit" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-2 rounded-full text-white to-primary-400" aria-label="search">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="-mx-3 flex flex-wrap gap-y-6 justify-center mb-12">

                    {nftCollections ?.map((nft, index) => (
                        <div class="px-3 w-full md:w-6/12 lg:w-4/12">
                            <div class="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" class="block group relative"><img src={nft ?.image} class="group-hover:opacity-90 w-full" alt="..." width="600" height="600" /><div class="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                    <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </svg>
                            </div></a>
                                <div class="px-4 py-6 sm:px-6">
                                    <div class="flex items-center justify-between" onClick={() => setInputValue(nft ?.addrs)}>
                                        <h3 class="font-bold text-xl"><a href="#" class="hover:text-primary-500 text-gray-900">{nft.name}</a></h3><a class="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                        </svg></a>
                                    </div>
                                    <hr class="border-gray-200 my-4" />
                                    <div class="flex items-center justify-between">
                                        <div><a href="#" class="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src={nft ?.image} class="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36" /><span>Created by CrownMitzi</span></a>
                                        </div>
                                        <div onClick={() => setInputValue(nft ?.addrs)}><a href="#" class="group cursor-pointer inline-block text-secondary-500"> <p class="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">View NFT</p> <span class="font-bold font-serif text-xl">0.02 ETH</span> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}




                </div>
                <div class="text-center"><a href="#" class="bg-gradient-to-t bg-gray-900 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400">View More</a>
                </div>
            </div>
        </section>
    )
}

export default Collection