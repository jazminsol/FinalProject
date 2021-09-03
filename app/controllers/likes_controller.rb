class LikesController < ApplicationController
    before_action :set_like, only: [:show, :edit, :update, :destroy]

  def index
    @likes = Like.all
  end

  def show
  end

  def new
    @like = Like.new
  end

  def edit
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      redirect_to @like, notice: 'Like was successfully created.'
    else
      render :new
    end
  end

  def update
    if @like.update(like_params)
      redirect_to @like, notice: 'Like was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @like.destroy
    redirect_to likes_url, notice: 'Like was successfully destroyed.'
  end

  private
    def set_like
      @like = Like.find(params[:id])
    end

    def like_params
      params.permit(:totalLikes, :user_id, :post_id)
    end
end
