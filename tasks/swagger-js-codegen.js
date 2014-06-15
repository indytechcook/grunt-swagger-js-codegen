module.exports = function (grunt) {
    'use strict';

    grunt.registerMultiTask('swagger-js-codegen', 'Swagger codegen for Javascript', function(){
        var fs = require('fs');
        var CodeGen = require('wagger-js-codegen').CodeGen;
        var options = this.options();
        var dest = options.dest;
        options.apis.forEach(function(api){
            var swagger = JSON.parse(fs.readFileSync(api.swagger));
            var gen = new CodeGen(api.className, swagger);
            var source = gen.getCode();
            fs.writeFileSync(dest + '/' + api.filename, source, 'UTF-8');
        });
    });
};
