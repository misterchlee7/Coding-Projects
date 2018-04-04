class Post < ActiveRecord::Base
  belongs_to :blog
  has_many :messages

  before_destroy :destroy_msg

  def validation_error
    errors.add(:title, :content)
  end
  validates :title, :content, presence: true
  validates :title, length: { minimum: 7 }

  private
  def destroy_msg
    self.messages.destroy_all
  end
end
