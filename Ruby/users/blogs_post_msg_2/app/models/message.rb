class Message < ActiveRecord::Base
  belongs_to :post

  def validation_error
    errors.add(:author, :message)
  end
  validates :author, :message, presence: true
  validates :message, length: { minimum: 15 }
end
