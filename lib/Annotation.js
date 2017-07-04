let State = require('./State');


let Annotation = {
    ant: null,
    resetRouter: () => {
        Annotation.ant = {};
    },
    route: (url) => {
        Annotation.resetRouter();
        return (target, key, descriptor) => {
            Annotation.ant.route = {path: url, value: target};
            State.annotation.push(Annotation.ant);
        }
    },
    get: function (url) {
        return (target, key, descriptor) => {
            Annotation.ant['get'] = Annotation.ant['get'] || [];
            Annotation.ant['get'].push({path: url, value: descriptor.value});
        }
    },
    post: function (url) {
        return (target, key, descriptor) => {
            Annotation.ant['post'] = Annotation.ant['post'] || [];
            Annotation.ant['post'].push({path: url, value: descriptor.value});
        }
    },
    resource: function (refer) {
        return (target, key, descriptor) => {
            Annotation.ant['resource'] = Annotation.ant['resource'] || [];
            Annotation.ant['resource'].push({
                key: key,
                value: new refer(...Array.prototype.slice.call(arguments, 1))
            });
        };
    }
};
module.exports = Annotation;