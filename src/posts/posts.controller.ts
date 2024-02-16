import { CreatePostDto } from './dto/create-post.dto';
import {PostsService} from './posts.service';
import { Body, Controller, Post, UploadedFile } from '@nestjs/common';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) { }

    @Post()
    createPost(@Body() dto: CreatePostDto,
    @UploadedFile() image){
        this.postsService.create(dto, image)
    }
}
