import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as fsPromise from 'fs/promises';
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
    type: string,
    title: string,
    brief: string,
    content: string,
    date: string,
  ) {
    const filename = `${Date.now()}-${id.replace(/\s+/g, '_')}.txt`;
    const filePath = path.join(this.storagePath, filename);
    const noteData = `Type: ${type}\nTitle: ${title}\nBrief: ${brief}\nDate: ${date}\nContent:\n${content}`;
    fs.writeFileSync(filePath, noteData, 'utf-8');
    return { message: 'Tạo ghi chú thành công', filename: filename };
  }

  saveEditedNote(
    id: string,
    type: string,
    title: string,
    brief: string,
    content: string,
    date: string,
  ) {
    const filename = `${Date.now()}-${id.replace(/\s+/g, '_')}.txt`;
    const filePath = path.join(this.storagePath, filename);
    const noteData = `Type: ${type}\nTitle: ${title}\nBrief: ${brief}\nDate: ${date}\nContent:\n${content}`;
    fs.writeFileSync(filePath, noteData, 'utf-8');
    return { message: 'Note saved', filename };
  }

  getNotes() {
    return fs.readdirSync(this.storagePath).map((file) => ({ file }));
  }

  async getNoteContent(fileName: string): Promise<string> {
    try {
      const filePath = `${this.storagePath}/${fileName}`; // Đường dẫn đầy đủ
      const content = await fsPromise.readFile(filePath, 'utf-8'); // Đọc file dạng text
      return content;
    } catch (error) {
      throw new Error(`Không thể đọc file: ${fileName}`);
    }
  }
}
