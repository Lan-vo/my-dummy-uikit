import {ClassNameMap} from "@material-ui/core/styles/withStyles";

export const customComponent = (classes: ClassNameMap, props: any) => {
    let componentClasses = {}
    Object.keys(classes).forEach(classname => {
        console.log(classname)
        Object.assign(componentClasses, {
            // eslint-disable-next-line no-eval
            [eval(`classes.${classname}`)]: props[classname]
        })
    })
    return componentClasses
};

