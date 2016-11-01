class RemoveMaterial < ActiveRecord::Migration
  def change
    remove_column :benches, :material
  end
end
