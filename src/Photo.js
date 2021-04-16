import React from 'react'

const Photo = ({title, url}) => {
    return (
        <div>
            <div className="w-full">
                <div className="px-1">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src={url} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            {title}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                    </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Photo
