import { PositionComponent } from "./Components";
import Entity from "./Entity";


class Registry {
    constructor() {
        this.numberOfEntities = 0;
        this.systems = {}
    }


    createEntity = (components) => {
        const newEntity = new Entity(this.numberOfEntities++, this);
        let newEntityComponents = {};

        for (let i = 0; i < components.length; i++) {
            const component = compoennts[i];


            switch (component["name"]) {
                case "Position":
                    const componentObj = component["value"];
                    newEntityComponents["Position"] = new PositionComponent(component["name"]);
                    break;
                default:
                    break;
            }
        }
    }
}

