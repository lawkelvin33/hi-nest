import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  //transform CreateMovieDto -> UpdateMovieDto
  //everything in CreateMovieDto is optional(not required) ==> ?을 전부 박은것과 동일!
  //returns a type (type class) with all the properties of the input type set to optional
}
