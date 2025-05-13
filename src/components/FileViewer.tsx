import { Document, Page } from 'react-pdf';
import { getFileType } from '../utils/fileUtils';

interface FileViewerProps {
  file: {
    path: string;
    name: string;
  };
}

export default function FileViewer({ file }: FileViewerProps) {
  const fileType = getFileType(file.path);

  return (
    <div className="h-screen w-full">
      {fileType === 'PDF' ? (
        <Document file={file.path}>
          <Page pageNumber={1} />
        </Document>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <iframe 
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${file.path}`}
            className="w-full h-3/4"
            title={file.name}
          />
        </div>
      )}
    </div>
  );
}