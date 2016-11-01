class AddSeating < ActiveRecord::Migration
  def change
    change_column :benches, :seating, :integer, null: false, default: 2
  end
end
