import React from 'react';


const HomeCat =  async () => {
    const res = await fetch (" http://localhost:3000/friends.json" ,{ cache: 'no-store' });
    const friends = await res.json();
    
    console.log('frrrr', friends);

    return (
        <div>
            <h3 className="text-2xl font-bold  text-[#244D3F] mt-10">Your Friends</h3>

            <div  className="div">
                {friends.map((friend) =>
                    <div key={friend.id}>
                       <h3>{friend.name}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeCat;