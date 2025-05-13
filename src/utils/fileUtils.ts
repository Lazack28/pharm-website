export function getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  
  export function getFileType(filename: string): string {
    const ext = getFileExtension(filename);
    switch (ext) {
      case 'pdf':
        return 'PDF';
      case 'pptx':
        return 'PPTX';
      case 'docx':
        return 'DOCX';
      default:
        return ext.toUpperCase();
    }
  }