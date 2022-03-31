import React from "react";


const CallToAction = () => {
    return (
        <section class=" py-16 text-center text-gray-400 sm:px-4 py-24 sm:px-4" style={{
            background: "#1a1919",
            borderRadius: "25px"
        }}>
            <div class="container mx-auto px-4 relative">
                <div class="mx-auto w-full lg:w-8/12 xl:w-6/12">
                    <h2 class="capitalize font-bold mb-4 text-3xl text-white">Explore &bull; Create &bull; Trade</h2>
                    <p class="font-light fw-light mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est.</p>
                    <a href="#" class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400">Register Now</a>
                </div>
            </div>
        </section>
    )
}

export default CallToAction