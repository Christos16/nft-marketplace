import React from "react";
import {
    FileSearchOutlined,
    DownloadOutlined,
} from "@ant-design/icons";
import { Modal, Badge, Alert, Spin } from "antd";
import { getExplorer } from "../../helpers/networks";


const CollectionDetails = ({ collection, getMarketItem, chainId, collectionSize, handleBuyClick }) => {


    console.log(getMarketItem(collection[0], "GET MARKET ITEMS")) 
    return (
        <main class="profile-page">
            <section class="relative block h-500-px">
                <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')
          `}}>
                    <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section class="relative py-16 bg-blueGray-200">
                <div class="container mx-auto px-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div class="relative">
                                        <img alt="..." src={collection[0] ?.image} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">

                                    <div class="py-6 px-3 mt-32 sm:mt-0">
                                        <button class="bg-white  ml-auto flex items-center text-black uppercase font-bold hover:shadow-md shadow text-base  px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                            <DownloadOutlined />  <p className="ml-2">Share</p>
                                        </button>
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{collectionSize}</span><span class="text-sm text-blueGray-400">Collection Size</span>
                                        </div>
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span class="text-sm text-gray-400">Owned by</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0.20ETH</span><span class="text-sm text-gray-400">Floor Price</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">1.40ETH</span><span class="text-sm text-gray-400">Total Sales</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-12">
                                <div class="w-full lg:w-3/12 mx-auto px-4 lg:order-2 flex justify-center mb-2">
                                    <div class="relative">
                                        <img alt="..." style={{ width: "200px", marginBottom: "10px", marginLeft: "5px" }} src={collection[0] ?.image} class="shadow-xl mx-auto rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                    </div>
                                </div>
                                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    {collection[0] ?.name}
                                </h3>
                                {/* <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Los Angeles, California
            </div> */}
                                <div class="mb-2 text-blueGray-600 mt-10 mx-auto" style={{ maxWidth: "500px" }}>
                                    These are portraits of unique characters. All the characters struggle and live in their respective lives. You will be able to get a glimpse of the feelings of hope and sadness from their expressions over the screen.
            </div>

                            </div>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full px-4">
                                        <div class="-mx-3 flex flex-wrap gap-y-6 justify-center mb-12">
                                            {
                                                collection ?.slice(0, 20).map((nft, index) => (
                                                    <div class="px-3 w-full md:w-6/12 lg:w-4/12">
                                                        <div class="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" class="block group relative"><img src={nft ?.image} class="group-hover:opacity-90 w-full" alt="..." width="600" height="600" /><div class="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                                                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                            </svg>
                                                        </div></a>
                                                            <div class="px-4 py-6 sm:px-6">
                                                                <div>
                                                                    <div class="flex items-center justify-between">
                                                                        <h3 class="font-bold text-xl"><a href="#" class="hover:text-primary-500 text-gray-900">{nft ?.name}</a></h3><a class="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                                        </svg></a>
                                                                    </div>
                                                                    <h2 className="italic text-gray-800">#{nft.token_id}</h2>
                                                                </div>
                                                                <hr class="border-gray-200 my-4" />
                                                                <div class="flex items-center justify-between">
                                                                    <div onClick={() =>
                                                                        window.open(
                                                                            `${getExplorer(chainId)}address/${nft.token_address}`,
                                                                            "_blank"
                                                                        )
                                                                    }><a href="#" class="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <FileSearchOutlined

                                                                    /><span>View on BlockExplorer</span></a>
                                                                    </div>
                                                                    <div onClick={() => handleBuyClick(nft)}><a href="#" class="flex items-center flex-col"> <p class="group-hover:text-primary-500 mb-1 text-gray-500 text-sm"> Buy Now{getMarketItem(nft) && (
                                                                        <Badge.Ribbon text="Buy Now" color="green"></Badge.Ribbon>
                                                                    )}</p> <span class="font-bold font-serif text-xl">0.02 ETH</span> </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                ))}
                                        </div>
                                        <a href="#pablo" class="fbg-gradient-to-t bg-gray-900 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default CollectionDetails