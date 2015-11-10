class Step < ActiveRecord::Base
  validates :description, presence: true

  belongs_to :todo

end
