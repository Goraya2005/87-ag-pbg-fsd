
import Days from '@/components/days/Days'



export default function Events() {
  return (
    <div>
      <section className="bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h4 className="h2 mb-4">UPCOMING EVENTS</h4>
              <p className="text-xl text-gray-400">We are planning to organize a get-together.</p>
              <p>Students of 87-ag-Agri with a Major in Plant Breeding and Genetics and residents of Faisalabad are required to arrive on time. The time and venue details have been shared in the WhatsApp group "87-ag-PBG-Fsd"</p>
            </div>
          </div>
        </div>
      </section>



<Days />


      
    </div>
  );
}
