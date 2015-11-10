class CreateTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, presence: true
      t.text :body, presence: true
      t.boolean :done, inclusion: true

      t.timestamps
    end
  end
end
