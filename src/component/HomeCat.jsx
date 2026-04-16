import React from 'react';
import Link from 'next/link';

const HomeCat = async () => {
    const res = await fetch("https://nextjs-project-tau-ochre.vercel.app//friends.json", { cache: 'no-store' });
    const friends = await res.json();

    const getStatusStyle = (status) => {
        if (status === "overdue") return "bg-[#FF4D4F] text-white";
        if (status === "almost due") return "bg-[#FFBB96] text-[#D4380D]";
        return "bg-[#244D3F] text-white";
    };

    return (
        <div className="pb-10">
            <h3 className="text-2xl font-bold text-[#244D3F] mt-10 mb-6">Your Friends</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {friends.map((friend) => (
                    <Link href={`/friend/${friend.id}`} key={friend.id} className="block">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition h-full cursor-pointer">
                            
                            <div className="relative w-24 h-24">
                                <img 
                                    src={friend.picture} 
                                    alt={friend.name} 
                                    className="w-full h-full rounded-full object-cover border-2 border-[#D9E1D7]"
                                />
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-bold text-xl text-gray-800 leading-tight">{friend.name}</h4>
                                <p className="text-sm text-gray-500">{friend.days_since_contact}d ago</p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {friend.tags.map((tag, index) => (
                                    <span key={index} className="text-[10px] font-semibold bg-[#EBF7F2] text-[#244D3F] px-3 py-1 rounded-full uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className={`text-[12px] font-bold px-5 py-2 rounded-full uppercase tracking-wide ${getStatusStyle(friend.status)}`}>
                                {friend.status.replace('-', ' ')}
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeCat;