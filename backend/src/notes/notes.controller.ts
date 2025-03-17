import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  createNote(
    @Body()
    body: {
      id: string;
      type: string;
      title: string;
      brief: string;
      content: string;
      date: string;
    },
  ) {
    return this.notesService.createNewNote(
      body.id,
      body.type,
      body.title,
      body.brief,
      body.content,
      body.date,
    );
  }

  @Get(':filename')
  async getNote(@Param('filename') filename: string) {
    return await this.notesService.getNoteContent(filename);
  }

  @Get()
  getAllNotes() {
    return this.notesService.getNotes();
  }
}
