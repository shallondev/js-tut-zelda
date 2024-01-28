class System {
    constructor(systemType) {
        this.systemType = systemType;
        this.entities = {}
    }
}


class MovementSystem extends System {
    constructor(systemType) {
        super(systemType);
        this.componentRequirements = ["Movement", "Position"];
    }

    update = () => {
        for (let i=0; i < this.entities.length; i++) {
            const entity = entities[i];

            let { Movement, Position } = this.entities.components;

            Position.x += Movement.vX;
            Position.y += Movement.vY;
        }
    }
}

export { MovementSystem };