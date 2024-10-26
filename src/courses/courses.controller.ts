import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll() {
        return 'Listagem de  Cursos'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso com Id ${id}`
    }

}
