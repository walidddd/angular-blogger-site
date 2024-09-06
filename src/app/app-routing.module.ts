import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleEditeComponent } from './article-edite/article-edite.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { MyPostsComponent } from './posts/my-posts/my-posts.component';
import { BlogDetailsComponent } from './show-blog/blog-details/blog-details.component';
import { BlogComponent } from './show-blog/blog/blog.component';

const routes: Routes = [
  { path: "add-article", component: AddArticleComponent },
  { path: "my-articles", component: MyArticlesComponent },
  { path: "article-edite", component: ArticleEditeComponent },
  { path: "blog/:id", component: BlogComponent },
  { path: "blog-details/:title/:index", component: BlogDetailsComponent },
  { path: "add-post", component: AddPostComponent },
  { path: "all-posts", component: AllPostsComponent },
  { path: "my-posts", component: MyPostsComponent },
  { path: "**", component: AllPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
