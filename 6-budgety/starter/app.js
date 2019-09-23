//------------------------- Budeget Controller ----------------------------------------------------//

var budgetController = (function() {

    let Exspense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Exspense.prototype.calcPercentage = function(totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
        
    };

    Exspense.prototype.getPercentage = function() {
        return this.percentage;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, des, val) {
            let newItem, id;

            // ID = last ID + 1
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }
            
            // Create new item based on inc or exp type
            if (type === "exp") {
                newItem = new Exspense(id, des, val);
            } else if (type === "inc") {
                newItem = new Income(id, des, val);
            }

            // Push into data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        deleteItem: function(type, id) {
            let ids, index;

            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },

        calculateBudget: function() {

            // Calculate total income and exspenses
            calculateTotal("exp");
            calculateTotal("inc");

            // Calculate the budget
            data.budget = (data.totals.inc - data.totals.exp);

            // Calculate % of income that we spend
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        
        },

        calculatePercentages: function() {

            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });

        },

        getPercentages: function() {
           let allPercs =  data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
           });
           return allPercs;
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function() {
            console.log(data);
        }
    };

})();

//------------------------- Ui Controller ----------------------------------------------------//

var uiController = (function() {

    let DOMstring = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputButton: ".add__btn",
        incomeContainer: ".income__list",
        exspensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        totalIncLabel: ".budget__income--value",
        totalExpLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
        expensesPercentageLabel: ".item__percentage",
        dateLabel: ".budget__title--month"
    };

    let formatNumber = function(num, type) {
        let numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split(".");

        int = numSplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
        }

        dec = numSplit[1];

        return (type === "exp" ? sign = "-" : sign = "+") + " " + int + "." + dec;

    }; 

    let nodeListForEach = function(list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        };
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstring.inputType).value, // Eigther inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            let html, newHtml, element;
            // Create HTML string with placeholder text
            if (type === "exp") {
                element = DOMstring.exspensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === "inc") {
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // Replace the placeholder text with data
            newHtml = html.replace("%id%", obj.id);
            newHtml = newHtml.replace("%description%", obj.description);
            newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
        },

        deleteListItem: function(selectorID) {
            let el = document.getElementById(selectorID)

            el.parentNode.removeChild(el);

        },

        clearFields: function() {
            let fields, fieldsArr;

            fields = document.querySelectorAll(DOMstring.inputDescription + ", " + DOMstring.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach( function(current) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayPercentages: function(percentages) {

            let fields = document.querySelectorAll(DOMstring.expensesPercentageLabel);
            
            let nodeListForEach = function(list, callback) {
                for (let i = 0; i < list.length; i++) {
                    callback(list[i], i);
                };
            };

            nodeListForEach(fields, function(current, index) {
                
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
                
            });

        },

        displayMonth: function() {
            let now, year, month, months;

            now = new Date();
            months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            year = now.getFullYear();
            month = now.getMonth();
            
            document.querySelector(DOMstring.dateLabel).textContent = months[month] + " " + year;
        },

        changedType: function() {

            let fields = document.querySelectorAll(
                DOMstring.inputType + "," +
                DOMstring.inputDescription + "," +
                DOMstring.inputValue
            );

            nodeListForEach(fields, function(cur) {
                cur.classList.toggle("red-focus");
            });

            document.querySelector(DOMstring.inputButton).classList.toggle("red");

        },

        getDomStrings: function() {
            return  DOMstring;
        },

        displayBudget: function(obj) {
            let type;
            obj.budget > 0 ? type = "inc" : type = "exp";

            document.querySelector(DOMstring.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstring.totalIncLabel).textContent = formatNumber(obj.totalInc, "inc");
            document.querySelector(DOMstring.totalExpLabel).textContent = formatNumber(obj.totalExp, "exp");

            if (obj.percentage > 0) {
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstring.percentageLabel).textContent = "---";
            }
        }
    
    }

})();

//------------------------- App Controller ---------------------------------------------------//

var Controller = (function(budgetCtrl, UIctrl) {

    let setupEventListeners = function() {
        let DOM = uiController.getDomStrings();

        document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);

        document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener("change", UIctrl.changedType);

        document.addEventListener("keypress", function(event) {
            
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
    
        });
    };

    var updateBudget = function() {

        // 1. Calculate budget
        budgetController.calculateBudget();

        // 2. Return budget
        var budget = budgetController.getBudget();

        // 3. Display Budget
        uiController.displayBudget(budget);
    };

    var updatePercentages = function() {

        // 1. Calculate percentages
        budgetController.calculatePercentages();

        // 2. Read percentages from budget controller
        let percentages = budgetController.getPercentages();

        // 3. Update UI
        uiController.displayPercentages(percentages);

    };

    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get field input data
        input = uiController.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0 ) {
             // 2. Add item to the budget controller
            newItem = budgetController.addItem(input.type, input.description, input.value);

            // 3. Add new item to UI
            uiController.addListItem(newItem, input.type);

            // 4. Clear the fields
            uiController.clearFields();

            // 5. Calc and update budget
            updateBudget();

            // 6. Calculate and update percentages
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event) {
        let itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            splitID = itemID.split("-");
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the item from the datastructure
            budgetController.deleteItem(type, ID);

            // 2. Delete item from UI
            uiController.deleteListItem(itemID);

            // 3. Update new budget
            updateBudget();

            // 4. Calculate and update percentages
            updatePercentages();

        }

    };

    return {
        init: function() {
            console.log("app has started");
            uiController.displayMonth();
            uiController.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setupEventListeners();
            
        }
    };

})(budgetController, uiController);

Controller.init();