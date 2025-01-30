import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello World';
  };

  @Post()
  createMessage() {

  }

  @Get('/:id')
  getMessage() {
    
  }
}
