import { FileData } from '../data/files';
import { getFileType } from '../utils/fileUtils';

export default function FileCard({ file }: { file: FileData }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold truncate">{file.name}</h3>
      <div className="mt-2 text-sm text-gray-600">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
          Year {file.year}
        </span>
        <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded">
          {getFileType(file.path)}
        </span>
      </div>
      <a 
        href={`/view/${file.id}`} 
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Document
      </a>
    </div>
  );
}