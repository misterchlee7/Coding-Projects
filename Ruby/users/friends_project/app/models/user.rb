class User < ActiveRecord::Base
    has_many :friendships, :foreign_key => "user_id", :class_name => "Friendship"
    has_many :inverse_friendships,  :foreign_key => "friend_id",
    :class_name => "Friendship"
    has_many :friends, :through => :friendships
    has_many :inverse_friends, :through => :inverse_friendships, :source => :user
end
