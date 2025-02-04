### Project Architecture

# Component Architecture

--- Main.jsx ------------------------------------------------------------ Main.css

------- App.jsx --------------------------------------------------------- App.css

----------- Mainpage.jsx ------------------------------------------------ Mainpage.css

----------- OrderForm.jsx ----------------------------------------------- OrderForm.css
--------------- Header.jsx
--------------- Radio.jsx ----------------------------------------------- Radio.css
--------------- Dropdown.jsx -------------------------------------------- Dropdown.css
--------------- Checbox.jsx --------------------------------------------- Checkbox.css
--------------- OrderFooter.jsx ----------------------------------------- OrderFooter.css

----------- OrderConfirmation.jsx --------------------------------------- OrderConfirmation.css


# Data Transfer Between Components with Prop Lifting

App.jsx ----> handleData(f), handleError(f) ----> OrderForm.jsx ---> handleData(f) sets formData(obj) as data(obj) after submit ---> App.jsx

App.jsx ----> data(obj), apiError ----> OrderConfirmation.jsx

OrderForm.jsx ----> handleChange(f), error(obj), errorMessages(obj), radioValuesInitial(arr) ----> Radio.jsx
Radio.jsx ----> **<ins>formData.size<ins>** is set by handleChange(f) ---> OrderForm.jsx

OrderForm.jsx ----> handleChange(f), error(obj), errorMessages(obj), dropdownValuesInitial(arr) ----> Dropdown.jsx
Dropdown.jsx ----> **<ins>formData.crust<ins>** is set by handleChange(f) ---> OrderForm.jsx

OrderForm.jsx ----> handleChange(f), error(obj), errorMessages(obj), toppingsInitial(arr) ----> Checkbox.jsx
Checkbox.jsx ----> **<ins>formData.toppings<ins>** is set by handleChange(f) ---> OrderForm.jsx

OrderForm.jsx ----> handleChange(f), error(obj), errorMessages(obj) ----> Name.jsx
Name.jsx **<ins>formData.name<ins>** is set by handleChange(f) ---> OrderForm.jsx

OrderForm.jsx ----> handleClick(f), handleChange(f), pizzaCount, toppingsAmount, amount, totalAmount   ----> OrderFooter.jsx
OrderFooter.jsx **<ins>formData.pizzaCount<ins>** is set by handleClick(f) ---> OrderForm.jsx

Remaining formData(obj) values are calculated at OrderForm;
**<ins>formData.toppingsCounter<ins>** 
**<ins>formData.toppingsAmount<ins>** 
**<ins>formData.amount<ins>** 
**<ins>formData.totalAmount<ins>** 

