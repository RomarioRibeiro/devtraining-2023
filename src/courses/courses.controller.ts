import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

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
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        console.log(body)
        return `Update course with ID ${id}`
    }
    
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Delete course with ID ${id}`
    }
}
