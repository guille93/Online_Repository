class CreateBackpacks < ActiveRecord::Migration
  def change
    create_table :backpacks do |t|
      t.string :title
      t.text :text

      t.timestamps null: false
    end
  end
end
