import { Controller, Post, Get, Body } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  createNote(
    @Body()
    body: {
      id: string;
      title: string;
      brief: string;
      content: string;
      date: string;
    },
  ) {
    return this.notesService.createNewNote(
      body.id,
      body.title,
      body.brief,
      body.content,
      body.date,
    );
  }

  @Get()
  getAllNotes() {
    return this.notesService.getNotes();
  }
}
