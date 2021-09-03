class SessionsController < ApplicationController
  skip_before_action :user_is_authenticated, only: [  :destroy]
  
  def create
    @user = User.find_by(username: params[:username])
    
      if @user && @user.authenticate(params[:password])  
        session[:user_id] = @user.id
        render json: @user
      else 
        render json: @user.errors, status: :unprocessable_entity
      end
  end 


  def destroy 
    
    session.delete("user_id")
    session[:user_id] = nil 
    
  end 

  private 

  

  def user_params
    params.permit(:username, :password)
  end
end