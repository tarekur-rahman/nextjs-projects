"use client";
import React, { useEffect, useState } from 'react';
import { Clock, Archive, Trash2, Phone, MessageSquare, Video, Edit2 } from 'lucide-react';
import toast from 'react-hot-toast';

const CardDetails = ({ params }) => {
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resolvedParams = await params;
                const res = await fetch('http://localhost:3000/friends.json');
                const friends = await res.json();
                const foundFriend = friends.find((f) => String(f.id) === String(resolvedParams.id));
                setFriend(foundFriend);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchData();
    }, [params]);

    const handleAction = (type) => {
        toast.success(`You are ${type} to ${friend.name}`);
    };

    if (loading) return <div className="text-center py-20 font-bold text-[#244D3F]">Loading...</div>;
    if (!friend) return <div className="text-center py-20 font-bold text-red-500">Friend Not Found!</div>;

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <div className="w-[95%] lg:w-[80%] mx-auto py-11">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    <div className="md:col-span-4 space-y-4">
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                            <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-50" />
                            <h2 className="text-2xl font-bold text-gray-800 mt-4">{friend.name}</h2>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{friend.status}</span>
                                <span className="bg-green-300 text-[#244D3F] text-[10px] font-bold px-3 py-1 rounded-full uppercase">{friend.tags[0]}</span>
                            </div>
                            <p className="text-gray-400 italic mt-6 text-sm">"{friend.bio}"</p>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-sm font-medium">
                            <button className="w-full flex items-center justify-center gap-2 py-4 border-b border-gray-300 text-gray-700">
                                <Clock size={16} /> Snooze 2 Weeks
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 border-b border-gray-300 text-gray-700">
                                <Archive size={16} /> Archive
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 text-red-500">
                                <Trash2 size={16} /> Delete
                            </button>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                                <h3 className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</h3>
                                <p className="text-gray-400 text-xs mt-1 font-medium">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                                <h3 className="text-3xl font-bold text-[#244D3F]">{friend.goal}</h3>
                                <p className="text-gray-400 text-xs mt-1 font-medium">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                                <h3 className="text-2xl font-bold text-[#244D3F]">{friend.next_due_date?.split(',')[0]}</h3>
                                <p className="text-gray-400 text-xs mt-1 font-medium">Next Due</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
                            <div>
                                <h4 className="text-lg font-bold text-gray-700">Relationship Goal</h4>
                                <p className="text-gray-500 mt-4 text-sm">Connect every <span className="text-gray-800 font-bold">{friend.goal} days</span></p>
                            </div>
                            <button className="bg-gray-50 text-gray-600 px-4 py-1.5 rounded border border-gray-200 text-sm font-medium flex items-center gap-2">
                                <Edit2 size={14} /> Edit
                            </button>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-700 mb-6">Quick Check-In</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <button onClick={() => handleAction('calling')} className="flex flex-col items-center justify-center py-6 border bg-[#F8FAFC] border-gray-200 rounded-xl text-gray-600">
                                    <Phone size={24} className="mb-2" />
                                    <p className="font-medium">Call</p>
                                </button>
                                <button onClick={() => handleAction('sending text')} className="flex flex-col items-center justify-center py-6 border bg-[#F8FAFC] border-gray-200 rounded-xl text-gray-600">
                                    <MessageSquare size={24} className="mb-2" />
                                    <p className="font-medium">Text</p>
                                </button>
                                <button onClick={() => handleAction('starting video call')} className="flex flex-col items-center justify-center py-6 border bg-[#F8FAFC] border-gray-200 rounded-xl text-gray-600">
                                    <Video size={24} className="mb-2" />
                                    <p className="font-medium">Video</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;