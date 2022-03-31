import React from "react";


const Footer = () => {
    return (
        <footer class="text-gray-400" style={{background: "black"}}>
            <div class="container mx-auto pt-12 px-4 relative">
                <div class="-mx-4 flex flex-wrap gap-6 items-end mb-12">
                    <div class="px-4 w-full lg:w-6/12 xl:w-5/12">
                        <h2 class="font-bold mb-4 text-2xl text-white">Join the movement, stay updated</h2>
                        <form>
                            <div class="bg-white border border-gray-300 flex overflow-hidden p-1 rounded-full">
                                <input class="appearance-none flex-1 outline-none px-4 py-1 text-gray-600 w-full" placeholder="Enter email..." type="email" required="" />
                                <button type="submit" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded-full text-white to-primary-400">
                                    Sign Up
</button>
                            </div>
                        </form>
                    </div>
                    <div class="px-4 w-full lg:w-auto ml-auto">
                        <div class="flex-wrap gap-2 inline-flex sm:gap-4"> <a href="#" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="facebook"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                        </svg></a> <a href="#" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="twitter"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                            <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </svg></a> <a href="#" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="instagram"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
                        </svg></a> <a href="#" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="linkedin"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                            <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                        </svg></a> <a href="#" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="youtube"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                            <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>
                        </svg></a>
                        </div>
                    </div>
                </div>
                <hr class="my-6 opacity-20" />
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full p-4 xl:w-4/12"> <a href="#" class="font-bold gap-2 hover:text-gray-300 inline-flex items-center leading-none mb-6 text-3xl text-white uppercase"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.142 40" width="1.5em" height="1.5em" fill="currentColor">
                        <path data-name="Path 7167" d="M20 40a20.005 20.005 0 0 1-7.785-38.428 19.983 19.983 0 0 1 21.927 4.286L29.895 10.1a14 14 0 1 0 0 19.79l4.247 4.247A19.937 19.937 0 0 1 20 40Z" />
                        <path data-name="Path 7168" d="M20 14a6 6 0 1 1-6 6 6 6 0 0 1 6-6Z" />
                    </svg><span>MetaArtMarkert</span></a>
                        <p class="font-light mb-4">Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.</p>
                    </div>
                    <div class="p-4 w-full sm:w-6/12 lg:w-4/12 xl:w-2/12">
                        <h2 class="font-bold mb-6 text-primary-500 text-xl">                             About </h2>
                        <ul>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Our Story</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Our Team</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Careers</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Media</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4 w-full sm:w-6/12 lg:w-4/12 xl:w-2/12">
                        <h2 class="font-bold mb-6 text-primary-500 text-xl">                             Services </h2>
                        <ul>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">What's New</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Visitor's Info</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Events</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Learn</a>
                            </li>
                            <li class="mb-4"> <a href="#" class="hover:text-primary-300 text-white">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4 w-full lg:w-4/12">
                        <h2 class="font-bold mb-6 text-primary-500 text-xl">Recent Drops</h2>
                        <div class="-mx-2 flex flex-wrap gap-y-4 items-center">
                            <div class="px-2 w-1/2 sm:w-4/12"><a href="" class="block hover:opacity-75 overflow-hidden rounded-xl"><img src="https://images.unsplash.com/photo-1635321856129-af8531379f4b?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyOHx8M2QlMjBjaGFyYWN0ZXIlMjByZW5kZXJ8ZW58MHx8fHwxNjM4OTk4MDc0&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=250&fit=crop" width="300" height="250" class="w-full" alt="..." /></a>
                            </div>
                            <div class="px-2 w-1/2 sm:w-4/12"><a href="" class="block hover:opacity-75 overflow-hidden rounded-xl"><img src="https://images.unsplash.com/photo-1633520409170-2cf3f0b15c9d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwMzB8fDNkJTIwY2hhcmFjdGVyJTIwcmVuZGVyfGVufDB8fHx8MTYzODk5ODM4MQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=250&fit=crop" width="300" height="250" class="w-full" alt="..." /></a>
                            </div>
                            <div class="px-2 w-1/2 sm:w-4/12"><a href="" class="block hover:opacity-75 overflow-hidden rounded-xl"><img src="https://images.unsplash.com/photo-1635321856214-b0ad8fb2ff45?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDk0fHwzZCUyMGNoYXJhY3RlciUyMHJlbmRlcnxlbnwwfHx8fDE2Mzg5OTgwNTU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=250&fit=crop" width="300" height="250" class="w-full" alt="..." /></a>
                            </div>
                            <div class="px-2 w-1/2 sm:w-4/12"><a href="" class="block hover:opacity-75 overflow-hidden rounded-xl"><img src="https://images.unsplash.com/photo-1633287453185-6c497fd6f099?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDk4fHxkaWdpdGFsJTIwYXJ0fGVufDB8fHx8MTYzODk5NzkxOA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=250&fit=crop" width="300" height="250" class="w-full" alt="..." /></a>
                            </div>
                            <div class="px-2 w-1/2 sm:w-4/12"><a href="" class="block hover:opacity-75 overflow-hidden rounded-xl"><img src="https://images.unsplash.com/photo-1634832413517-7f48f67e3da4?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE5MHx8M2QlMjBjaGFyYWN0ZXIlMjByZW5kZXJ8ZW58MHx8fHwxNjM4OTk4MDkw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=250&fit=crop" width="300" height="250" class="w-full" alt="..." /></a>
                            </div>
                            <div class="px-2 w-1/2 sm:w-4/12"><a href="" class="block hover:opacity-75 overflow-hidden rounded-xl"><img src="https://images.unsplash.com/photo-1634129003118-37a254f894bd?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDYwMXx8M2QlMjBjaGFyYWN0ZXIlMjByZW5kZXJ8ZW58MHx8fHwxNjM4OTk4MjIx&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=300&h=250&fit=crop" width="300" height="250" class="w-full" alt="..." /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-4">
                    <hr class="mb-4 opacity-20" />
                    <div class="flex flex-wrap -mx-4  items-center">
                        <div class="px-4 py-2 w-full md:flex-1">
                            <p>&copy; 2002 - 2021. All Rights Reserved - Company Name</p>
                        </div>
                        <div class="px-4 py-2 w-full sm:w-auto"> <a href="#" class="hover:text-primary-600 text-primary-500">Privacy Policy</a> |                      <a href="#" class="hover:text-primary-600 text-primary-500">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer