const {
    ArtEngine, 
    inputs, 
    generators, 
    renderers, 
    exporters, 
} = require('@hashlips-lab/art-engine');

const BASE_PATH = __dirname;

const ae = new ArtEngine({
    cachePath: `${BASE_PATH}/cache`,
    outputPath: `${BASE_PATH}/output`,
    inputs: {apes: new inputs.ImageLayersInput()},
    generators: [],
    renderers: [],
    exporters: [],
})