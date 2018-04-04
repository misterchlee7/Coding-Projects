class Blog < ActiveRecord::Base
    has_many :owners
    has_many :posts
    has_many :users, through: :owners
    has_many :comments, as: :comments

    def validation_error
        errors.add(:name, :description)
    end
    validates :name, :description, presence: true
end
