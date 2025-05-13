export interface FileData {
    id: string;
    name: string;
    year: number;
    path: string;
    type: string;
  }
  
  export const files: FileData[] = [
    {
      id: 'anatomy-notes',
      name: 'Anatomy Notes',
      year: 1,
      path: '/files/year1/anatomy-notes.pdf',
      type: 'notes'
    },
    {
      id: 'physiology-ppt',
      name: 'Physiology Presentation',
      year: 1,
      path: '/files/year1/physiology-ppt.pptx',
      type: 'presentation'
    },
    // Add more files following the same structure
  ];