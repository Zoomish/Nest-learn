import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post) { }

    async create(dto: CreatePostDto, image: any) {
        const fileName = 'asfas'
        const post = await this.postRepository.create({...dto, image: fileName});
        return post;
    }
}
