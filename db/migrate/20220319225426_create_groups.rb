class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.string :name

      t.timestamps
    end

    create_table :memberships do |t|
      t.references :user, foreign_key: { on_delete: :cascade }
      t.references :group, foreign_key: { on_delete: :cascade }

      t.timestamps
    end
  end
end
