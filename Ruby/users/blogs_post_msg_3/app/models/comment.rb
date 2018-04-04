class Comment < ActiveRecord::Base
  belongs_to :comments, polymorphic: true
end
