import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // url entry point
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {} //의존성 주입! (Dependency Injection)

  @Get() //routers
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  //   @Get('search') // 이 router이 밑에 /:id 보다 밑에 있으면 search를 id로 인식하여 도달 안함.
  //   search(@Query('year') searchingYear: string) {
  //     // search?year=값 에서 값을 추출하여 searchingYear에 저장
  //     return `We are seraching for a movie with the title: ${searchingYear}`;
  //   }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    // :id와 @Param('id')는 동일해야하지만, 이를 저장한 변수 movieId는 달라도 됨
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id') // 일부 업데이트
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
