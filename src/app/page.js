import React from 'react';

export default function SuperqurbanKambing() {
    return (
        <div className="bg-gray-100 p-10 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8 bg-white border border-gray-300 rounded-lg">
            <h1 className="text-2xl font-bold mb-2 text-black">Superqurban Kambing</h1>
            <p className="text-lg text-gray-500 mb-4">Manfaat qurban Anda, jadi semakin luas</p>
              
            <div className="border border-gray-300 rounded-lg p-4" style={{ borderStyle: 'dashed', borderWidth: '2px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex items-center p-4 pl-10 border-r border-gray-300" style={{ borderRightStyle: 'dashed', borderRightWidth: '2px' }}>
                        <img src="/images/1.png" alt="Icon 1" className="h-12 w-12 mr-4" />
                        <div>
                            <div className="text-xl font-bold mb-1 text-black">789.500</div>
                            <div className="text-gray-400">Pequrban (2023)</div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 pl-10">
                        <img src="/images/2.png" alt="Icon 2" className="h-12 w-12 mr-4" />
                        <div>
                            <div className="text-xl font-bold mb-1 text-black">98.213</div>
                            <div className="text-gray-400">Penerima Manfaat (2023)</div>
                        </div>
                    </div>
                </div>
            </div>

</div>

            </div>
        
    );
}
