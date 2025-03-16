import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class NotesService {
  private storagePath = path.join(__dirname, '../../storage');

  constructor() {
    if (!fs.existsSync(this.storagePath)) {
      fs.mkdirSync(this.storagePath, { recursive: true });
    }
  }

  createNewNote(
    id: string,
    title: string,
    brief: string,
    content: string,
    date: string,
  ) {
    const filename = `${Date.now()}-${id.replace(/\s+/g, '_')}.txt`;
    const filePath = path.join(this.storagePath, filename);
    const noteData = `Title: ${title}\nBrief: ${brief}\nDate: ${date}\nContent:\n${content}`;
    fs.writeFileSync(filePath, noteData, 'utf-8');
    return { message: 'Note saved', filename };
  }

  saveEditedNote(
    id: string,
    title: string,
    brief: string,
    content: string,
    date: string,
  ) {
    const filename = `${Date.now()}-${id.replace(/\s+/g, '_')}.txt`;
    const filePath = path.join(this.storagePath, filename);
    const noteData = `Title: ${title}\nBrief: ${brief}\nDate: ${date}\nContent:\n${content}`;
    fs.writeFileSync(filePath, noteData, 'utf-8');
    return { message: 'Note saved', filename };
  }

  getNotes() {
    return fs.readdirSync(this.storagePath).map((file) => ({ file }));
  }
}
