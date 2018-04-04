class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  has_many :comments, as: :comments

  def validation_error
    errors.add(:author, :message)
  end
  validates :author, :message, presence: true
end
