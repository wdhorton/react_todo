class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :description, presence: true

      t.timestamps
    end
  end
end
