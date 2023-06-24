# curso-node-tabla
curso de nodejs de fernando herrera

Simple applicacion de terminal para crear tablas de multiplicar

## Instalacion
```bash
npm i
```

## Uso CLI
```bash
node app
```

## Opciones
```bash
-b, --base: tabla a crear, default: 1
-h, --hasta: cantidad de filas, default: 10
-l, --listar: ver la tabla en la terminal, default: false
```

## Ejemplo con flags
Crea la tabla del 2, hasta 20 veces/filas, lo muestra en consola antes de su creacion en un archivo persistente en: "./salida/table-20.txt"
```bash
node app -b 2 --hasta 20 -l
```
