class User < ApplicationRecord
    has_many :posts 
    has_many :likes, through: :posts
    has_many :comments, through: :posts
    has_one_attached :image
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email
end
