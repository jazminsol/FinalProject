# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "User1", phoneNum: 12345, password: "helloworld1", email: "user1@gmail.com")
User.create(username: "User2", phoneNum: 45678, password: "helloworld2", email: "user2@gmail.com")
User.create(username: "User3", phoneNum: 98765, password: "helloworld3", email: "user3@gmail.com")
User.create(username: "User4", phoneNum: 12345, password: "helloworld4", email: "user4@gmail.com")

post = Post.create(user_id: user.id, content: "Pic", location: "Texas")
    Post.create(user_id: user.id, content: "Doggy", location: "Florida")