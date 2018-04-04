class User < ActiveRecord::Base
    has_many :owners
    has_many :posts
    has_many :messages
    has_many :blogs, through: :owners
    has_many :comments, as: :comments

    def validation_error
        errors.add(:first_name, :last_name, :email_address)
    end
    validates :first_name, :last_name, :email_address, presence: true
end
