class ChangeTodoDone < ActiveRecord::Migration
  def change
    change_column_default :todos, :done, false
  end
end
