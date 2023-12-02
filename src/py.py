# Define a class for restaurant items
class Item:
  # Initialize the item with name and price
  def __init__(self, name, price):
    self.name = name
    self.price = price

  # Return the item name
  def get_name(self):
    return self.name

  # Return the item price
  def get_price(self):
    return self.price

# Define a class for restaurant orders
class Order:
  # Initialize the order with a list of items and a tip percentage
  def __init__(self, items, tip):
    self.items = items
    self.tip = tip

  # Return the order items
  def get_items(self):
    return self.items

  # Return the order tip percentage
  def get_tip(self):
    return self.tip

  # Calculate the subtotal amount based on the item prices
  def get_subtotal(self):
    subtotal = 0
    for item in self.items:
      subtotal += item.get_price()
    return subtotal

  # Calculate the tax amount based on a fixed rate of 10%
  def get_tax(self):
    tax_rate = 0.1
    tax = self.get_subtotal() * tax_rate
    return tax

  # Calculate the tip amount based on the tip percentage and the subtotal amount
  def get_tip_amount(self):
    tip_amount = self.get_subtotal() * (self.tip / 100)
    return tip_amount

  # Calculate the total amount based on the subtotal, tax, and tip amounts
  def get_total(self):
    total = self.get_subtotal() + self.get_tax() + self.get_tip_amount()
    return total

# Define a class for restaurant receipt system
class ReceiptSystem:
  # Initialize the system with a list of orders
  def __init__(self, orders):
    self.orders = orders

  # Display the available items by name and price
  def show_available_items(self):
    print("Available items:")
    for item in self.items:
      print(f"{item.get_name()} - ${item.get_price()}")

  # Create a new order by asking for item choices and tip percentage
  def create_order(self):
    print("Please choose your items:")
    print("1. Burger - $10")
    print("2. Pizza - $15")
    print("3. Salad - $8")
    print("4. Soda - $2")
    
    choices = input("Enter your choices (1-4) separated by commas: ")
    
    items = []
    
    for choice in choices.split(","):
      choice = int(choice.strip())
      if choice == 1:
        item = Item("Burger", 10)
      elif choice == 2:
        item = Item("Pizza", 15)
      elif choice == 3:
        item = Item("Salad", 8)
      elif choice == 4:
        item = Item("Soda", 2)
      else:
        print("Invalid choice.")
        return
      
      items.append(item)
    
    print("Please enter your tip percentage:")
    
    tip = float(input("Tip (%): "))
    
    order = Order(items, tip)
    self.orders.append(order)
    print("Order created successfully.")
  
  # Print a receipt for a given order
  def print_receipt(self, order):
    print("Restaurant Receipt")
    
    print("Items:")
    
    for item in order.get_items():
      print(f"{item.get_name()} - ${item.get_price()}")
    
    print(f"Subtotal: ${order.get_subtotal():.2f}")
    
    print(f"Tax: ${order.get_tax():.2f}")
    
    print(f"Tip: ${order.get_tip_amount():.2f}")
    
    print(f"Total: ${order.get_total():.2f}")
  
  # Display the receipts for all orders
  def show_all_receipts(self):
    for order in self.orders:
      self.print_receipt(order)
      print()

# Create some sample items
items = [
  Item("Burger", 10),
  Item("Pizza", 15),
  Item("Salad", 8),
  Item("Soda", 2),
]

# Create an empty list of orders
orders = []

# Create a receipt system object
system = ReceiptSystem(orders)

# Test the system
system.show_available_items()
system.create_order()
system.show_all_receipts()
