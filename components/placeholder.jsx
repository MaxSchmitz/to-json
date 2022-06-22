export default function Placeholder() {
    return (
      <div className="shadow-md rounded-md bg-white p-4">
        <div className="border-b border-gray-200">
          <div className="flex items-center py-2">
            <div className="rounded-full h-20 w-20 bg-blue-200"></div>
            <div className="flex-1 ml-4">
              <div className="bg-gray-200 p-2 rounded-md mb-2"></div>
              <div className="bg-gray-200 p-2 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="space-y-2 py-4">
          <div className="bg-gray-200 p-2 rounded-md"></div>
          <div className="bg-gray-200 p-2 rounded-md"></div>
          <div className="bg-gray-200 p-2 rounded-md"></div>
        </div>
        <div className="flex justify-between">
          <div className="rounded-md w-20 h-14 bg-indigo-200"></div>
          <div className="rounded-md w-20 h-14 bg-green-200"></div>
        </div>
      </div>
    )
  }