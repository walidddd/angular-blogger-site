import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddArticleComponent } from './add-article/add-article.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { ArticleEditeComponent } from './article-edite/article-edite.component';
import { BlogDetailsComponent } from './show-blog/blog-details/blog-details.component';
import { BlogComponent } from './show-blog/blog/blog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { MyPostsComponent } from './posts/my-posts/my-posts.component';



@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    MyArticlesComponent,
    ArticleEditeComponent,
    BlogDetailsComponent,
    BlogComponent,
    SafeHtmlPipe,
    AddPostComponent,
    AllPostsComponent,
    MyPostsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    NgxDatatableModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
