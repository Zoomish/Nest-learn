import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private userRepository: typeof Post) { }

    async create(dto: CreatePostDto, image) {
        const post = await this.userRepository.create(dto);
        return post;
    }
}
