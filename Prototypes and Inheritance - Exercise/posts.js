function posts() {
    class Post {
        constructor(title, content) {
          this.title = title;
          this.content = content;
        }
      
        toString() {
          return `Post: ${this.title}\nContent: ${this.content}`;
        }
      }
      
      class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
          super(title, content);
          this.likes = likes;
          this.dislikes = dislikes;
          this.comments = [];
        }
      
        addComment(comment) {
          this.comments.push(comment);
        }
      
        toString() {
          const rating = this.likes - this.dislikes;
          let result = super.toString() + `\nRating: ${rating}`;
          if (this.comments.length > 0) {
            result += "\nComments:\n";
            for (let i = 0; i < this.comments.length; i++) {
                const comment = this.comments[i];
                result += ` * ${comment}`;
                if (i !== this.comments.length - 1) {
                  result += "\n";
                }
              }
          }
          return result;
        }
      }
      
      class BlogPost extends Post {
        constructor(title, content, views) {
          super(title, content);
          this.views = views;
        }
      
        view() {
          this.views++;
          return this;
        }
      
        toString() {
          return `${super.toString()}\nViews: ${this.views}`;
        }
      }
      
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let classes = posts(); 
let post = new classes.Post("Titel", "Content")
// console.log(post.toStrong());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());