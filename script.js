// Wait until the entire webpage (HTML) is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () { 

    // Select all radio buttons that belong to the "bundle" group
    const bundleOptions = document.querySelectorAll('input[name="bundle"]'); 

    // Select the HTML element where the total price is displayed
    const totalPrice = document.getElementById("total");

    // Select all elements that represent each bundle option
    const allBundles = document.querySelectorAll(".bundle-option");

    // Loop through each radio button (bundle option)
    bundleOptions.forEach(option => { 
        // Add an event listener that triggers when the user selects (changes) a bundle option
        option.addEventListener("change", function () { 

            // Update the total price display based on the selected bundle's value
            totalPrice.textContent = "DKK " + this.value + ".00";

            // Remove the "selected" class from all bundle options (to reset styles)
            allBundles.forEach(bundle => { 
                bundle.classList.remove("selected");
            });

            // Add the "selected" class only to the currently selected bundle (to highlight it)
            this.parentNode.classList.add("selected");
        });
    });
});
