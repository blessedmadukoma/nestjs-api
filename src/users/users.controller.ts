import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users
  findAll() {
    return [];
  }

  @Get() // GET /users
  findAllWithQueryParams(
    @Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
  ) {
    console.log(role);

    return role;
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
