
import HomeCat from "@/component/HomeCat";
export default function Home() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="w-[90%] md:w-[80%] mx-auto py-5">
        
       
        <div className="text-center pt-10">
          <h1 className="text-4xl font-bold text-[#244D3F]">
            Friends to keep close in your life
          </h1>
          <p className="py-4 text-gray-600 max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="px-5 py-2 text-gray-100 bg-[#244D3F] rounded-md my-4 hover:bg-[#1a3a2f] transition">
            + Add a Friend
          </button>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10 border-b-1 border-gray-300">
          
          
          <div className="p-9 bg-white text-center shadow-sm rounded-lg border border-gray-100 space-y-2">
            <h3 className="text-3xl font-bold text-[#244D3F]">10</h3>
            <p className="text-gray-500">Total Friends</p>
          </div>

          <div className="p-9 bg-white text-center shadow-sm rounded-lg border border-gray-100 space-y-2">
            <h3 className="text-3xl font-bold text-[#244D3F]">03</h3>
            <p className="text-gray-500">Ontrack</p>
          </div>

          <div className="p-9 bg-white text-center shadow-sm rounded-lg border border-gray-100 space-y-2">
            <h3 className="text-3xl font-bold text-[#244D3F]">06</h3>
            <p className="text-gray-500">Need Attention</p>
          </div>

          <div className="p-9 bg-white text-center shadow-sm rounded-lg border border-gray-100 space-y-2">
            <h3 className="text-3xl font-bold text-[#244D3F]">12</h3>
            <p className="text-gray-500">Interactions This Month </p>
          </div>


        </div>

        <HomeCat></HomeCat>
      </div>
    </div>
  );
}