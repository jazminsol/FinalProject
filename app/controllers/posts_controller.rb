class PostsController < ApplicationController
    skip_before_action :user_is_authenticated, only: [:show, :update, :destroy, :index]
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    
    @posts = Post.all
    render json: @posts.order(created_at: :desc)
  end


  def show

    render json: @post
  end

  
  def create

    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end


  def update

    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @post.destroy
  end

  private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.permit(:content, :location, :user_id, :image)
    end
end
