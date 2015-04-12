class Fruit
   def initialize (fruit, price)
       @fruit = fruit
       @price = price
   end
   
   def printFruit
       puts "#{@fruit} #{@price}"
   end
end

class Cart
  def initialize
       @fruit = Array.new
   end
   
   def addfruit fruit
       @fruit.push(fruit)        
   end
      def showFruit
       @fruit.each do |fruit|
           puts fruit.printFruit
       end
   end
      def cost
        puts "El coste total es de 100$"
      end
end
if cart(watermelon)
   

cart = Cart.new
firstfruit = Fruit.new("Apple", "10$")
secondfruit = Fruit.new("Oranges", "5$")
Thirdfruit = Fruit.new("Grapes", "15$")
Fourfruit = Fruit.new("banana", "20$")
Fivefruit = Fruit.new("watermelon", "50$")
Sixfruit = Fruit.new("watermelon", "50$")
cart.addfruit(firstfruit)
cart.addfruit(secondfruit)
cart.addfruit(Thirdfruit)
cart.addfruit(Fourfruit)
cart.addfruit(Fivefruit)
cart.addfruit(Sixfruit)
cart.cost
cart.showFruit