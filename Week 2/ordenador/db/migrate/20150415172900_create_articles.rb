class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :Modelo
      t.text :Procesador
      t.text :RAM
      t.text :Precio

      t.timestamps null: false
    end
  end
end
