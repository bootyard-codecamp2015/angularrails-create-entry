class API::Public::TopicsController < ApplicationController
  
  def create
    
    @topic = Topic.create(topics_params)
  end

  private
    def topics_params
      params.require(:topic).permit(:title, :description)
    end
end