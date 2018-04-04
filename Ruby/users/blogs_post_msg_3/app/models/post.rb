class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :blog
  has_many :messages
  has_many :comments, as: :comments

  def validation_error
    errors.add(:title, :content)
  end
  validates :title, :content, presence: true
end
