const fs = require('fs');
const colors = require('colors');


CrearArchivo = async( base, listar, hasta ) =>{

    try {
        if ( listar ) {
            console.log('================='.green);
            console.log(`Tabla del ${base}`.green);
            console.log('================='.green);
        }
        
        
        let salida, consola = '';
    
        for (let i = 1; i <= hasta ; i++) {
            
            salida += `${ base } x ${ i } = ${ base*i }\n`;
            consola += `${ base } x ${ i } = ${ base*i }\n`.red;
            
        }

        if (listar) {
            console.log(consola); 
        }
    
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`.yellow

        
        
    
        } catch (err) {
           throw err; 
        }

}


module.exports = {
    CrearArchivo
    
}
