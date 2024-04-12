export const metadata = {
  title: 'Home - 87-ag-PBG',
};

export default function About() {
  return (
    <>
      <div className="flex items-center">
        <img className="flex h-auto w-full m-0" src="/images/uaf4.jpg" alt="main" />
      </div>
      <br />
      <br />

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">


            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h4 className="h2 mb-4">A glimpse of the meetup for students of 87-ag-Agri - PBG - Faisalabad.</h4>
              <p className="text-xl text-gray-400">Experience the vibrant exchange of ideas and camaraderie at the 87-ag-Agri - PBG meetup in Faisalabad. Engage with fellow students in insightful discussions and networking opportunities. A dynamic gathering fostering collaboration and growth within the PBG community."
</p>
            </div>

<br />


            {/* Members */}
            <div className="max-w-sm mx-autobg-blue-999 grid gap-4 lg:grid-cols-4 lg:gap-4 items-start lg:max-w-none">


              {/* 1st Member */}
              <div className="flex flex-col h-full p-6 bg-blue-300" data-aos="fade-up">
                <div className="flex w-full mb-4">
                  <div className="relative overflow-hidden">
                    <img src="/images/irfan3.jpg" alt="Irfan Jafar" className="object-cover w-full m-0" />
                  </div>
                </div>
              </div>

              {/* 2nd Member */}
              <div className="flex flex-col h-full p-6 bg-blue-300" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative overflow-hidden">
                    <img src="/images/dr-sarwar1.jpg" alt="Gutti" className="object-cover w-full m-0" />
                  </div>
                </div>
              </div>

              {/* 3rd Member */}
              <div className="flex flex-col h-full p-6 bg-blue-300" data-aos="fade-up">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative overflow-hidden">
                    <img src="/images/boy1.jpg" alt="Boy" className="object-cover w-full m-0" />
                  </div>
                </div>
              </div>

              {/* 4th Member */}
              <div className="flex flex-col h-full p-6 bg-blue-300" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative overflow-hidden">
                    <img src="/images/irfan2.jpg" alt="Irfan" className="object-cover w-full m-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr />
      <footer />
    </>
  );
}
