class AddTitleToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :title, :text
  end
end
