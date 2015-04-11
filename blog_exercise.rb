class Post
   def initialize (title, date, symbol, text, symbol2)
       @title = title
       @date = date
       @symbol = symbol
       @text = text
       @symbol2 = symbol2
   end
   
   def printPost
       puts "#{@title} #{@date} #{@symbol} #{@text} #{@symbol2}"
   end
end
class Blog
   def initialize
       @post = Array.new
   end
   
   def addPost post
       @post.push(post)        
   end
   
   def showPost
       @post.each do |post|
           puts post.printPost
       end
   end
end

myBlog = Blog.new

firstPost = Post.new("Title 1", "12/12/2012\n","************\n","my first post\n","-------------")
secondPost = Post.new("Title 2", "22/22/2022\n","***********\n","my second post\n","-------------")
ThirdPost = Post.new("Title 3", "22/22/2022\n","************\n","my third post\n","-------------")
myBlog.addPost(firstPost)
myBlog.addPost(secondPost)
myBlog.addPost(ThirdPost)
myBlog.showPost