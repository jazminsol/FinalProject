class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :location, :content, :user_id, :image
  
  def image
    if object.image
    rails_blob_path(object.image, only_path: true)
    end
  end

end
