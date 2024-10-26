import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(@Res() response) {
        return response.status(200).json({ mensagem: 'Listagem de Curso' })
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso com Id ${id}`
    }

    @Post()
    create(@Body() body) {
        return body
    }
}
