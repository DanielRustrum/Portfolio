/* Lazy Load html or request html when it is needed */
export class Component {
    components = {}

    set(component_name, settings) {
        this.components[component_name] = {
            "loaded": false,
            "displayed": false,
            "settings": settings
        }   
    }

    load(component_name) {

    }

    display(component_name) {

    }
}