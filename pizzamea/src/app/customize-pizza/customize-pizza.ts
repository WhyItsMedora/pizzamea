import { Component } from "@angular/core";
import { PizzaBuilderService, PizzaOption } from "../services/pizza-builder.service";
import { OrderService } from "../order-service";
import { Router } from "@angular/router";




@Component({
    selector: 'app-customize-pizza',
    imports: [],
    templateUrl: './customize-pizza.html' ,
    styleUrl: './customize-pizza.css'

})
export class CustomizePizza {
    toppingTabs = ['All', 'Meats', 'Veggies'];
    activeTab = 'All';

    constructor(
        public pizzaBuilder: PizzaBuilderService,
        private orderService: OrderService,
        private router: Router
    ) {}

    selectSize(size: PizzaOption){ this.pizzaBuilder.setSize(size); }
    selectCrust(crust: PizzaOption) { this.pizzaBuilder.setCrust(crust); }
    selectSauce(sauce: PizzaOption) { this.pizzaBuilder.setSauce(sauce); }
    selectCheese(cheese: PizzaOption) { this.pizzaBuilder.setCheese(cheese); }
    toggleTopping(topping: PizzaOption) { this.pizzaBuilder.toggleTopping(topping); }
    toggleDrizzle(drizzle: PizzaOption) { this.pizzaBuilder.toggleDrizzle(drizzle); }
    toggleExtra(extra: PizzaOption) { this.pizzaBuilder.toggleExtra(extra); }

    getFilteredToppings(): PizzaOption[] {
        if (this.activeTab === 'Meats') return this.pizzaBuilder.meats;
        if (this.activeTab === 'Veggies') return this.pizzaBuilder.veggies;
        return [...this.pizzaBuilder.meats, ...this.pizzaBuilder.veggies];
    }

    async addToCart(){
        if (!this.pizzaBuilder.isValid()) return;
        const pizzaItem = this.pizzaBuilder.getPizzaAsOrderItem();
        const currentOrder = this.orderService.order();
        const items = currentOrder ? [...currentOrder.items, pizzaItem] : [pizzaItem];
        await this.orderService.createOrder({ items });
        this.pizzaBuilder.reset();
        this.router.navigate(['/cart']);
    }
}