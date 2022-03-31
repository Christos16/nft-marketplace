import React from "react";


const CollectionCard = () => {
    return (
        <div class="px-3 w-full md:w-6/12 lg:w-4/12">
            <div class="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" class="block group relative"><img src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDkwfHxkaWdpdGFsJTIwcGFpbnRpbmd8ZW58MHx8fHwxNjM4OTE4NTUx&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" class="group-hover:opacity-90 w-full" alt="..." width="600" height="600" /><div class="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                    <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
            </div></a>
                <div class="px-4 py-6 sm:px-6">
                    <div class="flex items-center justify-between">
                        <h3 class="font-bold text-xl"><a href="#" class="hover:text-primary-500 text-gray-900">Octo Police Car</a></h3><a class="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg></a>
                    </div>
                    <hr class="border-gray-200 my-4" />
                    <div class="flex items-center justify-between">
                        <div><a href="#" class="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop" class="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36" /><span>Created by CrownMitzi</span></a>
                        </div>
                        <div><a href="#" class="group inline-block text-secondary-500"> <p class="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span class="font-bold font-serif text-xl">0.02 ETH</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard